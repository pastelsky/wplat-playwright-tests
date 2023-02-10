import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-position/change-insets-inside-strict-containment-nested.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/change-insets-inside-strict-containment-nested.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/containing-block-change-button-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/containing-block-change-button-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/containing-block-change-button.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/containing-block-change-button.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/containing-block-change-scrollframe-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/containing-block-change-scrollframe-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/containing-block-change-scrollframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/containing-block-change-scrollframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/fixed-z-index-blend-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/fixed-z-index-blend-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/fixed-z-index-blend.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/fixed-z-index-blend.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/hypothetical-box-scroll-parent-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/hypothetical-box-scroll-parent-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/hypothetical-box-scroll-parent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/hypothetical-box-scroll-parent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/hypothetical-box-scroll-viewport-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/hypothetical-box-scroll-viewport-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/hypothetical-box-scroll-viewport.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/hypothetical-box-scroll-viewport.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/hypothetical-dynamic-change-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/hypothetical-dynamic-change-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/hypothetical-dynamic-change-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/hypothetical-dynamic-change-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/hypothetical-dynamic-change-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/hypothetical-dynamic-change-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/hypothetical-dynamic-change-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/hypothetical-dynamic-change-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/invalidate-opacity-negative-z-index-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/invalidate-opacity-negative-z-index-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/invalidate-opacity-negative-z-index.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/invalidate-opacity-negative-z-index.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/nested-positions-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/nested-positions-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-abspos-table-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-abspos-table-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-center-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-center-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-center-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-center-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-center-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-center-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-center-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-center-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-center-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-center-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-center-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-center-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-chrome-bug-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-chrome-bug-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-chrome-bug-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-chrome-bug-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-container-dynamic-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-container-dynamic-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-container-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-container-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-crash-chrome-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-crash-chrome-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-crash-chrome-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-crash-chrome-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-crash-chrome-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-crash-chrome-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-crash-chrome-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-crash-chrome-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-crash-chrome-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-crash-chrome-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-crash-chrome-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-crash-chrome-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-crash-chrome-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-crash-chrome-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-crash-chrome-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-crash-chrome-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-crash-chrome-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-crash-chrome-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-crash-chrome-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-crash-chrome-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-crash-chrome-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-crash-chrome-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-crash-chrome-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-crash-chrome-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-crash-chrome-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-crash-chrome-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-auto-overflow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-auto-overflow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-containing-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-containing-block.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-list-marker.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-list-marker.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-overflow-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-overflow-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-overflow-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-overflow-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-relayout-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-relayout-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-relayout-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-relayout-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-relayout-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-relayout-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-static-position-flex.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-static-position-flex.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-static-position-floats-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-static-position-floats-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-static-position-floats-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-static-position-floats-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-static-position-floats-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-static-position-floats-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-static-position-floats-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-static-position-floats-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-static-position-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-static-position-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-static-position-margin-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-static-position-margin-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-static-position-margin-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-static-position-margin-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-static-position-table-cell.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-static-position-table-cell.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-dynamic-static-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-dynamic-static-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-fieldset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-fieldset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-fit-content.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-fit-content.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-iframe-print-001.sub.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-iframe-print-001.sub.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-iframe-print-002.sub.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-iframe-print-002.sub.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-iframe-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-iframe-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-in-inline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-in-inline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-in-inline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-in-inline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-in-inline-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-in-inline-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-in-inline-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-in-inline-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-in-inline-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-in-inline-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-large-negative-inset-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-large-negative-inset-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-large-negative-inset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-large-negative-inset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-multicol-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-multicol-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-padding-percentage.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-padding-percentage.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-percentage-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-percentage-height.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-replaced-intrinsic-size.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-replaced-intrinsic-size.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-replaced-minmax.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-replaced-minmax.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-replaced-no-intrinsic-size.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-replaced-no-intrinsic-size.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-replaced-with-display-table.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-replaced-with-display-table.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-root-element-flex.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-root-element-flex.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-root-element-grid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-root-element-grid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-root-element-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-root-element-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-semi-replaced-stretch-button-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-semi-replaced-stretch-button-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-semi-replaced-stretch-button.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-semi-replaced-stretch-button.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-semi-replaced-stretch-input-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-semi-replaced-stretch-input-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-semi-replaced-stretch-input.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-semi-replaced-stretch-input.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-semi-replaced-stretch-other-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-semi-replaced-stretch-other-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-semi-replaced-stretch-other.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-semi-replaced-stretch-other.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-table-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-table-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-under-non-containing-stacking-context-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-under-non-containing-stacking-context-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-absolute-under-non-containing-stacking-context.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-absolute-under-non-containing-stacking-context.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-change-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-change-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-fixed-at-bottom-right-on-viewport.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-fixed-at-bottom-right-on-viewport.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-fixed-dynamic-transformed-sibling-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-fixed-dynamic-transformed-sibling-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-fixed-dynamic-transformed-sibling.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-fixed-dynamic-transformed-sibling.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-fixed-overflow-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-fixed-overflow-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-fixed-overflow-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-fixed-overflow-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-fixed-root-element-flex.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-fixed-root-element-flex.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-fixed-root-element-grid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-fixed-root-element-grid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-fixed-root-element-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-fixed-root-element-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-fixed-scroll-nested-fixed-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-fixed-scroll-nested-fixed-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-fixed-scroll-nested-fixed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-fixed-scroll-nested-fixed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-fixed-scroll-overlap-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-fixed-scroll-overlap-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-fixed-scroll-overlap.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-fixed-scroll-overlap.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-fixed-video-controls-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-fixed-video-controls-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-caption.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-caption.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-left-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-left-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-tbody-left-absolute-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-tbody-left-absolute-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-tbody-left.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-tbody-left.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-tbody-top-absolute-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-tbody-top-absolute-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-tbody-top.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-tbody-top.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-td-left.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-td-left.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-td-top.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-td-top.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-tfoot-left-absolute-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-tfoot-left-absolute-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-tfoot-left.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-tfoot-left.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-tfoot-top-absolute-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-tfoot-top-absolute-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-tfoot-top-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-tfoot-top-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-tfoot-top.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-tfoot-top.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-thead-left-absolute-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-thead-left-absolute-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-thead-left.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-thead-left.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-thead-top-absolute-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-thead-top-absolute-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-thead-top.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-thead-top.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-top-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-top-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-tr-left-absolute-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-tr-left-absolute-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-tr-left.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-tr-left.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-tr-top-absolute-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-tr-top-absolute-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/position-relative-table-tr-top.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/position-relative-table-tr-top.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/positon-absolute-scrollable-overflow-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/positon-absolute-scrollable-overflow-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/z-index-blend-will-change-overlapping-layers-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/z-index-blend-will-change-overlapping-layers-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/z-index-blend-will-change-overlapping-layers.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/z-index-blend-will-change-overlapping-layers.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/animations/bottom-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/animations/bottom-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/animations/bottom-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/animations/bottom-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/animations/left-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/animations/left-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/animations/left-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/animations/left-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/animations/position-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/animations/position-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/animations/right-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/animations/right-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/animations/right-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/animations/right-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/animations/top-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/animations/top-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/animations/top-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/animations/top-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/crashtests/position-absolute-crash-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/crashtests/position-absolute-crash-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/crashtests/scroll-tree-parent-construction.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/crashtests/scroll-tree-parent-construction.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/vlr-in-multicols-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/vlr-in-multicols-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/vlr-ltr-ltr-in-multicols.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/vlr-ltr-ltr-in-multicols.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/vlr-ltr-rtl-in-multicols.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/vlr-ltr-rtl-in-multicols.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/vlr-rtl-ltr-in-multicols.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/vlr-rtl-ltr-in-multicols.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/vlr-rtl-rtl-in-multicols.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/vlr-rtl-rtl-in-multicols.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/vrl-in-multicols-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/vrl-in-multicols-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/vrl-ltr-ltr-in-multicols.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/vrl-ltr-ltr-in-multicols.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/vrl-ltr-rtl-in-multicols.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/vrl-ltr-rtl-in-multicols.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/vrl-rtl-ltr-in-multicols.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/vrl-rtl-ltr-in-multicols.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/vrl-rtl-rtl-in-multicols.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/vrl-rtl-rtl-in-multicols.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/bottom-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/bottom-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/bottom-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/bottom-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/bottom-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/bottom-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/inset-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/inset-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/inset-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/inset-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/inset-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/inset-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/left-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/left-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/left-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/left-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/left-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/left-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/position-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/position-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/position-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/position-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/position-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/position-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/right-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/right-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/right-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/right-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/right-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/right-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/top-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/top-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/top-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/top-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/top-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/top-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/z-index-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/z-index-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/z-index-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/z-index-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/z-index-positioned-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/z-index-positioned-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/parsing/z-index-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/parsing/z-index-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/resources/position-absolute-iframe-child-002.sub.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/resources/position-absolute-iframe-child-002.sub.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/resources/position-absolute-iframe-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/resources/position-absolute-iframe-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/resources/position-sticky-fixed-ancestor-iframe-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/resources/position-sticky-fixed-ancestor-iframe-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/htb-ltr-ltr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/htb-ltr-ltr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/htb-ltr-rtl.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/htb-ltr-rtl.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/htb-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/htb-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/htb-rtl-ltr.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/htb-rtl-ltr.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/htb-rtl-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/htb-rtl-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/inline-level-absolute-in-block-level-context-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/inline-level-absolute-in-block-level-context-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/inline-level-absolute-in-block-level-context-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/inline-level-absolute-in-block-level-context-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/inline-level-absolute-in-block-level-context-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/inline-level-absolute-in-block-level-context-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/inline-level-absolute-in-block-level-context-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/inline-level-absolute-in-block-level-context-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/inline-level-absolute-in-block-level-context-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/inline-level-absolute-in-block-level-context-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/inline-level-absolute-in-block-level-context-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/inline-level-absolute-in-block-level-context-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/inline-level-absolute-in-block-level-context-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/inline-level-absolute-in-block-level-context-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/inline-level-absolute-in-block-level-context-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/inline-level-absolute-in-block-level-context-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/inline-level-absolute-in-block-level-context-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/inline-level-absolute-in-block-level-context-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/inline-level-absolute-in-block-level-context-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/inline-level-absolute-in-block-level-context-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/inline-level-absolute-in-block-level-context-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/inline-level-absolute-in-block-level-context-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/inline-level-absolute-in-block-level-context-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/inline-level-absolute-in-block-level-context-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/inline-level-absolute-in-block-level-context-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/inline-level-absolute-in-block-level-context-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/inline-level-absolute-in-block-level-context-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/inline-level-absolute-in-block-level-context-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/vlr-ltr-ltr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/vlr-ltr-ltr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/vlr-ltr-rtl.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/vlr-ltr-rtl.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/vlr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/vlr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/vlr-rtl-ltr.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/vlr-rtl-ltr.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/vlr-rtl-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/vlr-rtl-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/vrl-ltr-ltr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/vrl-ltr-ltr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/vrl-ltr-rtl.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/vrl-ltr-rtl.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/vrl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/vrl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/vrl-rtl-ltr.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/vrl-rtl-ltr.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/static-position/vrl-rtl-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/static-position/vrl-rtl-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-bottom-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-bottom-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-bottom-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-bottom-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-bottom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-bottom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-change-top-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-change-top-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-change-top.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-change-top.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-child-multicolumn-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-child-multicolumn-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-child-multicolumn.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-child-multicolumn.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-contained-by-display-table-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-contained-by-display-table-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-contained-by-display-table.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-contained-by-display-table.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-escape-scroller-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-escape-scroller-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-escape-scroller-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-escape-scroller-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-escape-scroller-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-escape-scroller-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-escape-scroller-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-escape-scroller-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-escape-scroller-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-escape-scroller-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-escape-scroller-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-escape-scroller-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-escape-scroller-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-escape-scroller-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-fixed-ancestor-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-fixed-ancestor-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-fixed-ancestor-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-fixed-ancestor-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-fixed-ancestor-iframe-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-fixed-ancestor-iframe-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-fixed-ancestor-iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-fixed-ancestor-iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-fixed-ancestor-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-fixed-ancestor-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-fixed-ancestor.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-fixed-ancestor.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-flex-item-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-flex-item-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-flex-item-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-flex-item-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-flex-item-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-flex-item-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-flex-item-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-flex-item-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-flexbox-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-flexbox-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-flexbox.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-flexbox.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-get-bounding-client-rect.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-get-bounding-client-rect.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-grid-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-grid-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-grid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-grid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-hyperlink-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-hyperlink-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-hyperlink.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-hyperlink.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-inflow-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-inflow-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-inline-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-inline-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-input-box-gets-focused-after-scroll.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-input-box-gets-focused-after-scroll.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-large-top-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-large-top-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-large-top-2.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-large-top-2.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-large-top-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-large-top-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-large-top.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-large-top.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-left-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-left-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-left-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-left-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-left.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-left.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-margins.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-margins.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-nested-bottom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-nested-bottom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-nested-inline-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-nested-inline-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-nested-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-nested-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-nested-left.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-nested-left.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-nested-right.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-nested-right.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-nested-table-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-nested-table-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-nested-table.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-nested-table.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-nested-thead-th.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-nested-thead-th.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-nested-top.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-nested-top.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-offset-overflow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-offset-overflow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-offset-top-left.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-offset-top-left.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-overflow-clip-container-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-overflow-clip-container-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-overflow-clip-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-overflow-clip-container.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-overflow-hidden.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-overflow-hidden.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-overflow-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-overflow-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-rendering-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-rendering-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-rendering.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-rendering.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-right-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-right-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-right-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-right-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-right.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-right.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-root-scroller.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-root-scroller.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-scroll-reposition-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-scroll-reposition-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-scroll-reposition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-scroll-reposition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-scroll-with-clip-and-abspos-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-scroll-with-clip-and-abspos-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-scroll-with-clip-and-abspos.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-scroll-with-clip-and-abspos.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-scrollIntoView.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-scrollIntoView.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-scrolled-remove-sibling.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-scrolled-remove-sibling.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-stacking-context-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-stacking-context-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-stacking-context-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-stacking-context-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-stacking-context.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-stacking-context.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-parts-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-parts-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-parts.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-parts.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-td-bottom-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-td-bottom-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-td-bottom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-td-bottom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-td-left-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-td-left-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-td-left.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-td-left.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-td-right-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-td-right-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-td-right.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-td-right.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-td-top-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-td-top-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-td-top.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-td-top.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-tfoot-bottom-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-tfoot-bottom-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-tfoot-bottom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-tfoot-bottom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-th-bottom-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-th-bottom-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-th-bottom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-th-bottom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-th-left-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-th-left-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-th-left.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-th-left.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-th-right-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-th-right-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-th-right.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-th-right.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-th-top-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-th-top-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-th-top.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-th-top.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-thead-top-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-thead-top-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-thead-top.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-thead-top.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-tr-bottom-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-tr-bottom-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-tr-bottom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-tr-bottom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-tr-top-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-tr-top-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-table-tr-top.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-table-tr-top.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-top-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-top-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-top-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-top-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-top-and-bottom-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-top-and-bottom-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-top-and-bottom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-top-and-bottom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-top.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-top.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-transforms-translate.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-transforms-translate.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-transforms.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-transforms.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-writing-modes-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-writing-modes-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/position-sticky-writing-modes.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/position-sticky-writing-modes.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/sticky-after-input.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/sticky-after-input.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/static-position/vlr-in-multicol-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/static-position/vlr-in-multicol-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/static-position/vlr-ltr-ltr-in-multicol.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/static-position/vlr-ltr-ltr-in-multicol.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/static-position/vlr-ltr-rtl-in-multicol.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/static-position/vlr-ltr-rtl-in-multicol.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/static-position/vlr-rtl-ltr-in-multicol.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/static-position/vlr-rtl-ltr-in-multicol.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/static-position/vlr-rtl-rtl-in-multicol.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/static-position/vlr-rtl-rtl-in-multicol.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/static-position/vrl-in-multicol-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/static-position/vrl-in-multicol-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/static-position/vrl-ltr-ltr-in-multicol.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/static-position/vrl-ltr-ltr-in-multicol.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/static-position/vrl-ltr-rtl-in-multicol.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/static-position/vrl-ltr-rtl-in-multicol.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/static-position/vrl-rtl-ltr-in-multicol.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/static-position/vrl-rtl-ltr-in-multicol.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/multicol/static-position/vrl-rtl-rtl-in-multicol.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/multicol/static-position/vrl-rtl-rtl-in-multicol.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/reference/position-sticky-bottom-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/reference/position-sticky-bottom-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/reference/position-sticky-fixed-ancestor-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/reference/position-sticky-fixed-ancestor-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/reference/position-sticky-left-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/reference/position-sticky-left-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/reference/position-sticky-right-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/reference/position-sticky-right-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/reference/position-sticky-top-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/reference/position-sticky-top-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-position/sticky/reference/position-sticky-top-and-bottom-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-position/sticky/reference/position-sticky-top-and-bottom-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

