import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-env/at-supports.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-env/at-supports.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-env/env-in-custom-properties.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-env/env-in-custom-properties.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-env/fallback-nested-var.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-env/fallback-nested-var.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-env/indexed-env.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-env/indexed-env.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-env/seralization-round-tripping.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-env/seralization-round-tripping.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-env/supports-script.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-env/supports-script.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-env/syntax.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-env/syntax.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-env/unknown-env-names-override-previous.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-env/unknown-env-names-override-previous.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

