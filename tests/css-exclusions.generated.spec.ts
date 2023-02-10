import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-exclusions/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-exclusions/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-exclusions/wrap-flow-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-exclusions/wrap-flow-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-exclusions/wrap-flow-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-exclusions/wrap-flow-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-exclusions/wrap-flow-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-exclusions/wrap-flow-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-exclusions/wrap-flow-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-exclusions/wrap-flow-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-exclusions/wrap-flow-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-exclusions/wrap-flow-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-exclusions/wrap-flow-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-exclusions/wrap-flow-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-exclusions/wrap-through-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-exclusions/wrap-through-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

