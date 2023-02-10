import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-forced-color-adjust/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-forced-color-adjust/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-forced-color-adjust/parsing/forced-color-adjust-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-forced-color-adjust/parsing/forced-color-adjust-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-forced-color-adjust/parsing/forced-color-adjust-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-forced-color-adjust/parsing/forced-color-adjust-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-forced-color-adjust/parsing/forced-color-adjust-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-forced-color-adjust/parsing/forced-color-adjust-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

