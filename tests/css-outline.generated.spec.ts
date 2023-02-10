import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-outline/outline-width-rounding.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-outline/outline-width-rounding.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-outline/subpixel-outline-width.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-outline/subpixel-outline-width.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-outline/reference/subpixel-outline-width-ref.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-outline/reference/subpixel-outline-width-ref.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

