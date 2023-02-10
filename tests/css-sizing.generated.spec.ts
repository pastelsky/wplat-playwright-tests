import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-sizing/aspect-ratio-affects-container-width-when-height-changes.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio-affects-container-width-when-height-changes.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/auto-scrollbar-inside-stf-abspos-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/auto-scrollbar-inside-stf-abspos-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/auto-scrollbar-inside-stf-abspos.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/auto-scrollbar-inside-stf-abspos.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/available-height-for-replaced-content-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/available-height-for-replaced-content-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/block-fit-content-as-initial-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/block-fit-content-as-initial-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/block-fit-content-as-initial.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/block-fit-content-as-initial.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/block-image-percentage-max-height-inside-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/block-image-percentage-max-height-inside-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/block-size-with-min-or-max-content-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/block-size-with-min-or-max-content-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/block-size-with-min-or-max-content-1a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/block-size-with-min-or-max-content-1a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/block-size-with-min-or-max-content-1b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/block-size-with-min-or-max-content-1b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/block-size-with-min-or-max-content-table-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/block-size-with-min-or-max-content-table-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/block-size-with-min-or-max-content-table-1a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/block-size-with-min-or-max-content-table-1a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/block-size-with-min-or-max-content-table-1b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/block-size-with-min-or-max-content-table-1b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/border-box-and-max-content-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/border-box-and-max-content-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/border-box-and-max-content-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/border-box-and-max-content-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/border-box-and-max-content-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/border-box-and-max-content-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/border-box-and-max-content-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/border-box-and-max-content-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/border-box-and-max-content-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/border-box-and-max-content-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/border-box-and-max-content-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/border-box-and-max-content-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/button-min-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/button-min-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/calc-margins-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/calc-margins-block.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/calc-margins-fieldset-content.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/calc-margins-fieldset-content.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/calc-margins-fieldset-legend.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/calc-margins-fieldset-legend.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/calc-margins-flex.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/calc-margins-flex.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/calc-margins-table-caption.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/calc-margins-table-caption.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/canvas-intrinsic-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/canvas-intrinsic-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/clone-intrinsic-size-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/clone-intrinsic-size-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/clone-intrinsic-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/clone-intrinsic-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/clone-nowrap-intrinsic-size-bidi-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/clone-nowrap-intrinsic-size-bidi-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/clone-nowrap-intrinsic-size-bidi.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/clone-nowrap-intrinsic-size-bidi.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/clone-nowrap-intrinsic-size-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/clone-nowrap-intrinsic-size-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/clone-nowrap-intrinsic-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/clone-nowrap-intrinsic-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-auto-margin-bottom-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-auto-margin-bottom-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-auto-margin-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-auto-margin-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-auto-margin-top-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-auto-margin-top-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-block-size-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-block-size-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-fit-content-auto-margin-bottom.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-fit-content-auto-margin-bottom.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-fit-content-auto-margin-top.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-fit-content-auto-margin-top.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-fit-content-auto-margin.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-fit-content-auto-margin.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-fit-content-block-size.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-fit-content-block-size.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-fit-content-orthogonal-auto-margin-left.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-fit-content-orthogonal-auto-margin-left.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-fit-content-orthogonal-auto-margin-right.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-fit-content-orthogonal-auto-margin-right.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-fit-content-orthogonal-auto-margin.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-fit-content-orthogonal-auto-margin.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-fit-content-orthogonal-block-size.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-fit-content-orthogonal-block-size.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-max-content-auto-margin-bottom.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-max-content-auto-margin-bottom.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-max-content-auto-margin-top.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-max-content-auto-margin-top.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-max-content-auto-margin.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-max-content-auto-margin.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-max-content-block-size.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-max-content-block-size.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-max-content-orthogonal-auto-margin-left.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-max-content-orthogonal-auto-margin-left.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-max-content-orthogonal-auto-margin-right.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-max-content-orthogonal-auto-margin-right.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-max-content-orthogonal-auto-margin.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-max-content-orthogonal-auto-margin.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-max-content-orthogonal-block-size.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-max-content-orthogonal-block-size.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-min-content-auto-margin-bottom.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-min-content-auto-margin-bottom.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-min-content-auto-margin-top.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-min-content-auto-margin-top.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-min-content-auto-margin.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-min-content-auto-margin.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-min-content-block-size.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-min-content-block-size.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-min-content-orthogonal-auto-margin-left.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-min-content-orthogonal-auto-margin-left.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-min-content-orthogonal-auto-margin-right.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-min-content-orthogonal-auto-margin-right.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-min-content-orthogonal-auto-margin.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-min-content-orthogonal-auto-margin.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-min-content-orthogonal-block-size.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-min-content-orthogonal-block-size.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-orthogonal-auto-margin-left-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-orthogonal-auto-margin-left-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-orthogonal-auto-margin-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-orthogonal-auto-margin-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-orthogonal-auto-margin-right-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-orthogonal-auto-margin-right-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-orthogonal-block-size-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-orthogonal-block-size-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-orthogonal-left-and-non-auto-margin-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-orthogonal-left-and-non-auto-margin-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-orthogonal-left-and-non-auto-margin.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-orthogonal-left-and-non-auto-margin.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-top-and-non-auto-margin-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-top-and-non-auto-margin-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/div-top-and-non-auto-margin.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/div-top-and-non-auto-margin.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/dynamic-available-size-iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/dynamic-available-size-iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/dynamic-change-inline-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/dynamic-change-inline-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/dynamic-change-inline-size-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/dynamic-change-inline-size-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/dynamic-change-inline-size-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/dynamic-change-inline-size-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/dynamic-change-inline-size-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/dynamic-change-inline-size-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-block-size-abspos.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-block-size-abspos.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-block-size-fixedpos-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-block-size-fixedpos-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-block-size-fixedpos.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-block-size-fixedpos.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-contribution-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-contribution-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-length-percentage-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-length-percentage-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-length-percentage-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-length-percentage-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-length-percentage-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-length-percentage-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-length-percentage-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-length-percentage-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-length-percentage-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-length-percentage-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-length-percentage-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-length-percentage-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-length-percentage-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-length-percentage-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-length-percentage-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-length-percentage-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-length-percentage-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-length-percentage-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-length-percentage-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-length-percentage-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-length-percentage-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-length-percentage-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-length-percentage-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-length-percentage-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-length-percentage-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-length-percentage-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-length-percentage-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-length-percentage-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-length-percentage-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-length-percentage-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-length-percentage-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-length-percentage-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/fit-content-percentage-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/fit-content-percentage-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/frameset-intrinsic-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/frameset-intrinsic-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/hori-block-size-small-or-larger-than-container-with-min-or-max-content-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/hori-block-size-small-or-larger-than-container-with-min-or-max-content-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/hori-block-size-small-or-larger-than-container-with-min-or-max-content-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/hori-block-size-small-or-larger-than-container-with-min-or-max-content-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/hori-block-size-small-or-larger-than-container-with-min-or-max-content-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/hori-block-size-small-or-larger-than-container-with-min-or-max-content-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/hori-block-size-small-or-larger-than-container-with-min-or-max-content-2a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/hori-block-size-small-or-larger-than-container-with-min-or-max-content-2a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/hori-block-size-small-or-larger-than-container-with-min-or-max-content-2b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/hori-block-size-small-or-larger-than-container-with-min-or-max-content-2b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/image-fractional-height-with-wide-aspect-ratio.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/image-fractional-height-with-wide-aspect-ratio.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/image-min-max-content-intrinsic-size-change-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/image-min-max-content-intrinsic-size-change-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/image-min-max-content-intrinsic-size-change-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/image-min-max-content-intrinsic-size-change-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/image-min-max-content-intrinsic-size-change-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/image-min-max-content-intrinsic-size-change-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/image-min-max-content-intrinsic-size-change-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/image-min-max-content-intrinsic-size-change-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/image-min-max-content-intrinsic-size-change-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/image-min-max-content-intrinsic-size-change-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/image-min-max-content-intrinsic-size-change-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/image-min-max-content-intrinsic-size-change-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/image-min-max-content-intrinsic-size-change-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/image-min-max-content-intrinsic-size-change-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/image-min-max-content-intrinsic-size-change-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/image-min-max-content-intrinsic-size-change-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/image-min-max-content-intrinsic-size-change-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/image-min-max-content-intrinsic-size-change-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/image-min-max-content-intrinsic-size-change-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/image-min-max-content-intrinsic-size-change-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/image-percentage-max-height-in-anonymous-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/image-percentage-max-height-in-anonymous-block.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/inheritance-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/inheritance-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/inheritance-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/inheritance-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/inline-intrinsic-size-calc-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/inline-intrinsic-size-calc-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/inline-intrinsic-size-calc.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/inline-intrinsic-size-calc.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-non-replaced-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-non-replaced-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-non-replaced-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-non-replaced-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-non-replaced-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-non-replaced-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-non-replaced-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-non-replaced-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-non-replaced-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-non-replaced-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-non-replaced-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-non-replaced-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-non-replaced-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-non-replaced-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-non-replaced-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-non-replaced-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-non-replaced-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-non-replaced-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-dynamic-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-dynamic-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-dynamic-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-dynamic-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-dynamic-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-dynamic-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-dynamic-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-dynamic-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-dynamic-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-dynamic-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-dynamic-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-dynamic-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-dynamic-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-dynamic-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-dynamic-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-dynamic-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-percent-replaced-dynamic-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-percent-replaced-dynamic-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/intrinsic-size-fallback-replaced.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/intrinsic-size-fallback-replaced.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/max-content-input-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/max-content-input-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/max-content-input-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/max-content-input-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/min-content-min-width-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/min-content-min-width-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/min-content-negative-margin-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/min-content-negative-margin-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/min-max-content-orthogonal-flow-crash-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/min-max-content-orthogonal-flow-crash-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/min-width-max-width-precedence.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/min-width-max-width-precedence.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/ortho-writing-mode-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/ortho-writing-mode-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/orthogonal-writing-mode-float-in-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/orthogonal-writing-mode-float-in-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/percentage-height-in-flexbox.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/percentage-height-in-flexbox.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/percentage-height-replaced-content-in-auto-cb.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/percentage-height-replaced-content-in-auto-cb.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/percentage-min-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/percentage-min-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/range-percent-intrinsic-size-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/range-percent-intrinsic-size-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/range-percent-intrinsic-size-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/range-percent-intrinsic-size-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/range-percent-intrinsic-size-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/range-percent-intrinsic-size-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/range-percent-intrinsic-size-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/range-percent-intrinsic-size-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/range-percent-intrinsic-size-2a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/range-percent-intrinsic-size-2a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/range-percent-intrinsic-size-2a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/range-percent-intrinsic-size-2a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/replaced-aspect-ratio-intrinsic-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/replaced-aspect-ratio-intrinsic-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/replaced-aspect-ratio-intrinsic-size-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/replaced-aspect-ratio-intrinsic-size-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/replaced-aspect-ratio-stretch-fit-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/replaced-aspect-ratio-stretch-fit-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/replaced-aspect-ratio-stretch-fit-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/replaced-aspect-ratio-stretch-fit-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/replaced-aspect-ratio-stretch-fit-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/replaced-aspect-ratio-stretch-fit-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/replaced-fractional-height-from-aspect-ratio-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/replaced-fractional-height-from-aspect-ratio-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/replaced-fractional-height-from-aspect-ratio.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/replaced-fractional-height-from-aspect-ratio.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/replaced-max-size-saturation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/replaced-max-size-saturation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/slice-intrinsic-size-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/slice-intrinsic-size-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/slice-intrinsic-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/slice-intrinsic-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/slice-nowrap-intrinsic-size-bidi-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/slice-nowrap-intrinsic-size-bidi-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/slice-nowrap-intrinsic-size-bidi.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/slice-nowrap-intrinsic-size-bidi.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/slice-nowrap-intrinsic-size-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/slice-nowrap-intrinsic-size-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/slice-nowrap-intrinsic-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/slice-nowrap-intrinsic-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/svg-intrinsic-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/svg-intrinsic-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/svg-intrinsic-size-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/svg-intrinsic-size-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/svg-intrinsic-size-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/svg-intrinsic-size-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/svg-intrinsic-size-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/svg-intrinsic-size-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/svg-intrinsic-size-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/svg-intrinsic-size-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/svg-intrinsic-size-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/svg-intrinsic-size-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/svg-intrinsic-size-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/svg-intrinsic-size-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/svg-intrinsic-size-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/svg-intrinsic-size-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/table-child-percentage-height-with-border-box-expected.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/table-child-percentage-height-with-border-box-expected.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/table-child-percentage-height-with-border-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/table-child-percentage-height-with-border-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/table-percentage-max-width-beside-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/table-percentage-max-width-beside-float.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/table-percentage-min-width-below-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/table-percentage-min-width-below-float.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/table-percentage-min-width-beside-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/table-percentage-min-width-beside-float.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/textarea-large-padding-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/textarea-large-padding-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/thin-element-render-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/thin-element-render-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/thin-element-render.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/thin-element-render.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/vert-block-size-small-or-larger-than-container-with-min-or-max-content-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/vert-block-size-small-or-larger-than-container-with-min-or-max-content-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/vert-block-size-small-or-larger-than-container-with-min-or-max-content-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/vert-block-size-small-or-larger-than-container-with-min-or-max-content-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/vert-block-size-small-or-larger-than-container-with-min-or-max-content-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/vert-block-size-small-or-larger-than-container-with-min-or-max-content-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/vert-block-size-small-or-larger-than-container-with-min-or-max-content-2a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/vert-block-size-small-or-larger-than-container-with-min-or-max-content-2a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/vert-block-size-small-or-larger-than-container-with-min-or-max-content-2b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/vert-block-size-small-or-larger-than-container-with-min-or-max-content-2b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/whitespace-and-break.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/whitespace-and-break.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/animation/aspect-ratio-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/animation/aspect-ratio-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/animation/height-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/animation/height-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/animation/height-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/animation/height-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/animation/max-height-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/animation/max-height-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/animation/max-height-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/animation/max-height-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/animation/max-width-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/animation/max-width-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/animation/max-width-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/animation/max-width-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/animation/min-height-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/animation/min-height-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/animation/min-height-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/animation/min-height-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/animation/min-width-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/animation/min-width-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/animation/min-width-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/animation/min-width-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/animation/width-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/animation/width-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/animation/width-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/animation/width-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/abspos-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/abspos-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/auto-margins-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/auto-margins-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-029-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-029-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-042.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-042.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-043.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-043.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-044.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-044.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-045.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-045.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-046.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-046.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-047.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-047.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-048.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-048.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-049.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-049.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-050.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-050.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-051-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-051-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-052.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-052.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-053.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-053.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-054.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-054.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-055.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-055.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-with-margin-collapsing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-with-margin-collapsing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/block-aspect-ratio-with-margin-collapsing-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/block-aspect-ratio-with-margin-collapsing-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/fieldset-element-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/fieldset-element-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/fieldset-element-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/fieldset-element-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/flex-aspect-ratio-042.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/flex-aspect-ratio-042.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/floats-aspect-ratio-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/floats-aspect-ratio-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/floats-aspect-ratio-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/floats-aspect-ratio-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/fractional-aspect-ratio.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/fractional-aspect-ratio.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/grid-aspect-ratio-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/grid-aspect-ratio-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/intrinsic-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/intrinsic-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/intrinsic-size-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/intrinsic-size-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/intrinsic-size-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/intrinsic-size-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/intrinsic-size-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/intrinsic-size-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/intrinsic-size-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/intrinsic-size-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/intrinsic-size-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/intrinsic-size-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/intrinsic-size-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/intrinsic-size-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/intrinsic-size-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/intrinsic-size-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/intrinsic-size-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/intrinsic-size-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/intrinsic-size-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/intrinsic-size-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/intrinsic-size-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/intrinsic-size-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/intrinsic-size-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/intrinsic-size-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/intrinsic-size-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/intrinsic-size-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/intrinsic-size-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/intrinsic-size-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/intrinsic-size-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/intrinsic-size-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/intrinsic-size-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/intrinsic-size-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/large-aspect-ratio-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/large-aspect-ratio-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/percentage-resolution-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/percentage-resolution-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/percentage-resolution-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/percentage-resolution-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/percentage-resolution-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/percentage-resolution-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/percentage-resolution-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/percentage-resolution-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/percentage-resolution-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/percentage-resolution-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/quirks-mode-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/quirks-mode-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/quirks-mode-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/quirks-mode-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/quirks-mode-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/quirks-mode-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-035-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-035-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-037-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-037-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/replaced-element-dynamic-aspect-ratio.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/replaced-element-dynamic-aspect-ratio.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/select-element-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/select-element-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/select-element-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/select-element-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/small-aspect-ratio-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/small-aspect-ratio-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/table-element-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/table-element-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/zero-or-infinity-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/zero-or-infinity-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/zero-or-infinity-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/zero-or-infinity-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/zero-or-infinity-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/zero-or-infinity-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/zero-or-infinity-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/zero-or-infinity-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/zero-or-infinity-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/zero-or-infinity-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/zero-or-infinity-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/zero-or-infinity-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/zero-or-infinity-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/zero-or-infinity-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/zero-or-infinity-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/zero-or-infinity-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/zero-or-infinity-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/zero-or-infinity-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/zero-or-infinity-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/zero-or-infinity-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/auto-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/auto-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/auto-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/auto-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/auto-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/auto-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/auto-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/auto-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/auto-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/auto-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/auto-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/auto-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/auto-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/auto-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/auto-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/auto-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/auto-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/auto-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/auto-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/auto-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/auto-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/auto-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/auto-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/auto-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-015-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-015-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-016-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-016-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-017-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-017-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-018-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-018-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-019-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-019-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-020-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-020-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-021-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-021-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-022-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-022-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-023-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-023-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-024-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-024-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-025-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-025-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-026-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-026-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-logical-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-logical-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-logical-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-logical-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/contain-intrinsic-size-logical-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/contain-intrinsic-size-logical-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/box-sizing-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/box-sizing-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/box-sizing-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/box-sizing-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/box-sizing-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/box-sizing-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/height-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/height-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/height-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/height-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/max-height-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/max-height-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/max-height-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/max-height-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/max-height-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/max-height-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/max-width-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/max-width-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/max-width-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/max-width-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/max-width-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/max-width-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/min-height-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/min-height-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/min-height-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/min-height-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/min-height-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/min-height-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/min-width-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/min-width-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/min-width-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/min-width-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/min-width-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/min-width-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/width-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/width-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/parsing/width-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/parsing/width-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/support/dynamic-available-size-iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/support/dynamic-available-size-iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/parsing/aspect-ratio-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/parsing/aspect-ratio-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/parsing/aspect-ratio-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/parsing/aspect-ratio-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/parsing/aspect-ratio-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/parsing/aspect-ratio-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/reference/ref-filled-green-100x20-rect.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/reference/ref-filled-green-100x20-rect.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/reference/ref-square-with-scrollbar.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/reference/ref-square-with-scrollbar.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/aspect-ratio/reference/ref-square-with-vertical-scrollbar.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/aspect-ratio/reference/ref-square-with-vertical-scrollbar.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/animation/contain-intrinsic-size-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/animation/contain-intrinsic-size-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/parsing/contain-intrinsic-size-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/parsing/contain-intrinsic-size-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/parsing/contain-intrinsic-size-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/parsing/contain-intrinsic-size-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-sizing/contain-intrinsic-size/parsing/contain-intrinsic-size-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-sizing/contain-intrinsic-size/parsing/contain-intrinsic-size-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

