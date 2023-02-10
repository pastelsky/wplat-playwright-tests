import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-display/display-change-iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-change-iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-change-object-iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-change-object-iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-alignment-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-alignment-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-alignment-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-alignment-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-alignment-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-alignment-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-alignment-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-alignment-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-before-after-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-before-after-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-before-after-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-before-after-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-before-after-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-before-after-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-block-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-block-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-block-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-block-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-block-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-block-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-blockify-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-blockify-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-button.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-button.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-computed-style.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-computed-style.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-details-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-details-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-details-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-details-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-details.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-details.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-before-after-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-before-after-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-before-after-first-letter-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-before-after-first-letter-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-fieldset-legend-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-fieldset-legend-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-fieldset-legend-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-fieldset-legend-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-flex-001-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-flex-001-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-flex-001-none.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-flex-001-none.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-flex-002-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-flex-002-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-flex-002-none.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-flex-002-none.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-flex-003-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-flex-003-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-flex-003-none.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-flex-003-none.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-generated-content-fieldset-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-generated-content-fieldset-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-generated-content-fieldset-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-generated-content-fieldset-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-inline-flex-001-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-inline-flex-001-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-inline-flex-001-none.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-inline-flex-001-none.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-list-001-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-list-001-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-list-001-none.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-list-001-none.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-multicol-001-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-multicol-001-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-multicol-001-none.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-multicol-001-none.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-pseudo-insertion-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-pseudo-insertion-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-pseudo-insertion-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-pseudo-insertion-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-table-001-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-table-001-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-table-001-none.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-table-001-none.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-table-002-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-table-002-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-dynamic-table-002-none.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-dynamic-table-002-none.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-fieldset-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-fieldset-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-fieldset-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-fieldset-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-fieldset-nested-legend-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-fieldset-nested-legend-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-fieldset-nested-legend.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-fieldset-nested-legend.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-fieldset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-fieldset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-first-letter-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-first-letter-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-first-letter-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-first-letter-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-first-line-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-first-line-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-first-line-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-first-line-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-flex-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-flex-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-flex-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-flex-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-flex-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-flex-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-flex-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-flex-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-flex-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-flex-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-float-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-float-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-inline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-inline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-inline-flex-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-inline-flex-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-inline-flex-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-inline-flex-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-line-height-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-line-height-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-line-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-line-height.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-list-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-list-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-list-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-list-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-multicol-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-multicol-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-multicol-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-multicol-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-oof-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-oof-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-oof-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-oof-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-parsing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-parsing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-pass-green-no-red-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-pass-green-no-red-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-pass-no-red-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-pass-no-red-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-pass-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-pass-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-root-background-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-root-background-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-root-background.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-root-background.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-shadow-dom-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-shadow-dom-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-shadow-dom-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-shadow-dom-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-shadow-host-whitespace.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-shadow-host-whitespace.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-sharing-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-sharing-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-sharing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-sharing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-slot-attach-whitespace.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-slot-attach-whitespace.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-state-change-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-state-change-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-state-change-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-state-change-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-suppression-dynamic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-suppression-dynamic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-suppression-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-suppression-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-svg-anchor-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-svg-anchor-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-svg-elements-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-svg-elements-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-svg-elements.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-svg-elements.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-svg-switch-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-svg-switch-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-table-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-table-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-table-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-table-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-table-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-table-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-table-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-table-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-td-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-td-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-text-inherit-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-text-inherit-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-text-inherit-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-text-inherit-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-text-inherit.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-text-inherit.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-text-only-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-text-only-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-text-only-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-text-only-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-tr-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-tr-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-tr-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-tr-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-unusual-html-elements-none.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-unusual-html-elements-none.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-whitespace-inside-inline-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-whitespace-inside-inline-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-contents-whitespace-inside-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-contents-whitespace-inside-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-first-line-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-first-line-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-first-line-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-first-line-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-first-line-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-first-line-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-flow-root-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-flow-root-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-flow-root-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-flow-root-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-flow-root-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-flow-root-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-flow-root-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-flow-root-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-flow-root-list-item-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-flow-root-list-item-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-flow-root-list-item-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-flow-root-list-item-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-inline-dynamic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-inline-dynamic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-inline-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-inline-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-list-item-height-after-dom-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-list-item-height-after-dom-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-math-on-non-mathml-elements.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-math-on-non-mathml-elements.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-math-on-pseudo-elements-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-math-on-pseudo-elements-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-math-on-pseudo-elements-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-math-on-pseudo-elements-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-math-on-pseudo-elements-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-math-on-pseudo-elements-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-none-inline-img-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-none-inline-img-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-none-inline-img.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-none-inline-img.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-with-float-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-with-float-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/display-with-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/display-with-float.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/select-4-option-optgroup-display-none-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/select-4-option-optgroup-display-none-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/select-4-option-optgroup-display-none.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/select-4-option-optgroup-display-none.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/textarea-display.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/textarea-display.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/animations/display-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/animations/display-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/animations/display-interpolation.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/animations/display-interpolation.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/parsing/display-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/parsing/display-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/parsing/display-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/parsing/display-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/parsing/display-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/parsing/display-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-display/support/red-square.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-display/support/red-square.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

