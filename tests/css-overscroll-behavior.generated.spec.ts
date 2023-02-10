import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-overscroll-behavior/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overscroll-behavior/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overscroll-behavior/overscroll-behavior-logical.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overscroll-behavior/overscroll-behavior-logical.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overscroll-behavior/overscroll-behavior.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overscroll-behavior/overscroll-behavior.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overscroll-behavior/parsing/overscroll-behavior-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overscroll-behavior/parsing/overscroll-behavior-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overscroll-behavior/parsing/overscroll-behavior-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overscroll-behavior/parsing/overscroll-behavior-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overscroll-behavior/parsing/overscroll-behavior-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overscroll-behavior/parsing/overscroll-behavior-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

