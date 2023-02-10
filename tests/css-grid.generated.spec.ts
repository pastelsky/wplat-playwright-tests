import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-grid/anonymous-grid-items-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/anonymous-grid-items-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/child-border-box-and-max-content-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/child-border-box-and-max-content-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/child-border-box-and-max-content-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/child-border-box-and-max-content-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/child-border-box-and-max-content-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/child-border-box-and-max-content-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/child-border-box-and-max-content-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/child-border-box-and-max-content-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/chrome-bug-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/chrome-bug-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/chrome-crash-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/chrome-crash-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/dynamic-grid-with-auto-fill.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/dynamic-grid-with-auto-fill.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/dynamic-grid-within-flexbox.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/dynamic-grid-within-flexbox.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/empty-grid-within-flexbox.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/empty-grid-within-flexbox.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-child-percent-basis-resize-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-child-percent-basis-resize-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-child-percent-basis-resize-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-child-percent-basis-resize-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-item-non-auto-height-stretch-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-item-non-auto-height-stretch-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-item-non-auto-height-stretch-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-item-non-auto-height-stretch-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-item-non-auto-height-stretch-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-item-non-auto-height-stretch-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-item-non-auto-height-stretch-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-item-non-auto-height-stretch-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-item-non-auto-height-stretch-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-item-non-auto-height-stretch-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-item-percentage-quirk-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-item-percentage-quirk-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-item-percentage-quirk-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-item-percentage-quirk-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-layout-properties.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-layout-properties.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-tracks-stretched-with-different-flex-factors-sum.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-tracks-stretched-with-different-flex-factors-sum.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-with-content-dynamic-display-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-with-content-dynamic-display-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-with-content-dynamic-display-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-with-content-dynamic-display-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-with-dynamic-img.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-with-dynamic-img.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-with-orthogonal-child-within-flexbox.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-with-orthogonal-child-within-flexbox.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-within-flexbox-definite-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-within-flexbox-definite-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-within-flexbox-indefinite.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-within-flexbox-indefinite.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/nested-grid-item-block-size-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/nested-grid-item-block-size-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/nested-grid-item-block-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/nested-grid-item-block-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/relative-grandchild.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/relative-grandchild.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/stretch-grid-item-checkbox-input-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/stretch-grid-item-checkbox-input-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/stretch-grid-item-checkbox-input.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/stretch-grid-item-checkbox-input.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/stretch-grid-item-radio-input-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/stretch-grid-item-radio-input-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/stretch-grid-item-radio-input.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/stretch-grid-item-radio-input.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/table-grid-item-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/table-grid-item-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/table-grid-item-dynamic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/table-grid-item-dynamic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/table-grid-item-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/table-grid-item-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/table-grid-item-dynamic-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/table-grid-item-dynamic-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/table-grid-item-dynamic-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/table-grid-item-dynamic-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/table-grid-item-dynamic-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/table-grid-item-dynamic-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/table-grid-item-dynamic-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/table-grid-item-dynamic-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/table-grid-item-dynamic-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/table-grid-item-dynamic-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/table-grid-item-dynamic-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/table-grid-item-dynamic-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/whitespace-reattach.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/whitespace-reattach.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/absolute-positioning-changing-containing-block-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/absolute-positioning-changing-containing-block-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/absolute-positioning-changing-containing-block-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/absolute-positioning-changing-containing-block-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/absolute-positioning-definite-sizes-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/absolute-positioning-definite-sizes-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/absolute-positioning-grid-container-containing-block-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/absolute-positioning-grid-container-containing-block-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/absolute-positioning-grid-container-parent-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/absolute-positioning-grid-container-parent-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/absolute-positioning-grid-container-parent-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/absolute-positioning-grid-container-parent-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/absolute-positioning-grid-container-parent-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/absolute-positioning-grid-container-parent-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/descendant-static-position-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/descendant-static-position-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/descendant-static-position-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/descendant-static-position-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/descendant-static-position-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/descendant-static-position-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/descendant-static-position-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/descendant-static-position-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/descendant-static-position-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/descendant-static-position-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/descendant-static-position-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/descendant-static-position-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/descendant-static-position-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/descendant-static-position-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/descendant-static-position-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/descendant-static-position-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/empty-grid-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/empty-grid-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-img-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-img-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-img-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-img-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-img-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-img-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-img-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-img-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-img-last-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-img-last-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-img-last-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-img-last-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-img-last-baseline-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-img-last-baseline-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-img-last-baseline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-img-last-baseline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-last-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-last-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-last-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-last-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-last-baseline-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-last-baseline-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-last-baseline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-last-baseline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-rtl-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-rtl-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-rtl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-rtl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-rtl-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-rtl-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-rtl-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-rtl-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-rtl-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-rtl-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-rtl-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-rtl-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-rtl-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-rtl-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-rtl-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-rtl-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-rtl-last-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-rtl-last-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-rtl-last-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-rtl-last-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-rtl-last-baseline-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-rtl-last-baseline-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-rtl-last-baseline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-rtl-last-baseline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-rtl-last-baseline-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-rtl-last-baseline-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-rtl-last-baseline-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-rtl-last-baseline-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-rtl-last-baseline-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-rtl-last-baseline-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-rtl-last-baseline-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-rtl-last-baseline-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-safe-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-safe-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-safe-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-safe-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-last-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-last-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-last-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-last-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-last-baseline-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-last-baseline-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-last-baseline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-last-baseline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-last-baseline-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-last-baseline-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-last-baseline-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-last-baseline-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-last-baseline-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-last-baseline-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-last-baseline-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-align-self-vertWM-last-baseline-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-img-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-img-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-img-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-img-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-img-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-img-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-img-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-img-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-img-last-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-img-last-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-img-last-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-img-last-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-img-last-baseline-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-img-last-baseline-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-img-last-baseline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-img-last-baseline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-last-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-last-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-last-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-last-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-last-baseline-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-last-baseline-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-last-baseline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-last-baseline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-last-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-last-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-last-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-last-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-last-baseline-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-last-baseline-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-last-baseline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-last-baseline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-last-baseline-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-last-baseline-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-last-baseline-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-last-baseline-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-last-baseline-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-last-baseline-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-last-baseline-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-rtl-last-baseline-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-last-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-last-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-last-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-last-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-last-baseline-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-last-baseline-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-last-baseline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-last-baseline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-last-baseline-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-last-baseline-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-last-baseline-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-last-baseline-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-last-baseline-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-last-baseline-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-last-baseline-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-abspos-staticpos-justify-self-vertWM-last-baseline-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-item-absolute-positioning-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-item-absolute-positioning-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-paint-positioned-children-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-paint-positioned-children-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-paint-positioned-children-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-paint-positioned-children-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-children-writing-modes-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-children-writing-modes-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-children-writing-modes-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-children-writing-modes-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-item-dynamic-change-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-item-dynamic-change-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-item-dynamic-change-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-item-dynamic-change-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-item-dynamic-change-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-item-dynamic-change-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-item-dynamic-change-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-item-dynamic-change-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-item-dynamic-change-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-item-dynamic-change-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-item-dynamic-change-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-item-dynamic-change-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-item-dynamic-change-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-item-dynamic-change-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-item-dynamic-change-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-item-dynamic-change-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-item-dynamic-change-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-item-dynamic-change-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-item-dynamic-change-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-item-dynamic-change-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-item-dynamic-change-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-item-dynamic-change-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-and-autofit-tracks-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-and-autofit-tracks-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-and-autofit-tracks-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-and-autofit-tracks-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-and-autofit-tracks-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-and-autofit-tracks-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-and-autofit-tracks-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-and-autofit-tracks-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-and-autofit-tracks-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-and-autofit-tracks-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-and-autofit-tracks-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-and-autofit-tracks-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-and-autofit-tracks-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-and-autofit-tracks-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-background-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-background-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-background-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-background-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-background-rtl-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-background-rtl-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-background-rtl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-background-rtl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-content-alignment-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-content-alignment-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-content-alignment-rtl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-content-alignment-rtl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-gaps-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-gaps-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-gaps-002-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-gaps-002-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-gaps-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-gaps-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-gaps-rtl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-gaps-rtl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-implicit-grid-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-implicit-grid-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-implicit-grid-line-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-implicit-grid-line-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-padding-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-padding-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-unknown-named-grid-line-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-unknown-named-grid-line-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-positioned-items-within-grid-implicit-track-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-positioned-items-within-grid-implicit-track-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/grid-sizing-positioned-items-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/grid-sizing-positioned-items-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-descendants-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-descendants-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-descendants-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-descendants-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-descendants-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-descendants-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-descendants-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-descendants-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-descendants-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-descendants-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-descendants-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-descendants-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-descendants-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-descendants-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-descendants-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-descendants-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-descendants-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-descendants-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-descendants-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-descendants-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-descendants-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-descendants-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-descendants-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-descendants-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-descendants-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-descendants-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-descendants-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-descendants-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-descendants-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-descendants-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-descendants-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-descendants-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-015-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-015-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-016-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-016-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-017-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-017-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/orthogonal-positioned-grid-items-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/orthogonal-positioned-grid-items-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-017-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-017-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-descendants-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-descendants-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-015-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-015-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-016-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-016-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-017-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-017-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-019-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-019-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-022-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-022-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-023-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-023-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-025-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-025-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-negative-indices-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-negative-indices-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-negative-indices-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-negative-indices-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-negative-indices-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-negative-indices-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-negative-indices-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-negative-indices-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-negative-indices-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-negative-indices-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-negative-indices-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-negative-indices-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-should-not-create-implicit-tracks-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-should-not-create-implicit-tracks-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-should-not-take-up-space-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-should-not-take-up-space-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-sizing-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-sizing-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/abspos/positioned-grid-items-sizing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/abspos/positioned-grid-items-sizing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-fieldset-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-fieldset-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-fieldset-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-fieldset-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-fieldset-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-fieldset-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-flex-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-flex-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-flex-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-flex-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-flex-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-flex-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-flex-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-flex-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-grid-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-grid-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-grid-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-grid-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-grid-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-grid-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-line-clamp-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-line-clamp-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-line-clamp-002.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-line-clamp-002.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-line-clamp-003.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-line-clamp-003.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-multicol-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-multicol-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-multicol-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-multicol-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-multicol-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-multicol-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-overflow-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-overflow-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-overflow-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-overflow-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-overflow-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-overflow-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-table-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-table-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-table-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-table-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-table-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-table-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline-vertical.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline-vertical.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-baseline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-baseline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-content-distribution-vertical-lr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-content-distribution-vertical-lr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-content-distribution-vertical-rl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-content-distribution-vertical-rl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-content-distribution.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-content-distribution.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-content-vertical-lr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-content-vertical-lr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-content-vertical-rl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-content-vertical-rl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-content.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-content.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-justify-margin-border-padding-vertical-lr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-justify-margin-border-padding-vertical-lr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-justify-margin-border-padding-vertical-rl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-justify-margin-border-padding-vertical-rl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-justify-margin-border-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-justify-margin-border-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-justify-overflow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-justify-overflow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-justify-stretch-with-orthogonal-flows.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-justify-stretch-with-orthogonal-flows.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-justify-stretch.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-justify-stretch.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align-stretching-replaced-items.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align-stretching-replaced-items.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-align.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-align.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-implies-size-change-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-implies-size-change-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-style-changes-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-style-changes-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-style-changes-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-style-changes-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-style-changes-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-style-changes-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-style-changes-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-style-changes-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-style-changes-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-style-changes-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-style-changes-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-style-changes-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-style-changes-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-style-changes-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-alignment-style-changes-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-alignment-style-changes-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-baseline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-baseline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-baseline-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-baseline-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-baseline-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-baseline-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-baseline-align-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-baseline-align-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-baseline-align-cycles-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-baseline-align-cycles-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-baseline-justify-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-baseline-justify-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-block-axis-alignment-auto-margins-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-block-axis-alignment-auto-margins-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-block-axis-alignment-auto-margins-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-block-axis-alignment-auto-margins-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-block-axis-alignment-auto-margins-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-block-axis-alignment-auto-margins-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-block-axis-alignment-auto-margins-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-block-axis-alignment-auto-margins-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-block-axis-alignment-auto-margins-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-block-axis-alignment-auto-margins-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-block-axis-alignment-auto-margins-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-block-axis-alignment-auto-margins-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-block-axis-alignment-auto-margins-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-block-axis-alignment-auto-margins-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-block-axis-alignment-auto-margins-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-block-axis-alignment-auto-margins-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-positioned-items-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-positioned-items-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-positioned-items-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-positioned-items-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-positioned-items-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-positioned-items-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-positioned-items-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-positioned-items-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-positioned-items-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-positioned-items-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-positioned-items-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-positioned-items-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-positioned-items-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-positioned-items-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-positioned-items-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-positioned-items-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-positioned-items-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-positioned-items-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-positioned-items-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-positioned-items-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-positioned-items-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-positioned-items-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-positioned-items-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-positioned-items-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-positioned-items-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-positioned-items-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-positioned-items-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-positioned-items-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-positioned-items-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-positioned-items-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-positioned-items-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-positioned-items-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-positioned-items-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-positioned-items-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-sticky-positioned-items-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-sticky-positioned-items-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-alignment-sticky-positioned-items-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-alignment-sticky-positioned-items-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-self-baseline-synthesized-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-self-baseline-synthesized-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-self-baseline-synthesized-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-self-baseline-synthesized-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-self-baseline-synthesized-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-self-baseline-synthesized-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-self-baseline-synthesized-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-self-baseline-synthesized-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-column-axis-self-baseline-synthesized-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-column-axis-self-baseline-synthesized-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-container-auto-margins-scrollbars-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-container-auto-margins-scrollbars-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-container-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-container-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-alignment-and-self-alignment-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-alignment-and-self-alignment-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-alignment-and-self-alignment-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-alignment-and-self-alignment-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-alignment-auto-sized-tracks-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-alignment-auto-sized-tracks-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-alignment-overflow-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-alignment-overflow-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-alignment-overflow-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-alignment-overflow-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-alignment-second-pass-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-alignment-second-pass-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-alignment-second-pass-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-alignment-second-pass-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-alignment-with-abspos-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-alignment-with-abspos-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-alignment-with-span-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-alignment-with-span-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-alignment-with-span-vertical-lr-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-alignment-with-span-vertical-lr-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-alignment-with-span-vertical-rl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-alignment-with-span-vertical-rl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-content-distribution-with-collapsed-tracks-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-content-distribution-with-collapsed-tracks-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-fit-content-tracks-dont-stretch-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-fit-content-tracks-dont-stretch-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-015-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-015-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-016-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-016-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-gutters-and-alignment.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-gutters-and-alignment.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-inline-axis-alignment-auto-margins-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-inline-axis-alignment-auto-margins-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-inline-axis-alignment-auto-margins-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-inline-axis-alignment-auto-margins-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-inline-axis-alignment-auto-margins-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-inline-axis-alignment-auto-margins-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-inline-axis-alignment-auto-margins-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-inline-axis-alignment-auto-margins-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-inline-axis-alignment-auto-margins-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-inline-axis-alignment-auto-margins-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-inline-axis-alignment-auto-margins-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-inline-axis-alignment-auto-margins-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-inline-axis-alignment-auto-margins-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-inline-axis-alignment-auto-margins-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-inline-axis-alignment-auto-margins-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-inline-axis-alignment-auto-margins-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-inline-baseline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-inline-baseline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-alignment-with-orthogonal-flows-vertical-lr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-alignment-with-orthogonal-flows-vertical-lr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-alignment-with-orthogonal-flows-vertical-rl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-alignment-with-orthogonal-flows-vertical-rl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-alignment-with-orthogonal-flows.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-alignment-with-orthogonal-flows.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-aspect-ratio-stretch-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-aspect-ratio-stretch-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-aspect-ratio-stretch-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-aspect-ratio-stretch-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-aspect-ratio-stretch-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-aspect-ratio-stretch-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-aspect-ratio-stretch-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-aspect-ratio-stretch-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-aspect-ratio-stretch-3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-aspect-ratio-stretch-3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-aspect-ratio-stretch-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-aspect-ratio-stretch-3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-aspect-ratio-stretch-4-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-aspect-ratio-stretch-4-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-aspect-ratio-stretch-4.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-aspect-ratio-stretch-4.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-auto-margins-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-auto-margins-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-auto-margins-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-auto-margins-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-auto-margins-alignment-vertical-lr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-auto-margins-alignment-vertical-lr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-auto-margins-alignment-vertical-rl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-auto-margins-alignment-vertical-rl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-auto-margins-alignment.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-auto-margins-alignment.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-content-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-content-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-content-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-content-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-content-baseline-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-content-baseline-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-content-baseline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-content-baseline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-content-baseline-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-content-baseline-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-content-baseline-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-content-baseline-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-content-baseline-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-content-baseline-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-content-baseline-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-content-baseline-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-mixed-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-mixed-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-mixed-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-mixed-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-mixed-baseline-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-mixed-baseline-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-mixed-baseline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-mixed-baseline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-mixed-baseline-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-mixed-baseline-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-mixed-baseline-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-mixed-baseline-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-mixed-baseline-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-mixed-baseline-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-mixed-baseline-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-mixed-baseline-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-no-aspect-ratio-stretch-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-no-aspect-ratio-stretch-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-no-aspect-ratio-stretch-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-no-aspect-ratio-stretch-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-no-aspect-ratio-stretch-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-no-aspect-ratio-stretch-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-no-aspect-ratio-stretch-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-no-aspect-ratio-stretch-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-no-aspect-ratio-stretch-3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-no-aspect-ratio-stretch-3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-no-aspect-ratio-stretch-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-no-aspect-ratio-stretch-3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-no-aspect-ratio-stretch-4-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-no-aspect-ratio-stretch-4-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-no-aspect-ratio-stretch-4.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-no-aspect-ratio-stretch-4.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-no-aspect-ratio-stretch-5-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-no-aspect-ratio-stretch-5-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-no-aspect-ratio-stretch-5.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-no-aspect-ratio-stretch-5.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-no-aspect-ratio-stretch-6-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-no-aspect-ratio-stretch-6-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-no-aspect-ratio-stretch-6.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-no-aspect-ratio-stretch-6.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-self-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-self-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-item-self-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-item-self-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-justify-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-justify-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-justify-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-justify-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-justify-baseline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-justify-baseline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-justify-baseline-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-justify-baseline-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-justify-baseline-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-justify-baseline-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-justify-baseline-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-justify-baseline-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-place-content-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-place-content-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-positioned-items-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-positioned-items-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-positioned-items-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-positioned-items-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-positioned-items-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-positioned-items-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-positioned-items-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-positioned-items-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-positioned-items-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-positioned-items-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-positioned-items-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-positioned-items-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-positioned-items-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-positioned-items-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-positioned-items-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-positioned-items-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-positioned-items-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-positioned-items-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-positioned-items-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-positioned-items-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-positioned-items-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-positioned-items-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-positioned-items-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-positioned-items-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-positioned-items-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-positioned-items-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-positioned-items-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-positioned-items-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-positioned-items-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-positioned-items-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-positioned-items-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-positioned-items-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-positioned-items-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-positioned-items-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-sticky-positioned-items-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-sticky-positioned-items-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-alignment-sticky-positioned-items-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-alignment-sticky-positioned-items-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-self-baseline-synthesized-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-self-baseline-synthesized-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-self-baseline-synthesized-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-self-baseline-synthesized-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-self-baseline-synthesized-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-self-baseline-synthesized-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-self-baseline-synthesized-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-self-baseline-synthesized-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-row-axis-self-baseline-synthesized-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-row-axis-self-baseline-synthesized-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-baseline-with-grid-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-baseline-with-grid-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-baseline-with-grid-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-baseline-with-grid-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-baseline-with-grid-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-baseline-with-grid-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-baseline-with-grid-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-baseline-with-grid-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-baseline-with-grid-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-baseline-with-grid-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-non-static-positioned-items-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-non-static-positioned-items-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-non-static-positioned-items-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-non-static-positioned-items-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-non-static-positioned-items-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-non-static-positioned-items-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-non-static-positioned-items-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-non-static-positioned-items-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-non-static-positioned-items-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-non-static-positioned-items-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-non-static-positioned-items-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-non-static-positioned-items-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-non-static-positioned-items-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-non-static-positioned-items-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-non-static-positioned-items-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-non-static-positioned-items-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-non-static-positioned-items-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-non-static-positioned-items-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-non-static-positioned-items-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-non-static-positioned-items-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-non-static-positioned-items-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-non-static-positioned-items-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-non-static-positioned-items-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-non-static-positioned-items-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-positioned-items-with-margin-border-padding-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-input-range-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-input-range-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-input-range.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-input-range.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-lr-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-lr-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-lr-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-lr-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-lr-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-lr-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-lr-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-lr-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-lr-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-lr-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-lr-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-lr-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-lr-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-lr-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-lr-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-lr-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-lr-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-lr-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-lr-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-lr-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-lr-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-lr-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-lr-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-lr-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-lr-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-lr-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-lr-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-lr-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-lr-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-lr-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-lr-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-lr-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-rl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-rl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-rl-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-rl-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-rl-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-rl-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-rl-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-rl-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-rl-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-rl-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-rl-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-rl-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-rl-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-rl-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-rl-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-rl-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-rl-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-rl-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-rl-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-rl-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-rl-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-rl-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-rl-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-rl-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-rl-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-rl-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-rl-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-rl-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-rl-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-rl-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment-stretch-vertical-rl-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment-stretch-vertical-rl-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-alignment.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-alignment.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-baseline-not-applied-if-sizing-cyclic-dependency-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-baseline-not-applied-if-sizing-cyclic-dependency-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-baseline-not-applied-if-sizing-cyclic-dependency-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-baseline-not-applied-if-sizing-cyclic-dependency-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/grid-self-baseline-not-applied-if-sizing-cyclic-dependency-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/grid-self-baseline-not-applied-if-sizing-cyclic-dependency-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/replaced-alignment-with-aspect-ratio-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/replaced-alignment-with-aspect-ratio-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/replaced-alignment-with-aspect-ratio-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/replaced-alignment-with-aspect-ratio-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/replaced-alignment-with-aspect-ratio-003.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/replaced-alignment-with-aspect-ratio-003.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/replaced-alignment-with-aspect-ratio-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/replaced-alignment-with-aspect-ratio-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/replaced-alignment-with-aspect-ratio-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/replaced-alignment-with-aspect-ratio-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/replaced-alignment-with-aspect-ratio-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/replaced-alignment-with-aspect-ratio-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/replaced-alignment-with-aspect-ratio-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/replaced-alignment-with-aspect-ratio-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/replaced-alignment-with-aspect-ratio-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/replaced-alignment-with-aspect-ratio-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/replaced-alignment-with-aspect-ratio-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/replaced-alignment-with-aspect-ratio-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/animation/grid-template-columns-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/animation/grid-template-columns-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/animation/grid-template-columns-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/animation/grid-template-columns-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/animation/grid-template-columns-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/animation/grid-template-columns-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/animation/grid-template-columns-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/animation/grid-template-columns-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/animation/grid-template-columns-neutral-keyframe-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/animation/grid-template-columns-neutral-keyframe-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/animation/grid-template-columns-neutral-keyframe-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/animation/grid-template-columns-neutral-keyframe-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/animation/grid-template-columns-neutral-keyframe-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/animation/grid-template-columns-neutral-keyframe-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/animation/grid-template-columns-neutral-keyframe-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/animation/grid-template-columns-neutral-keyframe-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/animation/grid-template-rows-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/animation/grid-template-rows-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/animation/grid-template-rows-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/animation/grid-template-rows-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/animation/grid-template-rows-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/animation/grid-template-rows-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/animation/grid-template-rows-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/animation/grid-template-rows-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/animation/grid-template-rows-neutral-keyframe-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/animation/grid-template-rows-neutral-keyframe-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/animation/grid-template-rows-neutral-keyframe-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/animation/grid-template-rows-neutral-keyframe-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/animation/grid-template-rows-neutral-keyframe-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/animation/grid-template-rows-neutral-keyframe-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/animation/grid-template-rows-neutral-keyframe-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/animation/grid-template-rows-neutral-keyframe-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/explicit-grid-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/explicit-grid-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/flex-content-distribution-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/flex-content-distribution-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/flex-content-resolution-columns-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/flex-content-resolution-columns-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/flex-content-resolution-columns-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/flex-content-resolution-columns-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/flex-content-resolution-rows-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/flex-content-resolution-rows-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/flex-content-resolution-rows-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/flex-content-resolution-rows-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/flex-factor-sum-less-than-1-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/flex-factor-sum-less-than-1-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/flex-item-grid-container-percentage-rows-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/flex-item-grid-container-percentage-rows-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/fr-unit-with-percentage.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/fr-unit-with-percentage.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/fr-unit.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/fr-unit.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-add-item-with-positioned-items-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-add-item-with-positioned-items-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-add-positioned-block-item-after-inline-item-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-add-positioned-block-item-after-inline-item-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-explicit-rows-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-explicit-rows-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-fill-columns-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-fill-columns-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-fill-rows-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-fill-rows-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-fit-columns-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-fit-columns-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-fit-rows-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-fit-rows-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-aspect-ratio-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-aspect-ratio-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-aspect-ratio-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-aspect-ratio-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-dynamic-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-dynamic-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-dynamic-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-dynamic-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-intrinsic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-intrinsic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-max-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-max-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-max-size-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-max-size-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-min-max-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-min-max-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-min-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-min-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-min-size-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-min-size-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-min-size-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-min-size-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-min-size-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-min-size-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-minmax.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-minmax.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-multiple-values-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-multiple-values-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-multiple-values-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-multiple-values-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-multiple-values-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-multiple-values-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-multiple-values-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-multiple-values-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-multiple-values-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-multiple-values-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-multiple-values-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-multiple-values-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-multiple-values-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-multiple-values-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-multiple-values-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-multiple-values-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-multiple-values-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-multiple-values-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-positioned-container-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-positioned-container-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-auto-repeat-positioned-container-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-auto-repeat-positioned-container-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-change-auto-repeat-tracks.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-change-auto-repeat-tracks.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-change-fit-content-argument-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-change-fit-content-argument-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-change-intrinsic-size-with-auto-repeat-tracks-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-change-intrinsic-size-with-auto-repeat-tracks-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-inline-auto-repeat-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-inline-auto-repeat-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-inline-support-flexible-lengths-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-inline-support-flexible-lengths-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-inline-support-grid-template-areas-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-inline-support-grid-template-areas-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-inline-support-grid-template-columns-rows-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-inline-support-grid-template-columns-rows-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-inline-support-named-grid-lines-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-inline-support-named-grid-lines-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-inline-support-repeat-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-inline-support-repeat-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-inline-template-columns-rows-resolved-values-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-inline-template-columns-rows-resolved-values-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-inline-template-columns-rows-resolved-values-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-inline-template-columns-rows-resolved-values-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-layout-auto-tracks.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-layout-auto-tracks.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-layout-basic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-layout-basic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-layout-repeat-notation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-layout-repeat-notation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-limits-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-limits-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-minimum-contribution-with-percentages.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-minimum-contribution-with-percentages.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-percentage-rows-indefinite-height-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-percentage-rows-indefinite-height-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-percentage-rows-indefinite-height-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-percentage-rows-indefinite-height-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-repeat-max-width-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-repeat-max-width-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-shorthand-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-shorthand-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-support-flexible-lengths-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-support-flexible-lengths-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-support-grid-template-areas-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-support-grid-template-areas-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-support-grid-template-columns-rows-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-support-grid-template-columns-rows-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-support-named-grid-lines-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-support-named-grid-lines-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-support-named-grid-lines-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-support-named-grid-lines-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-support-named-grid-lines-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-support-named-grid-lines-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-support-named-grid-lines-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-support-named-grid-lines-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-support-named-grid-lines-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-support-named-grid-lines-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-support-repeat-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-support-repeat-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-support-repeat-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-support-repeat-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-template-columns-fit-content-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-template-columns-fit-content-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-template-columns-fit-content-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-template-columns-fit-content-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-template-columns-rows-changes-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-template-columns-rows-changes-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-template-columns-rows-resolved-values-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-template-columns-rows-resolved-values-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-template-columns-rows-resolved-values-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-template-columns-rows-resolved-values-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-template-rows-fit-content-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-template-rows-fit-content-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-definition/grid-template-rows-fit-content-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-definition/grid-template-rows-fit-content-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/anonymous-grid-item-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/anonymous-grid-item-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/aspect-ratio-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/aspect-ratio-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/aspect-ratio-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/aspect-ratio-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/aspect-ratio-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/aspect-ratio-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/aspect-ratio-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/aspect-ratio-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/aspect-ratio-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/aspect-ratio-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/explicitly-sized-grid-item-as-table.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/explicitly-sized-grid-item-as-table.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-auto-margin-and-replaced-item-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-auto-margin-and-replaced-item-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-auto-margin-and-replaced-item-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-auto-margin-and-replaced-item-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-automatic-minimum-intrinsic-aspect-ratio-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-automatic-minimum-intrinsic-aspect-ratio-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-img-item-percent-max-height-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-img-item-percent-max-height-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-items-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-items-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-items-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-items-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-items-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-items-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-items-inline-blocks-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-items-inline-blocks-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-order-property-auto-placement-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-order-property-auto-placement-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-order-property-auto-placement-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-order-property-auto-placement-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-order-property-auto-placement-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-order-property-auto-placement-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-order-property-auto-placement-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-order-property-auto-placement-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-order-property-auto-placement-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-order-property-auto-placement-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-order-property-painting-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-order-property-painting-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-order-property-painting-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-order-property-painting-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-order-property-painting-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-order-property-painting-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-order-property-painting-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-order-property-painting-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-order-property-painting-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-order-property-painting-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-z-axis-ordering-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-z-axis-ordering-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-z-axis-ordering-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-z-axis-ordering-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-z-axis-ordering-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-z-axis-ordering-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-z-axis-ordering-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-z-axis-ordering-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-z-axis-ordering-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-z-axis-ordering-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-z-axis-ordering-overlapped-items-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-z-axis-ordering-overlapped-items-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-z-axis-ordering-overlapped-items-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-z-axis-ordering-overlapped-items-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-z-axis-ordering-overlapped-items-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-z-axis-ordering-overlapped-items-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-z-axis-ordering-overlapped-items-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-z-axis-ordering-overlapped-items-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-z-axis-ordering-overlapped-items-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-z-axis-ordering-overlapped-items-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-inline-z-axis-ordering-overlapped-items-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-inline-z-axis-ordering-overlapped-items-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-intrinsic-maximums-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-intrinsic-maximums-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-intrinsic-maximums.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-intrinsic-maximums.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-containing-block-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-containing-block-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-containing-block-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-containing-block-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-containing-block-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-containing-block-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-containing-block-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-containing-block-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-dynamic-min-contribution-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-dynamic-min-contribution-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-flex-container-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-flex-container-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-inline-contribution-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-inline-contribution-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-inline-contribution-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-inline-contribution-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-inline-contribution-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-inline-contribution-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-margins-and-writing-modes-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-margins-and-writing-modes-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-margins-and-writing-modes-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-margins-and-writing-modes-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-min-auto-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-min-auto-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-overflow-auto-max-height-percentage-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-overflow-auto-max-height-percentage-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-overflow-auto-max-height-percentage.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-overflow-auto-max-height-percentage.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-percentage-sizes-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-percentage-sizes-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-percentage-sizes-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-percentage-sizes-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-percentage-sizes-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-percentage-sizes-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-percentage-sizes-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-percentage-sizes-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-percentage-sizes-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-percentage-sizes-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-percentage-sizes-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-percentage-sizes-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-rel-pos-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-rel-pos-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-rel-pos-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-rel-pos-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-rel-pos-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-rel-pos-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-rel-pos-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-rel-pos-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-item-script-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-item-script-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-contribution-negative-margins.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-contribution-negative-margins.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-inline-blocks-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-inline-blocks-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-minimum-height-orthogonal-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-minimum-height-orthogonal-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-minimum-width-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-minimum-width-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-minimum-width-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-minimum-width-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-minimum-width-orthogonal-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-minimum-width-orthogonal-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-minimum-width-orthogonal-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-minimum-width-orthogonal-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-minimum-width-vertical-lr-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-minimum-width-vertical-lr-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-minimum-width-vertical-lr-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-minimum-width-vertical-lr-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-minimum-width-vertical-rl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-minimum-width-vertical-rl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-minimum-width-vertical-rl-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-minimum-width-vertical-rl-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-vertical-lr-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-vertical-lr-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-vertical-lr-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-vertical-lr-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-vertical-rl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-vertical-rl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-margins-vertical-rl-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-margins-vertical-rl-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-vertical-lr-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-vertical-lr-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-vertical-lr-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-vertical-lr-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-vertical-rl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-vertical-rl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-percentage-paddings-vertical-rl-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-percentage-paddings-vertical-rl-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-relative-offsets-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-relative-offsets-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-relative-offsets-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-relative-offsets-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-sizing-alignment-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-sizing-alignment-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-items-sizing-alignment-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-items-sizing-alignment-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-layout-grid-in-grid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-layout-grid-in-grid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-layout-z-order-a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-layout-z-order-a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-layout-z-order-b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-layout-z-order-b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-minimum-size-grid-items-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-minimum-size-grid-items-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-order-property-auto-placement-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-order-property-auto-placement-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-order-property-auto-placement-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-order-property-auto-placement-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-order-property-auto-placement-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-order-property-auto-placement-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-order-property-auto-placement-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-order-property-auto-placement-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-order-property-auto-placement-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-order-property-auto-placement-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-order-property-painting-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-order-property-painting-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-order-property-painting-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-order-property-painting-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-order-property-painting-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-order-property-painting-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-order-property-painting-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-order-property-painting-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-order-property-painting-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-order-property-painting-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-size-with-orthogonal-child-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-size-with-orthogonal-child-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-z-axis-ordering-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-z-axis-ordering-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-z-axis-ordering-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-z-axis-ordering-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-z-axis-ordering-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-z-axis-ordering-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-z-axis-ordering-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-z-axis-ordering-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-z-axis-ordering-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-z-axis-ordering-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-z-axis-ordering-overlapped-items-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-z-axis-ordering-overlapped-items-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-z-axis-ordering-overlapped-items-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-z-axis-ordering-overlapped-items-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-z-axis-ordering-overlapped-items-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-z-axis-ordering-overlapped-items-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-z-axis-ordering-overlapped-items-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-z-axis-ordering-overlapped-items-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-z-axis-ordering-overlapped-items-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-z-axis-ordering-overlapped-items-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/grid-z-axis-ordering-overlapped-items-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/grid-z-axis-ordering-overlapped-items-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/item-with-table-with-infinite-max-intrinsic-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/item-with-table-with-infinite-max-intrinsic-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/percentage-margin-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/percentage-margin-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/percentage-size-indefinite-replaced.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/percentage-size-indefinite-replaced.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/percentage-size-replaced-subitems-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/percentage-size-replaced-subitems-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/percentage-size-replaced-subitems-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/percentage-size-replaced-subitems-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/percentage-size-subitems-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/percentage-size-subitems-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/percentage-size-subitems-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/percentage-size-subitems-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/percentage-size-subitems-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/percentage-size-subitems-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/ref-filled-green-100px-square-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/ref-filled-green-100px-square-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/remove-svg-grid-item-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/remove-svg-grid-item-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/replaced-element-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/replaced-element-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/replaced-element-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/replaced-element-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/replaced-element-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/replaced-element-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/replaced-element-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/replaced-element-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/replaced-element-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/replaced-element-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/replaced-element-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/replaced-element-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/replaced-element-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/replaced-element-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/replaced-element-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/replaced-element-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/replaced-element-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/replaced-element-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/table-with-infinite-max-intrinsic-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/table-with-infinite-max-intrinsic-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/whitespace-in-grid-item-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/whitespace-in-grid-item-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-items/whitespace-in-grid-item-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-items/whitespace-in-grid-item-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/column-property-should-not-apply-on-grid-container-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/column-property-should-not-apply-on-grid-container-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/compute-intrinsic-widths-scrollbar-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/compute-intrinsic-widths-scrollbar-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/display-grid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/display-grid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/display-inline-grid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/display-inline-grid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/fixed-width-intrinsic-width-should-exclude-scrollbar-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/fixed-width-intrinsic-width-should-exclude-scrollbar-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-areas-overflowing-grid-container-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-areas-overflowing-grid-container-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-areas-overflowing-grid-container-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-areas-overflowing-grid-container-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-areas-overflowing-grid-container-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-areas-overflowing-grid-container-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-areas-overflowing-grid-container-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-areas-overflowing-grid-container-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-areas-overflowing-grid-container-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-areas-overflowing-grid-container-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-areas-overflowing-grid-container-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-areas-overflowing-grid-container-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-areas-overflowing-grid-container-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-areas-overflowing-grid-container-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-areas-overflowing-grid-container-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-areas-overflowing-grid-container-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-areas-overflowing-grid-container-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-areas-overflowing-grid-container-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-box-sizing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-box-sizing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-button-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-button-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-computed-value-display-floated-items-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-computed-value-display-floated-items-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-container-ignores-first-letter-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-container-ignores-first-letter-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-container-ignores-first-letter-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-container-ignores-first-letter-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-container-ignores-first-letter-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-container-ignores-first-letter-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-container-ignores-first-line-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-container-ignores-first-line-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-container-margin-border-padding-scrollbar-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-container-margin-border-padding-scrollbar-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-container-scrollbar-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-container-scrollbar-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-container-scrollbar-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-container-scrollbar-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-container-scrollbar-vertical-lr-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-container-scrollbar-vertical-lr-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-container-scrollbar-vertical-lr-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-container-scrollbar-vertical-lr-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-container-scrollbar-vertical-rl-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-container-scrollbar-vertical-rl-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-container-scrollbar-vertical-rl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-container-scrollbar-vertical-rl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-container-scrollbars-sizing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-container-scrollbars-sizing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-container-scrollbars-sizing-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-container-scrollbars-sizing-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-container-sizing-constraints-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-container-sizing-constraints-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-display-grid-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-display-grid-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-display-inline-grid-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-display-inline-grid-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-first-letter-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-first-letter-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-first-letter-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-first-letter-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-first-letter-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-first-letter-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-first-line-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-first-line-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-first-line-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-first-line-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-first-line-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-first-line-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-float-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-float-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-float-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-float-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-floats-no-intrude-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-floats-no-intrude-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-floats-no-intrude-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-floats-no-intrude-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-floats-no-intrude-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-floats-no-intrude-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-gutters-and-flex-content-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-gutters-and-flex-content-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-gutters-and-tracks-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-gutters-and-tracks-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-gutters-as-percentage-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-gutters-as-percentage-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-inline-first-letter-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-inline-first-letter-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-inline-first-letter-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-inline-first-letter-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-inline-first-letter-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-inline-first-letter-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-inline-first-line-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-inline-first-line-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-inline-first-line-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-inline-first-line-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-inline-first-line-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-inline-first-line-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-inline-float-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-inline-float-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-inline-floats-no-intrude-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-inline-floats-no-intrude-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-inline-margins-no-collapse-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-inline-margins-no-collapse-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-inline-multicol-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-inline-multicol-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-inline-vertical-align-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-inline-vertical-align-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-item-accepts-first-letter-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-item-accepts-first-letter-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-item-accepts-first-line-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-item-accepts-first-line-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-item-hit-test.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-item-hit-test.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-layout-stale-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-layout-stale-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-layout-stale-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-layout-stale-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-margins-no-collapse-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-margins-no-collapse-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-margins-no-collapse-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-margins-no-collapse-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-margins-no-collapse-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-margins-no-collapse-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-min-max-height-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-min-max-height-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-multicol-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-multicol-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-overflow-padding-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-overflow-padding-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-overflow-padding-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-overflow-padding-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-size-shrink-to-fit-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-size-shrink-to-fit-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-support-display-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-support-display-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/grid-vertical-align-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/grid-vertical-align-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/implicit-grids/grid-support-grid-auto-columns-rows-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/implicit-grids/grid-support-grid-auto-columns-rows-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/implicit-grids/grid-support-grid-auto-columns-rows-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/implicit-grids/grid-support-grid-auto-columns-rows-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/implicit-grids/grid-support-grid-auto-columns-rows-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/implicit-grids/grid-support-grid-auto-columns-rows-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/auto-margins-ignored-during-track-sizing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/auto-margins-ignored-during-track-sizing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/baseline-alignment-affects-intrinsic-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/baseline-alignment-affects-intrinsic-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/baseline-alignment-affects-intrinsic-size-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/baseline-alignment-affects-intrinsic-size-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/baseline-alignment-affects-intrinsic-size-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/baseline-alignment-affects-intrinsic-size-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/baseline-alignment-affects-intrinsic-size-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/baseline-alignment-affects-intrinsic-size-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/baseline-alignment-affects-intrinsic-size-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/baseline-alignment-affects-intrinsic-size-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/baseline-alignment-affects-intrinsic-size-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/baseline-alignment-affects-intrinsic-size-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/flex-and-intrinsic-sizes-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/flex-and-intrinsic-sizes-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/flex-and-intrinsic-sizes-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/flex-and-intrinsic-sizes-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/flex-sizing-columns-min-max-width-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/flex-sizing-columns-min-max-width-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/flex-sizing-rows-indefinite-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/flex-sizing-rows-indefinite-height.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/flex-sizing-rows-min-max-height-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/flex-sizing-rows-min-max-height-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/flex-tracks-with-fractional-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/flex-tracks-with-fractional-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-as-flex-item-should-not-shrink-to-fit-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-as-flex-item-should-not-shrink-to-fit-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-as-flex-item-should-not-shrink-to-fit-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-as-flex-item-should-not-shrink-to-fit-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-as-flex-item-should-not-shrink-to-fit-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-as-flex-item-should-not-shrink-to-fit-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-as-flex-item-should-not-shrink-to-fit-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-as-flex-item-should-not-shrink-to-fit-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-as-flex-item-should-not-shrink-to-fit-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-as-flex-item-should-not-shrink-to-fit-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-as-flex-item-should-not-shrink-to-fit-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-as-flex-item-should-not-shrink-to-fit-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-as-flex-item-should-not-shrink-to-fit-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-as-flex-item-should-not-shrink-to-fit-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-as-flex-item-should-not-shrink-to-fit-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-as-flex-item-should-not-shrink-to-fit-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-automatic-minimum-for-auto-columns-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-automatic-minimum-for-auto-columns-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-automatic-minimum-for-auto-rows-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-automatic-minimum-for-auto-rows-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-container-percentage-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-container-percentage-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-container-percentage-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-container-percentage-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-content-distribution-must-account-for-track-sizing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-content-distribution-must-account-for-track-sizing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-content-distribution-must-account-for-track-sizing-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-content-distribution-must-account-for-track-sizing-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-content-distribution-must-account-for-track-sizing-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-content-distribution-must-account-for-track-sizing-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-content-distribution-must-account-for-track-sizing-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-content-distribution-must-account-for-track-sizing-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-find-fr-size-gutters-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-find-fr-size-gutters-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-find-fr-size-gutters-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-find-fr-size-gutters-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-find-fr-size-restart-algorithm.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-find-fr-size-restart-algorithm.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-fit-content-percentage.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-fit-content-percentage.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-flex-track-intrinsic-sizes-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-flex-track-intrinsic-sizes-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-flex-track-intrinsic-sizes-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-flex-track-intrinsic-sizes-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-flex-track-intrinsic-sizes-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-flex-track-intrinsic-sizes-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-intrinsic-size-dynamic-block-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-intrinsic-size-dynamic-block-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-intrinsic-size-with-orthogonal-items.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-intrinsic-size-with-orthogonal-items.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-intrinsic-track-sizes-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-intrinsic-track-sizes-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-item-margin-auto-columns-rows-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-item-margin-auto-columns-rows-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-item-margin-auto-columns-rows-vertical-lr-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-item-margin-auto-columns-rows-vertical-lr-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-item-margin-auto-columns-rows-vertical-rl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-item-margin-auto-columns-rows-vertical-rl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-layout-free-space-unit.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-layout-free-space-unit.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-minimum-contribution-baseline-shim-vertical-lr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-minimum-contribution-baseline-shim-vertical-lr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-minimum-contribution-baseline-shim-vertical-rl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-minimum-contribution-baseline-shim-vertical-rl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-minimum-contribution-baseline-shim.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-minimum-contribution-baseline-shim.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-percent-cols-filled-shrinkwrap-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-percent-cols-filled-shrinkwrap-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-percent-cols-spanned-shrinkwrap-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-percent-cols-spanned-shrinkwrap-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-percent-rows-filled-shrinkwrap-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-percent-rows-filled-shrinkwrap-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-percent-rows-spanned-shrinkwrap-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-percent-rows-spanned-shrinkwrap-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-stretch-respects-min-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-stretch-respects-min-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/grid-template-flexible-rerun-track-sizing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/grid-template-flexible-rerun-track-sizing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-area-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-area-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-area-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-area-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-area-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-area-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-area-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-area-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-auto-columns-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-auto-columns-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-auto-columns-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-auto-columns-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-auto-columns-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-auto-columns-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-auto-flow-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-auto-flow-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-auto-flow-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-auto-flow-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-auto-flow-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-auto-flow-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-auto-rows-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-auto-rows-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-auto-rows-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-auto-rows-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-auto-rows-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-auto-rows-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-columns-rows-get-set-multiple.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-columns-rows-get-set-multiple.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-content-sized-columns-resolution.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-content-sized-columns-resolution.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-shorthand-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-shorthand-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-shorthand-serialization.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-shorthand-serialization.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-shorthand-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-shorthand-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-areas-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-areas-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-areas-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-areas-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-areas-one-cell.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-areas-one-cell.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-areas-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-areas-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-columns-computed-implicit-track.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-columns-computed-implicit-track.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-columns-computed-nogrid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-columns-computed-nogrid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-columns-computed-withcontent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-columns-computed-withcontent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-columns-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-columns-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-columns-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-columns-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-columns-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-columns-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-repeat-auto-computed-withcontent-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-repeat-auto-computed-withcontent-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-repeat-auto-computed-withcontent-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-repeat-auto-computed-withcontent-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-rows-computed-implicit-track.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-rows-computed-implicit-track.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-rows-computed-nogrid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-rows-computed-nogrid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-rows-computed-withcontent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-rows-computed-withcontent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-rows-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-rows-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-rows-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-rows-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-rows-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-rows-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-shorthand-areas-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-shorthand-areas-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-shorthand-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-shorthand-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-shorthand-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-shorthand-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/parsing/grid-template-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/parsing/grid-template-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-auto-flow-sparse-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-auto-flow-sparse-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-auto-placement-implicit-tracks-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-auto-placement-implicit-tracks-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-container-change-grid-tracks-recompute-child-positions-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-container-change-grid-tracks-recompute-child-positions-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-container-change-named-grid-recompute-child-positions-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-container-change-named-grid-recompute-child-positions-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-layout-grid-span.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-layout-grid-span.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-layout-lines-shorthands.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-layout-lines-shorthands.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-layout-lines.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-layout-lines.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-layout-placement-shorthands.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-layout-placement-shorthands.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-placement-items-spanning-multiple-rows-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-placement-items-spanning-multiple-rows-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-placement-items-spanning-multiple-rows-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-placement-items-spanning-multiple-rows-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-placement-using-named-grid-lines-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-placement-using-named-grid-lines-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-placement-using-named-grid-lines-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-placement-using-named-grid-lines-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-placement-using-named-grid-lines-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-placement-using-named-grid-lines-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-placement-using-named-grid-lines-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-placement-using-named-grid-lines-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-placement-using-named-grid-lines-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-placement-using-named-grid-lines-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-placement-using-named-grid-lines-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-placement-using-named-grid-lines-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-placement-using-named-grid-lines-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-placement-using-named-grid-lines-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-placement-using-named-grid-lines-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-placement-using-named-grid-lines-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-placement-using-named-grid-lines-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-placement-using-named-grid-lines-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/placement/grid-template-areas-must-keep-named-columns-order-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/placement/grid-template-areas-must-keep-named-columns-order-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/anonymous-grid-items-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/anonymous-grid-items-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/display-grid-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/display-grid-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/display-inline-grid-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/display-inline-grid-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/flex-item-grid-container-percentage-rows-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/flex-item-grid-container-percentage-rows-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/fr-unit-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/fr-unit-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/fr-unit-with-percentage-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/fr-unit-with-percentage-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-2x2-blue-yellow-lime-magenta.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-2x2-blue-yellow-lime-magenta.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-auto-repeat-multiple-values-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-auto-repeat-multiple-values-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-block-axis-alignment-auto-margins-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-block-axis-alignment-auto-margins-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-container-auto-margins-scrollbars-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-container-auto-margins-scrollbars-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-container-scrollbars-sizing-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-container-scrollbars-sizing-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-container-scrollbars-sizing-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-container-scrollbars-sizing-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-different-gutters-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-different-gutters-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-equal-gutters-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-equal-gutters-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-filled-blue-yellow-green-overlapped-100px-squares.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-filled-blue-yellow-green-overlapped-100px-squares.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-first-letter-green-margin-no-collapse-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-first-letter-green-margin-no-collapse-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-inline-axis-alignment-auto-margins-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-inline-axis-alignment-auto-margins-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-inline-baseline-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-inline-baseline-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-item-script-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-item-script-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-layout-auto-tracks-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-layout-auto-tracks-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-layout-basic-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-layout-basic-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-layout-grid-in-grid-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-layout-grid-in-grid-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-layout-repeat-notation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-layout-repeat-notation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-layout-z-order-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-layout-z-order-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-percentage-gap-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-percentage-gap-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-support-grid-auto-columns-rows-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-support-grid-auto-columns-rows-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-support-grid-auto-columns-rows-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-support-grid-auto-columns-rows-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-support-grid-auto-columns-rows-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-support-grid-auto-columns-rows-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-template-areas-must-keep-named-columns-order-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-template-areas-must-keep-named-columns-order-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/grid-text-green-margin-no-collapse-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/grid-text-green-margin-no-collapse-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/reference/replaced-element-015-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/reference/replaced-element-015-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/abs-pos-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/abs-pos-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/abs-pos-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/abs-pos-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/abs-pos-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/abs-pos-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/abs-pos-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/abs-pos-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/auto-track-sizing-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/auto-track-sizing-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/auto-track-sizing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/auto-track-sizing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/auto-track-sizing-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/auto-track-sizing-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/auto-track-sizing-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/auto-track-sizing-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/contain-strict-nested-subgrid-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/contain-strict-nested-subgrid-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/contain-strict-subgrid-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/contain-strict-subgrid-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-larger-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-larger-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-larger-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-larger-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-larger-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-larger-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-larger-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-larger-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-normal-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-normal-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-normal-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-normal-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-smaller-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-smaller-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-gap-smaller-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-gap-smaller-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-subgridded-axis-auto-repeater-crash-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-subgridded-axis-auto-repeater-crash-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-subgridded-axis-auto-repeater-crash-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-subgridded-axis-auto-repeater-crash-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-subgridded-axis-auto-repeater-crash-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-subgridded-axis-auto-repeater-crash-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-template-computed-nogrid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-template-computed-nogrid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-template-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-template-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/grid-template-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/grid-template-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/independent-formatting-context-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/independent-formatting-context-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/independent-formatting-context.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/independent-formatting-context.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/item-percentage-height-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/item-percentage-height-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/item-percentage-height-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/item-percentage-height-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/line-names-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/line-names-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/orthogonal-writing-mode-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/orthogonal-writing-mode-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/orthogonal-writing-mode-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/orthogonal-writing-mode-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/orthogonal-writing-mode-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/orthogonal-writing-mode-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/orthogonal-writing-mode-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/orthogonal-writing-mode-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/orthogonal-writing-mode-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/orthogonal-writing-mode-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/orthogonal-writing-mode-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/orthogonal-writing-mode-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/orthogonal-writing-mode-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/orthogonal-writing-mode-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/orthogonal-writing-mode-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/orthogonal-writing-mode-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/parent-repeat-auto-fit-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/parent-repeat-auto-fit-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/parent-repeat-auto-fit-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/parent-repeat-auto-fit-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/parent-repeat-auto-fit-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/parent-repeat-auto-fit-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/parent-repeat-auto-fit-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/parent-repeat-auto-fit-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/repeat-auto-fill-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/repeat-auto-fill-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/repeat-auto-fill-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/repeat-auto-fill-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/repeat-auto-fill-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/repeat-auto-fill-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/repeat-auto-fill-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/repeat-auto-fill-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/repeat-auto-fill-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/repeat-auto-fill-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/repeat-auto-fill-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/repeat-auto-fill-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/repeat-auto-fill-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/repeat-auto-fill-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/repeat-auto-fill-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/repeat-auto-fill-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/repeat-auto-fill-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/repeat-auto-fill-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/repeat-auto-fill-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/repeat-auto-fill-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/repeat-auto-fill-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/repeat-auto-fill-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/repeat-auto-fill-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/repeat-auto-fill-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/repeat-auto-fill-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/repeat-auto-fill-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/subgrid-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/subgrid-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/subgrid-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/subgrid-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/subgrid-baseline-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/subgrid-baseline-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/subgrid-baseline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/subgrid-baseline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/subgrid-baseline-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/subgrid-baseline-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/subgrid-baseline-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/subgrid-baseline-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/subgrid-baseline-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/subgrid-baseline-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/subgrid-baseline-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/subgrid-baseline-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/subgrid-item-block-size-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/subgrid-item-block-size-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/subgrid-item-block-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/subgrid-item-block-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/subgrid-reflow-root-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/subgrid-reflow-root-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/subgrid-stretch-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/subgrid-stretch-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/subgrid/subgrid-stretch.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/subgrid/subgrid-stretch.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/test-plan/index.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/test-plan/index.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/references/grid-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/references/grid-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/references/grid-baseline-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/references/grid-baseline-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/references/grid-baseline-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/references/grid-baseline-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/references/grid-baseline-align-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/references/grid-baseline-align-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/references/grid-baseline-align-cycles-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/references/grid-baseline-align-cycles-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/references/grid-baseline-justify-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/references/grid-baseline-justify-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-002-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-002-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-002-b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-002-b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-changes-grid-area-size-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-horiz-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-horiz-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-horiz-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-horiz-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-horiz-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-horiz-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-horiz-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-horiz-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-horiz-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-horiz-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-horiz-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-horiz-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-horiz-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-horiz-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-horiz-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-horiz-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-horiz-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-horiz-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-horiz-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-horiz-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-horiz-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-horiz-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-horiz-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-horiz-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-horiz-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-horiz-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-horiz-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-horiz-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-lr-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/alignment/self-baseline/grid-self-baseline-vertical-rl-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/reference/100x100-grey-box-with-horizontal-scrollbar.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/reference/100x100-grey-box-with-horizontal-scrollbar.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/reference/100x100-grey-box-with-scrollbars.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/reference/100x100-grey-box-with-scrollbars.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/reference/100x100-grey-box-with-vertical-scrollbar.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/reference/100x100-grey-box-with-vertical-scrollbar.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/reference/100x100-grey-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/reference/100x100-grey-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/reference/column-property-should-not-apply-on-grid-container-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/reference/column-property-should-not-apply-on-grid-container-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/reference/grid-layout-stale-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/reference/grid-layout-stale-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/grid-model/reference/grid-layout-stale-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/grid-model/reference/grid-layout-stale-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/references/auto-margins-ignored-during-track-sizing-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/references/auto-margins-ignored-during-track-sizing-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/references/grid-percent-cols-filled-shrinkwrap-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/references/grid-percent-cols-filled-shrinkwrap-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/references/grid-percent-cols-spanned-shrinkwrap-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/references/grid-percent-cols-spanned-shrinkwrap-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/references/grid-percent-rows-filled-shrinkwrap-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/references/grid-percent-rows-filled-shrinkwrap-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/layout-algorithm/references/grid-percent-rows-spanned-shrinkwrap-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/layout-algorithm/references/grid-percent-rows-spanned-shrinkwrap-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/masonry-grid-template-columns-computed-withcontent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/masonry-grid-template-columns-computed-withcontent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/align-content/masonry-align-content-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/align-content/masonry-align-content-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/align-content/masonry-align-content-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/align-content/masonry-align-content-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/align-content/masonry-align-content-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/align-content/masonry-align-content-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/align-content/masonry-align-content-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/align-content/masonry-align-content-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/align-content/masonry-align-content-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/align-content/masonry-align-content-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/align-content/masonry-align-content-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/align-content/masonry-align-content-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/align-content/masonry-align-content-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/align-content/masonry-align-content-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/align-content/masonry-align-content-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/align-content/masonry-align-content-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/align-tracks/masonry-align-tracks-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/align-tracks/masonry-align-tracks-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/align-tracks/masonry-align-tracks-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/align-tracks/masonry-align-tracks-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/align-tracks/masonry-align-tracks-multi-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/align-tracks/masonry-align-tracks-multi-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/align-tracks/masonry-align-tracks-multi-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/align-tracks/masonry-align-tracks-multi-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/align-tracks/masonry-align-tracks-stretch-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/align-tracks/masonry-align-tracks-stretch-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/align-tracks/masonry-align-tracks-stretch-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/align-tracks/masonry-align-tracks-stretch-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/align-tracks/masonry-align-tracks-stretch-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/align-tracks/masonry-align-tracks-stretch-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/align-tracks/masonry-align-tracks-stretch-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/align-tracks/masonry-align-tracks-stretch-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/baseline/masonry-grid-item-content-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/baseline/masonry-grid-item-content-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/baseline/masonry-grid-item-content-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/baseline/masonry-grid-item-content-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/baseline/masonry-grid-item-self-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/baseline/masonry-grid-item-self-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/baseline/masonry-grid-item-self-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/baseline/masonry-grid-item-self-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/baseline/masonry-grid-item-self-baseline-002a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/baseline/masonry-grid-item-self-baseline-002a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/baseline/masonry-grid-item-self-baseline-002a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/baseline/masonry-grid-item-self-baseline-002a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/baseline/masonry-grid-item-self-baseline-002b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/baseline/masonry-grid-item-self-baseline-002b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/baseline/masonry-grid-item-self-baseline-002b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/baseline/masonry-grid-item-self-baseline-002b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/fragmentation/masonry-fragmentation-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/fragmentation/masonry-fragmentation-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/fragmentation/masonry-fragmentation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/fragmentation/masonry-fragmentation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/fragmentation/masonry-fragmentation-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/fragmentation/masonry-fragmentation-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/fragmentation/masonry-fragmentation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/fragmentation/masonry-fragmentation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/fragmentation/masonry-fragmentation-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/fragmentation/masonry-fragmentation-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/fragmentation/masonry-fragmentation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/fragmentation/masonry-fragmentation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/fragmentation/masonry-fragmentation-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/fragmentation/masonry-fragmentation-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/fragmentation/masonry-fragmentation-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/fragmentation/masonry-fragmentation-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/fragmentation/masonry-fragmentation-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/fragmentation/masonry-fragmentation-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/fragmentation/masonry-fragmentation-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/fragmentation/masonry-fragmentation-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/fragmentation/masonry-fragmentation-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/fragmentation/masonry-fragmentation-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/fragmentation/masonry-fragmentation-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/fragmentation/masonry-fragmentation-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/gap/masonry-gap-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/gap/masonry-gap-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/gap/masonry-gap-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/gap/masonry-gap-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/grid-placement/masonry-grid-placement-named-lines-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/grid-placement/masonry-grid-placement-named-lines-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/grid-placement/masonry-grid-placement-named-lines-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/grid-placement/masonry-grid-placement-named-lines-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/grid-placement/masonry-grid-placement-named-lines-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/grid-placement/masonry-grid-placement-named-lines-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/grid-placement/masonry-grid-placement-named-lines-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/grid-placement/masonry-grid-placement-named-lines-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/intrinsic-sizing/masonry-intrinsic-sizing-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-columns-item-placement-auto-flow-next-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-columns-item-placement-auto-flow-next-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-columns-item-placement-auto-flow-next-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-columns-item-placement-auto-flow-next-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-item-placement-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-item-placement-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-item-placement-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-item-placement-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-item-placement-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-item-placement-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-item-placement-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-item-placement-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-item-placement-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-item-placement-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-item-placement-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-item-placement-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-item-placement-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-item-placement-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-item-placement-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-item-placement-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-item-placement-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-item-placement-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-item-placement-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-item-placement-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-item-placement-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-item-placement-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-item-placement-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-item-placement-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-item-placement-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-item-placement-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-item-placement-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-item-placement-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-item-placement-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-item-placement-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-item-placement-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-item-placement-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-rows-item-placement-auto-flow-next-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-rows-item-placement-auto-flow-next-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/item-placement/masonry-rows-item-placement-auto-flow-next-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/item-placement/masonry-rows-item-placement-auto-flow-next-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/justify-content/masonry-justify-content-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/justify-content/masonry-justify-content-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/justify-content/masonry-justify-content-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/justify-content/masonry-justify-content-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/justify-content/masonry-justify-content-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/justify-content/masonry-justify-content-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/justify-content/masonry-justify-content-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/justify-content/masonry-justify-content-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/justify-content/masonry-justify-content-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/justify-content/masonry-justify-content-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/justify-content/masonry-justify-content-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/justify-content/masonry-justify-content-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/justify-content/masonry-justify-content-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/justify-content/masonry-justify-content-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/justify-content/masonry-justify-content-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/justify-content/masonry-justify-content-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/justify-tracks/masonry-justify-tracks-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/justify-tracks/masonry-justify-tracks-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/justify-tracks/masonry-justify-tracks-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/justify-tracks/masonry-justify-tracks-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/justify-tracks/masonry-justify-tracks-multi-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/justify-tracks/masonry-justify-tracks-multi-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/justify-tracks/masonry-justify-tracks-multi-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/justify-tracks/masonry-justify-tracks-multi-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/justify-tracks/masonry-justify-tracks-stretch-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/justify-tracks/masonry-justify-tracks-stretch-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/justify-tracks/masonry-justify-tracks-stretch-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/justify-tracks/masonry-justify-tracks-stretch-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/justify-tracks/masonry-justify-tracks-stretch-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/justify-tracks/masonry-justify-tracks-stretch-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/justify-tracks/masonry-justify-tracks-stretch-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/justify-tracks/masonry-justify-tracks-stretch-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/order/masonry-order-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/order/masonry-order-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/order/masonry-order-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/order/masonry-order-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/order/masonry-order-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/order/masonry-order-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/order/masonry-order-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/order/masonry-order-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/parsing/masonry-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/parsing/masonry-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/subgrid/masonry-subgrid-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/subgrid/masonry-subgrid-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/subgrid/masonry-subgrid-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/subgrid/masonry-subgrid-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/subgrid/masonry-subgrid-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/subgrid/masonry-subgrid-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/subgrid/masonry-subgrid-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/subgrid/masonry-subgrid-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/track-sizing/masonry-track-sizing-overflow-left-side-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/track-sizing/masonry-track-sizing-overflow-left-side-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/track-sizing/masonry-track-sizing-overflow-left-side.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/track-sizing/masonry-track-sizing-overflow-left-side.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/track-sizing/masonry-track-sizing-overflow-right-side-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/track-sizing/masonry-track-sizing-overflow-right-side-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-grid/masonry/tentative/track-sizing/masonry-track-sizing-overflow-right-side.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-grid/masonry/tentative/track-sizing/masonry-track-sizing-overflow-right-side.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

