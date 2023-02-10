import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-page/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-page/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-page/page-orientation.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-page/page-orientation.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-page/page-rule-declarations-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-page/page-rule-declarations-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-page/page-rule-declarations-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-page/page-rule-declarations-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-page/page-rule-declarations-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-page/page-rule-declarations-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-page/page-rule-declarations-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-page/page-rule-declarations-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-page/page-rule-declarations-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-page/page-rule-declarations-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-page/parsing/page-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-page/parsing/page-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-page/parsing/page-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-page/parsing/page-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-page/parsing/page-orientation-computed.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-page/parsing/page-orientation-computed.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-page/parsing/page-orientation-invalid.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-page/parsing/page-orientation-invalid.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-page/parsing/page-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-page/parsing/page-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-page/parsing/size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-page/parsing/size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

