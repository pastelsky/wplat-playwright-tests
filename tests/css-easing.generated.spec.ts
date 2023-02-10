import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-easing/cubic-bezier-timing-functions-output.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-easing/cubic-bezier-timing-functions-output.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-easing/linear-timing-functions-output.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-easing/linear-timing-functions-output.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-easing/linear-timing-functions-syntax.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-easing/linear-timing-functions-syntax.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-easing/step-timing-functions-output.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-easing/step-timing-functions-output.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-easing/step-timing-functions-syntax.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-easing/step-timing-functions-syntax.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-easing/timing-functions-syntax-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-easing/timing-functions-syntax-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-easing/timing-functions-syntax-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-easing/timing-functions-syntax-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-easing/timing-functions-syntax-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-easing/timing-functions-syntax-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

