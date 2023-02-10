import globby from 'globby';
import fs from 'fs';
import path from 'path'
import _ from 'lodash'


let tests = globby.sync('wpt/css/**/*.html').map(a => a.replace('wpt/css/', ''))

console.log('tests are', tests)

const port = 5050

const testTemplate = (path: string) => `
 
   test('snapshot ${path}', async ({ page }) => {
      await page.goto('http://localhost:5050/${path}');
      page.on('console', msg => { console.log('From page', msg.text());}); 
      await expect(page).toHaveScreenshot();
   })  

`

const grouped: Record<string, string[]> = _.groupBy(tests, (test) => test.split('/')[0])
export  {grouped };






if (require.main === module) {
    for(let [group, tests] of Object.entries(grouped) ) {
        const generated:string = tests.map(testPath => testTemplate(testPath)).join('\n');
        fs.writeFileSync(path.join(__dirname, 'tests', `${group}.generated.spec.ts`), `import { test, expect } from "@playwright/test"; \n` + generated, 'utf8')
    }
}

