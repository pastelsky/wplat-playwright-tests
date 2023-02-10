import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-parser-api/idlharness.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-parser-api/idlharness.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

