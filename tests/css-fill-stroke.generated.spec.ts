import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-fill-stroke/paint-order-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fill-stroke/paint-order-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fill-stroke/reference/paint-order-001-ref.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fill-stroke/reference/paint-order-001-ref.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

