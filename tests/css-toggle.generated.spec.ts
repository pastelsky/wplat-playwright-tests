import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-toggle/idlharness.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/idlharness.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/toggle-activation-with-groups.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/toggle-activation-with-groups.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/toggle-activation.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/toggle-activation.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/toggle-api.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/toggle-api.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/toggle-creation.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/toggle-creation.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/toggle-events.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/toggle-events.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/toggle-pseudo-class.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/toggle-pseudo-class.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/toggle-shorthand-serialization.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/toggle-shorthand-serialization.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/toggle-trigger-focus.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/toggle-trigger-focus.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/toggle-trigger-multiple.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/toggle-trigger-multiple.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/toggle-visibility-z-ordering-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/toggle-visibility-z-ordering-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/toggle-visibility-z-ordering-002.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/toggle-visibility-z-ordering-002.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/toggle-visibility.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/toggle-visibility.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/animations/toggle-group-interpolation.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/animations/toggle-group-interpolation.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/animations/toggle-root-interpolation.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/animations/toggle-root-interpolation.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/animations/toggle-trigger-interpolation.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/animations/toggle-trigger-interpolation.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/parsing/toggle-computed.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/parsing/toggle-computed.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/parsing/toggle-group-computed.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/parsing/toggle-group-computed.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/parsing/toggle-group-invalid.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/parsing/toggle-group-invalid.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/parsing/toggle-group-valid.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/parsing/toggle-group-valid.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/parsing/toggle-invalid.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/parsing/toggle-invalid.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/parsing/toggle-root-computed.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/parsing/toggle-root-computed.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/parsing/toggle-root-invalid.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/parsing/toggle-root-invalid.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/parsing/toggle-root-valid.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/parsing/toggle-root-valid.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/parsing/toggle-trigger-computed.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/parsing/toggle-trigger-computed.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/parsing/toggle-trigger-invalid.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/parsing/toggle-trigger-invalid.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/parsing/toggle-trigger-valid.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/parsing/toggle-trigger-valid.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/parsing/toggle-valid.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/parsing/toggle-valid.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/parsing/toggle-visibility-computed.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/parsing/toggle-visibility-computed.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/parsing/toggle-visibility-invalid.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/parsing/toggle-visibility-invalid.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-toggle/parsing/toggle-visibility-valid.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-toggle/parsing/toggle-visibility-valid.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

