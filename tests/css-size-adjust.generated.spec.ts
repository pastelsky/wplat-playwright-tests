import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-size-adjust/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-size-adjust/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-size-adjust/animations/text-size-adjust-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-size-adjust/animations/text-size-adjust-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-size-adjust/parsing/text-size-adjust-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-size-adjust/parsing/text-size-adjust-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-size-adjust/parsing/text-size-adjust-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-size-adjust/parsing/text-size-adjust-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-size-adjust/parsing/text-size-adjust-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-size-adjust/parsing/text-size-adjust-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

