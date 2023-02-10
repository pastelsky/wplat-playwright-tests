import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-borders/border-width-rounding.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-borders/border-width-rounding.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-borders/borders-on-sub-unit-sized-elements.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-borders/borders-on-sub-unit-sized-elements.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-borders/subpixel-border-width.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-borders/subpixel-border-width.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-borders/subpixel-borders-with-child-border-box-sizing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-borders/subpixel-borders-with-child-border-box-sizing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-borders/subpixel-borders-with-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-borders/subpixel-borders-with-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-borders/reference/borders-on-sub-unit-sized-elements-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-borders/reference/borders-on-sub-unit-sized-elements-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-borders/reference/subpixel-border-width-ref.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-borders/reference/subpixel-border-width-ref.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-borders/reference/subpixel-borders-with-child-border-box-sizing-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-borders/reference/subpixel-borders-with-child-border-box-sizing-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-borders/reference/subpixel-borders-with-child-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-borders/reference/subpixel-borders-with-child-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

