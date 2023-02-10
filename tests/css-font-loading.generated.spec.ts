import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-font-loading/empty-family-load.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/empty-family-load.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/font-face-reject.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/font-face-reject.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontface-descriptor-updates-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontface-descriptor-updates-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontface-descriptor-updates.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontface-descriptor-updates.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontface-load-in-modal-dialog.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontface-load-in-modal-dialog.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontface-override-descriptor-getter-setter.sub.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontface-override-descriptor-getter-setter.sub.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontface-override-descriptors-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontface-override-descriptors-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontface-override-descriptors.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontface-override-descriptors.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontface-size-adjust-descriptor-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontface-size-adjust-descriptor-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontface-size-adjust-descriptor.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontface-size-adjust-descriptor.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontfaceset-add-css-connected.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontfaceset-add-css-connected.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontfaceset-clear-css-connected-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontfaceset-clear-css-connected-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontfaceset-clear-css-connected-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontfaceset-clear-css-connected-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontfaceset-clear-css-connected.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontfaceset-clear-css-connected.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontfaceset-delete-css-connected-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontfaceset-delete-css-connected-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontfaceset-delete-css-connected-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontfaceset-delete-css-connected-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontfaceset-delete-css-connected.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontfaceset-delete-css-connected.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontfaceset-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontfaceset-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontfaceset-load-css-connected.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontfaceset-load-css-connected.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontfaceset-load-css-wide-keywords.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontfaceset-load-css-wide-keywords.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontfaceset-load-var.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontfaceset-load-var.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontfaceset-no-root-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontfaceset-no-root-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontfaceset-update-after-stylesheet-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontfaceset-update-after-stylesheet-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/fontfacesetloadevent-constructor.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/fontfacesetloadevent-constructor.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/idlharness.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/idlharness.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-font-loading/nonexistent-file-url.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-font-loading/nonexistent-file-url.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

