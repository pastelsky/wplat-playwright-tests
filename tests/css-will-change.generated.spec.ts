import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-will-change/green-square-100-by-100-offset-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/green-square-100-by-100-offset-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/green-square-100-by-100-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/green-square-100-by-100-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-abspos-cb-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-abspos-cb-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-abspos-cb-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-abspos-cb-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-abspos-cb-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-abspos-cb-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-abspos-cb-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-abspos-cb-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-abspos-cb-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-abspos-cb-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-abspos-cb-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-abspos-cb-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-abspos-cb-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-abspos-cb-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixedpos-cb-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixedpos-cb-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixedpos-cb-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixedpos-cb-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixedpos-cb-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixedpos-cb-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixedpos-cb-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixedpos-cb-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixedpos-cb-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixedpos-cb-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixedpos-cb-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixedpos-cb-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixedpos-cb-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixedpos-cb-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixedpos-cb-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixedpos-cb-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixedpos-cb-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixedpos-cb-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixedpos-cb-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixedpos-cb-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixedpos-cb-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixedpos-cb-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixedpos-cb-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixedpos-cb-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixpos-cb-contain-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixpos-cb-contain-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixpos-cb-filter-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixpos-cb-filter-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixpos-cb-height-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixpos-cb-height-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixpos-cb-offset-path-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixpos-cb-offset-path-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixpos-cb-perspective-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixpos-cb-perspective-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixpos-cb-position-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixpos-cb-position-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixpos-cb-transform-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixpos-cb-transform-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixpos-cb-transform-style-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixpos-cb-transform-style-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixpos-cb-translate-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixpos-cb-translate-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-fixpos-cb-webkit-perspective-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-fixpos-cb-webkit-perspective-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-inherit-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-inherit-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-stacking-context-backdrop-filter-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-stacking-context-backdrop-filter-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-stacking-context-clip-path-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-stacking-context-clip-path-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-stacking-context-filter-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-stacking-context-filter-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-stacking-context-height-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-stacking-context-height-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-stacking-context-isolation-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-stacking-context-isolation-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-stacking-context-mask-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-stacking-context-mask-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-stacking-context-mix-blend-mode-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-stacking-context-mix-blend-mode-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-stacking-context-offset-path-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-stacking-context-offset-path-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-stacking-context-opacity-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-stacking-context-opacity-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-stacking-context-opacity-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-stacking-context-opacity-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-stacking-context-perspective-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-stacking-context-perspective-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-stacking-context-position-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-stacking-context-position-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-stacking-context-transform-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-stacking-context-transform-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-stacking-context-transform-style-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-stacking-context-transform-style-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-stacking-context-translate-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-stacking-context-translate-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-stacking-context-z-index-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-stacking-context-z-index-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-transform-add-content-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-transform-add-content-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-transform-add-content.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-transform-add-content.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-transform-huge-offset-scrolled-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-transform-huge-offset-scrolled-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-transform-huge-offset-scrolled.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-transform-huge-offset-scrolled.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-transform-image-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-transform-image-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-transform-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-transform-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-transform-inline-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-transform-inline-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-transform-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-transform-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-transform-zero-size-child-overflow-visible-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-transform-zero-size-child-overflow-visible-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-transform-zero-size-child-overflow-visible.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-transform-zero-size-child-overflow-visible.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/will-change-will-change-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/will-change-will-change-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/parsing/will-change-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/parsing/will-change-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/parsing/will-change-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/parsing/will-change-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-will-change/parsing/will-change-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-will-change/parsing/will-change-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

