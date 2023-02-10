import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-color-adjust/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/parsing/color-scheme-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/parsing/color-scheme-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/parsing/color-scheme-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/parsing/color-scheme-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/parsing/color-scheme-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/parsing/color-scheme-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/parsing/print-color-adjust.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/parsing/print-color-adjust.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-change-checkbox-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-change-checkbox-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-change-checkbox.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-change-checkbox.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-color-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-color-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-background-mismatch-alpha.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-background-mismatch-alpha.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-background-mismatch-opaque-cross-origin.sub.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-background-mismatch-opaque-cross-origin.sub.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-background-mismatch-opaque.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-background-mismatch-opaque.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-background-mismatch-used-preferred-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-background-mismatch-used-preferred-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-background-mismatch-used-preferred.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-background-mismatch-used-preferred.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-background-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-background-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-background.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-background.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-preferred-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-preferred-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-preferred.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-iframe-preferred.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-root-background.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-root-background.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-system-colors.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-system-colors.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-table-border-currentcolor-responsive-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-table-border-currentcolor-responsive-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-table-border-currentcolor-responsive.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-table-border-currentcolor-responsive.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-visited-link-initial-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-visited-link-initial-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/color-scheme-visited-link-initial.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/color-scheme-visited-link-initial.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/svg-as-image-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/svg-as-image-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/svg-as-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/svg-as-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/support/dark-frame-alpha.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/support/dark-frame-alpha.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/support/dark-frame-opaque.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/support/dark-frame-opaque.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/support/dark-frame-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/support/dark-frame-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/support/dark-frame.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/support/dark-frame.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color-adjust/rendering/dark-color-scheme/support/prefers-color-scheme-blue-purple.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color-adjust/rendering/dark-color-scheme/support/prefers-color-scheme-blue-purple.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

