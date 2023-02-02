import globby from 'globby';
import fs from 'fs';
import path from 'path'


const tests = globby.sync('wpt/css/**/*.html').map(a => a.replace('wpt/css/', ''))

console.log('tests are', tests)

const port = 5050

const testTemplate = (path: string) => `
 
   test('snapshot ${path}', async ({ page }) => {
      await page.goto('http://localhost:5050/${path}');
      await expect(page).toHaveScreenshot();
   })  

`

const generated:string = tests.map(testPath => testTemplate(testPath)).join('\n');
fs.writeFileSync(path.join(__dirname, 'tests', 'generated.spec.ts'), `import { test, expect } from "@playwright/test"; \n` + generated, 'utf8')



