import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-logical/animation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/animation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/animation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/animation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/animation-003.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/animation-003.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/animation-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/animation-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/cascading-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/cascading-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/cascading-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/cascading-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/getComputedStyle-listing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/getComputedStyle-listing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logical-box-border-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logical-box-border-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logical-box-border-radius.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logical-box-border-radius.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logical-box-border-shorthands.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logical-box-border-shorthands.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logical-box-border-style.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logical-box-border-style.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logical-box-border-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logical-box-border-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logical-box-inset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logical-box-inset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logical-box-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logical-box-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logical-box-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logical-box-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logical-box-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logical-box-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logical-values-float-clear-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logical-values-float-clear-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logical-values-float-clear-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logical-values-float-clear-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logical-values-float-clear-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logical-values-float-clear-3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logical-values-float-clear-4.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logical-values-float-clear-4.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logical-values-float-clear-reftest.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logical-values-float-clear-reftest.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logical-values-float-clear.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logical-values-float-clear.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logical-values-resize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logical-values-resize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logicalprops-block-size-vlr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logicalprops-block-size-vlr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logicalprops-block-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logicalprops-block-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logicalprops-inline-size-vlr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logicalprops-inline-size-vlr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logicalprops-inline-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logicalprops-inline-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logicalprops-quirklength.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logicalprops-quirklength.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logicalprops-with-deferred-writing-mode.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logicalprops-with-deferred-writing-mode.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/logicalprops-with-variables.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/logicalprops-with-variables.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/animations/float-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/animations/float-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/block-size-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/block-size-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/block-size-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/block-size-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/block-size-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/block-size-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-block-color-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-block-color-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-block-color-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-block-color-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-block-color-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-block-color-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-block-style-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-block-style-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-block-style-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-block-style-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-block-style-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-block-style-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-block-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-block-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-block-width-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-block-width-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-block-width-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-block-width-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-block-width-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-block-width-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-inline-color-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-inline-color-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-inline-color-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-inline-color-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-inline-color-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-inline-color-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-inline-style-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-inline-style-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-inline-style-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-inline-style-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-inline-style-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-inline-style-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-inline-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-inline-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-inline-width-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-inline-width-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-inline-width-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-inline-width-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/border-inline-width-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/border-inline-width-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/inline-size-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/inline-size-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/inline-size-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/inline-size-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/inline-size-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/inline-size-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/inset-block-inline-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/inset-block-inline-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/inset-block-inline-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/inset-block-inline-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/inset-block-inline-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/inset-block-inline-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/inset-block-inline-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/inset-block-inline-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/inset-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/inset-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/inset-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/inset-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/inset-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/inset-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/inset-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/inset-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/margin-block-inline-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/margin-block-inline-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/margin-block-inline-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/margin-block-inline-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/margin-block-inline-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/margin-block-inline-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/margin-block-inline-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/margin-block-inline-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/max-block-size-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/max-block-size-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/max-block-size-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/max-block-size-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/max-block-size-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/max-block-size-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/max-inline-size-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/max-inline-size-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/max-inline-size-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/max-inline-size-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/max-inline-size-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/max-inline-size-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/min-block-size-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/min-block-size-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/min-block-size-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/min-block-size-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/min-block-size-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/min-block-size-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/min-inline-size-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/min-inline-size-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/min-inline-size-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/min-inline-size-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/min-inline-size-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/min-inline-size-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/padding-block-inline-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/padding-block-inline-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/padding-block-inline-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/padding-block-inline-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/padding-block-inline-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/padding-block-inline-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/parsing/padding-block-inline-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/parsing/padding-block-inline-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/reference/logical-values-float-clear-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/reference/logical-values-float-clear-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/reference/logical-values-float-clear-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/reference/logical-values-float-clear-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/reference/logical-values-float-clear-3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/reference/logical-values-float-clear-3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/reference/logical-values-float-clear-4-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/reference/logical-values-float-clear-4-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-logical/reference/logical-values-float-clear-reftest-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-logical/reference/logical-values-float-clear-reftest-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

