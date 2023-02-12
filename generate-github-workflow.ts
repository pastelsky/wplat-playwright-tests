const template = (shards: string[]) => `
name: Playwright Tests
on:
  push:
    branches: [ main, master, ssim ]
  pull_request:
    branches: [ main, master, ssim ]
    
permissions:
  contents: write
  pages: write
  id-token: write
  
jobs:
  ${shards.map((shard, i) =>
    `shard-${shard}:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    container:
      image: mcr.microsoft.com/playwright:v1.30.0-focal
    steps:
    - uses: actions/checkout@v3
      with:         
        fetch-depth: 0
    - uses: actions/setup-node@v3
      with:
        node-version: 18
        cache: 'npm'
    - name: Print system info
      run: cat /proc/cpuinfo    
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
    - name: Run Playwright tests
      run: npx playwright test 'tests/${shard}.generated.spec.ts'
    - name: Prepare
      if: always()
      run: mkdir -p github-pages/${shard} && mv playwright-report github-pages/${shard}
    - uses: fregante/setup-git-user@v1  
      if: always()
    - name: Publish
      if: always()
      run: |
        git config --global --add safe.directory '*'
        mkdir -p /tmp/publish/${shard} && mv github-pages /tmp/publish/${shard}
        git fetch --all
        git checkout --track origin/gh-pages
        git pull origin gh-pages
        rm -rf \${{ github.ref_name }}/${shard} && mkdir -p \${{ github.ref_name }}/${shard}
        cp -r /tmp/publish/${shard}/github-pages/${shard}/playwright-report/* ./\${{ github.ref_name }}/${shard}
        git status
        git add -A \${{ github.ref_name }}/${shard}/*
        git status
        git commit -m 'Updated for Action #\${{github.run_number}}'
    - uses: Wandalen/wretry.action@master  
      if: always()
      with:
        command: git update-ref -d refs/remotes/origin/gh-pages && git pull && git push
        attempt_limit: 5
        attempt_delay: ${i * 200}
    - name: Print report URL
      if: always()
      run: |
        echo "Report URL: https://pastelsky.github.io/wplat-playwright-tests/\${{ github.ref_name }}/${shard}/index.html"    
`).join('\n  ')}`


import {grouped} from './index';
import fs from 'fs'
import path from 'path'

const workflow = template(Object.keys(grouped));

fs.writeFileSync(path.join(__dirname, '.github', 'workflows', 'playwright.yml'), workflow, 'utf8')
