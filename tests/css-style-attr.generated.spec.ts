import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-style-attr/reference/ref-green.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-style-attr/reference/ref-green.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-style-attr/reference/ref-white-on-green-background.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-style-attr/reference/ref-white-on-green-background.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

