import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-multicol/abspos-after-spanner-static-pos.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/abspos-after-spanner-static-pos.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/abspos-after-spanner.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/abspos-after-spanner.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/abspos-autopos-contained-by-viewport-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/abspos-autopos-contained-by-viewport-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/abspos-autopos-contained-by-viewport-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/abspos-autopos-contained-by-viewport-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/abspos-containing-block-outside-spanner-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/abspos-containing-block-outside-spanner-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/abspos-containing-block-outside-spanner.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/abspos-containing-block-outside-spanner.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/abspos-in-multicol-with-spanner-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/abspos-in-multicol-with-spanner-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/abspos-multicol-in-second-outer-clipped.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/abspos-multicol-in-second-outer-clipped.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/always-balancing-before-column-span.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/always-balancing-before-column-span.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/as-column-flex-item.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/as-column-flex-item.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/auto-fill-auto-size-001-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/auto-fill-auto-size-001-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/auto-fill-auto-size-001-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/auto-fill-auto-size-001-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/auto-fill-auto-size-002-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/auto-fill-auto-size-002-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/auto-fill-auto-size-002-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/auto-fill-auto-size-002-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/balance-break-avoidance-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/balance-break-avoidance-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/balance-break-avoidance-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/balance-break-avoidance-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/balance-break-avoidance-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/balance-break-avoidance-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/balance-extremely-tall-monolithic-content-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/balance-extremely-tall-monolithic-content-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/balance-grid-container-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/balance-grid-container-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/balance-grid-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/balance-grid-container.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/balance-orphans-widows-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/balance-orphans-widows-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/baseline-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/baseline-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/broken-column-rule-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/broken-column-rule-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/broken-column-rule-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/broken-column-rule-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/change-abspos-width-in-second-column-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/change-abspos-width-in-second-column-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/change-fragmentainer-size-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/change-fragmentainer-size-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/change-fragmentainer-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/change-fragmentainer-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/change-fragmentainer-size-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/change-fragmentainer-size-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/change-fragmentainer-size-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/change-fragmentainer-size-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/change-intrinsic-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/change-intrinsic-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/change-out-of-flow-type-and-remove-inner-multicol-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/change-out-of-flow-type-and-remove-inner-multicol-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/change-transform-in-nested.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/change-transform-in-nested.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/change-transform-in-second-column.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/change-transform-in-second-column.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/change-transform-in-spanner.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/change-transform-in-spanner.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/change-transform.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/change-transform.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/column-balancing-paged-001-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/column-balancing-paged-001-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/column-balancing-paged-001-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/column-balancing-paged-001-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/column-balancing-with-overflow-auto-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/column-balancing-with-overflow-auto-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/column-balancing-with-span-and-oof-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/column-balancing-with-span-and-oof-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/column-balancing-with-span-and-oof-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/column-balancing-with-span-and-oof-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/column-count-used-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/column-count-used-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/column-fill-balance-orthog-block-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/column-fill-balance-orthog-block-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/columnfill-auto-max-height-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/columnfill-auto-max-height-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/columnfill-auto-max-height-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/columnfill-auto-max-height-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/columnfill-auto-max-height-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/columnfill-auto-max-height-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/composited-under-clip-under-multicol-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/composited-under-clip-under-multicol-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/composited-under-clip-under-multicol.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/composited-under-clip-under-multicol.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/dynamic-become-multicol-add-oof-inside-inline-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/dynamic-become-multicol-add-oof-inside-inline-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/equal-gap-and-rule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/equal-gap-and-rule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/extremely-tall-multicol-with-extremely-tall-child-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/extremely-tall-multicol-with-extremely-tall-child-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/filter-with-abspos.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/filter-with-abspos.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/fixed-in-multicol-with-transform-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/fixed-in-multicol-with-transform-container.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/fixed-in-nested-multicol-with-transform-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/fixed-in-nested-multicol-with-transform-container.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/fixed-in-nested-multicol-with-viewport-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/fixed-in-nested-multicol-with-viewport-container.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/fixed-in-nested-multicol.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/fixed-in-nested-multicol.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/fixed-size-child-with-overflow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/fixed-size-child-with-overflow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/fixedpos-static-pos-with-viewport-cb-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/fixedpos-static-pos-with-viewport-cb-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/fixedpos-static-pos-with-viewport-cb-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/fixedpos-static-pos-with-viewport-cb-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/fixedpos-static-pos-with-viewport-cb-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/fixedpos-static-pos-with-viewport-cb-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/float-and-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/float-and-block.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/float-with-line-after-spanner-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/float-with-line-after-spanner-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/float-with-line-after-spanner.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/float-with-line-after-spanner.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/getclientrects-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/getclientrects-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/getclientrects-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/getclientrects-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/going-out-of-flow-after-spanner.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/going-out-of-flow-after-spanner.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/hit-test-child-under-perspective.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/hit-test-child-under-perspective.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/hit-test-transformed-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/hit-test-transformed-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/img-alt-as-multicol-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/img-alt-as-multicol-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/increase-prev-sibling-height-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/increase-prev-sibling-height-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/increase-prev-sibling-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/increase-prev-sibling-height.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/inline-block-and-column-span-all.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/inline-block-and-column-span-all.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/intrinsic-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/intrinsic-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/intrinsic-size-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/intrinsic-size-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/intrinsic-size-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/intrinsic-size-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/intrinsic-size-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/intrinsic-size-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/intrinsic-size-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/intrinsic-size-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/intrinsic-width-change-column-count.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/intrinsic-width-change-column-count.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/large-actual-column-count.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/large-actual-column-count.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/moz-multicol3-column-balancing-break-inside-avoid-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/moz-multicol3-column-balancing-break-inside-avoid-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/moz-multicol3-column-balancing-break-inside-avoid-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/moz-multicol3-column-balancing-break-inside-avoid-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-basic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-basic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-basic-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-basic-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-basic-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-basic-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-basic-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-basic-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-nobackground-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-nobackground-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-nobackground-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-nobackground-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-nobackground-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-nobackground-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-nobackground-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-nobackground-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-nobackground-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-nobackground-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-nobackground-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-nobackground-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-nobackground-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-nobackground-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-nobackground-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-nobackground-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-nobackground-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-nobackground-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-nobackground-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-nobackground-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-nobackground-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-nobackground-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-breaking-nobackground-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-breaking-nobackground-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-clip-scrolled-content-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-clip-scrolled-content-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-contained-absolute-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-contained-absolute-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-contained-absolute.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-contained-absolute.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-containing-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-containing-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-dynamic-add-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-dynamic-add-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-dynamic-add-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-dynamic-add-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-dynamic-change-inside-break-inside-avoid-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-dynamic-change-inside-break-inside-avoid-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-dynamic-change-inside-break-inside-avoid-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-dynamic-change-inside-break-inside-avoid-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-auto-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-auto-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-auto-block-children-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-auto-block-children-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-auto-block-children-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-auto-block-children-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-fill-balance-nested-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-fill-balance-nested-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-gap-animation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-gap-animation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-gap-animation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-gap-animation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-gap-animation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-gap-animation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-gap-fraction-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-gap-fraction-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-gap-percentage-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-gap-percentage-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-list-item-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-list-item-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-list-item-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-list-item-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-list-item-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-list-item-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-list-item-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-list-item-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-list-item-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-list-item-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-list-item-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-list-item-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-list-item-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-list-item-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-list-item-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-list-item-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-list-item-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-list-item-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-list-item-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-list-item-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-list-item-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-list-item-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-list-item-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-list-item-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-list-item-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-list-item-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-list-item-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-list-item-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-margin-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-margin-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-029-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-029-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-column-rule-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-column-rule-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-nested-column-rule-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-nested-column-rule-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-oof-inline-cb-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-oof-inline-cb-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-oof-inline-cb-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-oof-inline-cb-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-oof-inline-cb-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-oof-inline-cb-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-overflow-clip-auto-sized-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-overflow-clip-auto-sized-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-overflow-clip-auto-sized.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-overflow-clip-auto-sized.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-overflow-clip-positioned-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-overflow-clip-positioned-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-overflow-clip-positioned.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-overflow-clip-positioned.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-overflow-clip-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-overflow-clip-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-overflow-clip.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-overflow-clip.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-overflow-positioned-transform-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-overflow-positioned-transform-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-overflow-transform-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-overflow-transform-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-rule-nested-balancing-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-rule-nested-balancing-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-rule-nested-balancing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-rule-nested-balancing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-rule-nested-balancing-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-rule-nested-balancing-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-rule-nested-balancing-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-rule-nested-balancing-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-rule-nested-balancing-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-rule-nested-balancing-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-rule-nested-balancing-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-rule-nested-balancing-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-rule-nested-balancing-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-rule-nested-balancing-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-rule-nested-balancing-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-rule-nested-balancing-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-scroll-content-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-scroll-content-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-scroll-content.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-scroll-content.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-button-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-button-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-button-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-button-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-button-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-button-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-button-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-button-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-button-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-button-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-button-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-button-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-004a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-004a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-004a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-004a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-004b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-004b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-004b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-004b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-children-height-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-children-height-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-add-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-add-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-remove-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-remove-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-remove-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-remove-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-remove-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-remove-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-remove-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-remove-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-remove-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-remove-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-remove-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-remove-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-remove-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-remove-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-remove-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-remove-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-remove-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-remove-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-remove-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-remove-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-dynamic-remove-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-dynamic-remove-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-fieldset-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-fieldset-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-fieldset-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-fieldset-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-fieldset-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-fieldset-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-fieldset-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-fieldset-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-fieldset-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-fieldset-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-fieldset-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-fieldset-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-list-item-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-list-item-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-list-item-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-list-item-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-list-item-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-list-item-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-list-item-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-list-item-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-margin-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-margin-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-restyle-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-restyle-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-restyle-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-restyle-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-restyle-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-restyle-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-restyle-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-restyle-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-restyle-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-restyle-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-restyle-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-restyle-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-restyle-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-restyle-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-restyle-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-restyle-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-rule-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-rule-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-all-rule-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-all-rule-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-float-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-float-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-float-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-float-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-span-float-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-span-float-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-under-vertical-rl-scroll-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-under-vertical-rl-scroll-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-under-vertical-rl-scroll.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-under-vertical-rl-scroll.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-width-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-width-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-width-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-width-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-width-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-width-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-width-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-width-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-zero-height-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-zero-height-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-zero-height-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-zero-height-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-zero-height-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-zero-height-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/multicol-zero-height-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/multicol-zero-height-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/named-page.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/named-page.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/nested-after-float-clearance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/nested-after-float-clearance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/nested-at-outer-boundary-as-fieldset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/nested-at-outer-boundary-as-fieldset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/nested-at-outer-boundary-as-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/nested-at-outer-boundary-as-float.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/nested-at-outer-boundary-as-legend.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/nested-at-outer-boundary-as-legend.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/nested-balanced-monolithic-multicol-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/nested-balanced-monolithic-multicol-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/nested-balanced-very-tall-content-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/nested-balanced-very-tall-content-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/nested-floated-multicol-with-monolithic-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/nested-floated-multicol-with-monolithic-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/nested-floated-shape-outside-multicol-with-monolithic-child-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/nested-floated-shape-outside-multicol-with-monolithic-child-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/nested-non-auto-inline-size-offset-top.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/nested-non-auto-inline-size-offset-top.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/nested-oofs-in-relative-multicol.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/nested-oofs-in-relative-multicol.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/nested-past-fragmentation-line.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/nested-past-fragmentation-line.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/nested-with-overflowing-padding-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/nested-with-overflowing-padding-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/nested-with-padding-and-spanner.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/nested-with-padding-and-spanner.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/nested-with-too-tall-line-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/nested-with-too-tall-line-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/nested-with-too-tall-line.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/nested-with-too-tall-line.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/no-balancing-after-column-span.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/no-balancing-after-column-span.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/non-adjacent-spanners-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/non-adjacent-spanners-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/non-adjacent-spanners-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/non-adjacent-spanners-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/oof-nested-in-single-column.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/oof-nested-in-single-column.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/orthogonal-writing-mode-shrink-to-fit.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/orthogonal-writing-mode-shrink-to-fit.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/orthogonal-writing-mode-spanner.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/orthogonal-writing-mode-spanner.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/overflow-scroll-in-multicol-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/overflow-scroll-in-multicol-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/overflow-unsplittable-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/overflow-unsplittable-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/overflow-unsplittable-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/overflow-unsplittable-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/overflow-unsplittable-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/overflow-unsplittable-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/overflow-unsplittable-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/overflow-unsplittable-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/page-property-ignored.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/page-property-ignored.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/relative-child-overflowing-column-gap-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/relative-child-overflowing-column-gap-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/relative-child-overflowing-column-gap.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/relative-child-overflowing-column-gap.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/relative-child-overflowing-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/relative-child-overflowing-container.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/remove-block-beside-spanner-in-inline-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/remove-block-beside-spanner-in-inline-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/remove-block-sibling-of-inline-with-block-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/remove-block-sibling-of-inline-with-block-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/remove-child-in-strict-containment-also-spanner.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/remove-child-in-strict-containment-also-spanner.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/remove-inline-with-block-beside-spanners-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/remove-inline-with-block-beside-spanners-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/remove-inline-with-block-beside-spanners.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/remove-inline-with-block-beside-spanners.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/remove-spanner-beside-spanner-in-inline-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/remove-spanner-beside-spanner-in-inline-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/replaced-content-spanner-auto-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/replaced-content-spanner-auto-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/resize-in-strict-containment-nested.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/resize-in-strict-containment-nested.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/resize-multicol-with-fixed-size-children.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/resize-multicol-with-fixed-size-children.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/scroll-width-height.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/scroll-width-height.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-fragmentation-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-fragmentation-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-fragmentation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-fragmentation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-fragmentation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-fragmentation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-fragmentation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-fragmentation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-fragmentation-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-fragmentation-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-fragmentation-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-fragmentation-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-fragmentation-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-fragmentation-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-fragmentation-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-fragmentation-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-fragmentation-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-fragmentation-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-fragmentation-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-fragmentation-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-fragmentation-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-fragmentation-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-fragmentation-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-fragmentation-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-fragmentation-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-fragmentation-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-in-child-after-parallel-flow-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-in-child-after-parallel-flow-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-in-child-after-parallel-flow-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-in-child-after-parallel-flow-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-in-child-after-parallel-flow-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-in-child-after-parallel-flow-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-in-child-after-parallel-flow-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-in-child-after-parallel-flow-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-in-opacity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-in-opacity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanner-in-opacity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanner-in-opacity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanning-legend-000-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanning-legend-000-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/spanning-legend-001-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/spanning-legend-001-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/subpixel-column-rule-width.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/subpixel-column-rule-width.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/subpixel-scroll-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/subpixel-scroll-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/toggle-spanner-float-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/toggle-spanner-float-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/triply-nested-with-fixedpos-in-abspos-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/triply-nested-with-fixedpos-in-abspos-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/with-custom-layout-on-same-element-crash.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/with-custom-layout-on-same-element-crash.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/with-custom-layout-on-same-element.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/with-custom-layout-on-same-element.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/zero-column-width-computed-style.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/zero-column-width-computed-style.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/zero-column-width-layout.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/zero-column-width-layout.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/animation/column-count-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/animation/column-count-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/animation/column-rule-color-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/animation/column-rule-color-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/animation/column-rule-width-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/animation/column-rule-width-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/animation/column-width-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/animation/column-width-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/as-baseline-aligned-grid-item.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/as-baseline-aligned-grid-item.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/balance-with-forced-break.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/balance-with-forced-break.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/balancing-flex-item-trailing-margin-freeze.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/balancing-flex-item-trailing-margin-freeze.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/balancing-tall-borders-freeze.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/balancing-tall-borders-freeze.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/body-becomes-spanner-html-becomes-vertical-rl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/body-becomes-spanner-html-becomes-vertical-rl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/break-before-multicol-caption.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/break-before-multicol-caption.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/chrome-bug-1293905.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/chrome-bug-1293905.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/chrome-bug-1297118.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/chrome-bug-1297118.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/chrome-bug-1301281.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/chrome-bug-1301281.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/chrome-bug-1303256.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/chrome-bug-1303256.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/chrome-bug-1314866.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/chrome-bug-1314866.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/dynamic-simplified-layout-break-propagation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/dynamic-simplified-layout-break-propagation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/fit-content-with-spanner-and-auto-scrollbar-sibling.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/fit-content-with-spanner-and-auto-scrollbar-sibling.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/float-becomes-non-float-spanner-surprises-inside.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/float-becomes-non-float-spanner-surprises-inside.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/float-becomes-spanner.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/float-becomes-spanner.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/forced-break-in-oof-in-column-balancing-nested.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/forced-break-in-oof-in-column-balancing-nested.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/forced-break-in-oof-in-column-balancing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/forced-break-in-oof-in-column-balancing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/inline-with-spanner-in-overflowed-container-before-multicol-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/inline-with-spanner-in-overflowed-container-before-multicol-float.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/margin-and-break-before-child-spanner.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/margin-and-break-before-child-spanner.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/monolithic-oof-in-clipped-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/monolithic-oof-in-clipped-container.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/move-linebreak-to-different-column.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/move-linebreak-to-different-column.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/move-newline-pre-text.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/move-newline-pre-text.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/multicol-at-page-boundary-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/multicol-at-page-boundary-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/multicol-block-in-inline-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/multicol-block-in-inline-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/multicol-cached-consumed-bsize-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/multicol-cached-consumed-bsize-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/multicol-column-change-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/multicol-column-change-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/multicol-dynamic-contain-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/multicol-dynamic-contain-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/multicol-dynamic-transform-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/multicol-dynamic-transform-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/multicol-floats-after-column-span-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/multicol-floats-after-column-span-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/multicol-floats-in-ifc.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/multicol-floats-in-ifc.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/multicol-with-monolithic-oof-with-multicol-with-oof.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/multicol-with-monolithic-oof-with-multicol-with-oof.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/negative-margin-on-column-spanner.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/negative-margin-on-column-spanner.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-as-balanced-legend.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-as-balanced-legend.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-as-nested-balanced-legend.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-as-nested-balanced-legend.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-floated-multicol-with-tall-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-floated-multicol-with-tall-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-multicol-and-float-with-tall-padding-before-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-multicol-and-float-with-tall-padding-before-float.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-multicol-and-float-with-tall-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-multicol-and-float-with-tall-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-multicol-fieldset-tall-trailing-border-freeze.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-multicol-fieldset-tall-trailing-border-freeze.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-multicol-fieldset-tall-trailing-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-multicol-fieldset-tall-trailing-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-multicol-in-svg-foreignobject.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-multicol-in-svg-foreignobject.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-multicol-nested-flex.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-multicol-nested-flex.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-multicol-with-float-between.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-multicol-with-float-between.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-oof-multicol-with-monolithic-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-oof-multicol-with-monolithic-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-oof-multicol-with-oof-needing-additional-columns.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-oof-multicol-with-oof-needing-additional-columns.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-oof-multicol-with-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-oof-multicol-with-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-spanner-with-negative-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-spanner-with-negative-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-with-fragmented-oof-negative-top-offset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-with-fragmented-oof-negative-top-offset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-with-multicol-table-caption.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-with-multicol-table-caption.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-with-multicol-table-cell.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-with-multicol-table-cell.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-with-oof-inside-fixed-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-with-oof-inside-fixed-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-with-percentage-size-and-oof.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-with-percentage-size-and-oof.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-with-tall-padding-and-oof.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-with-tall-padding-and-oof.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-with-tall-padding-and-spanner-and-content.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-with-tall-padding-and-spanner-and-content.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/nested-with-tall-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/nested-with-tall-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/oof-becomes-spanner.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/oof-becomes-spanner.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/oof-in-additional-column-before-spanner.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/oof-in-additional-column-before-spanner.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/oof-in-nested-line-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/oof-in-nested-line-float.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/oof-nested-multicol-inside-oof.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/oof-nested-multicol-inside-oof.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/outline-move-oof-with-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/outline-move-oof-with-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/relayout-nested-with-oof.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/relayout-nested-with-oof.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/relpos-inline-with-abspos-multicol-gets-block-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/relpos-inline-with-abspos-multicol-gets-block-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/relpos-spanner-with-spanner-child-becomes-regular.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/relpos-spanner-with-spanner-child-becomes-regular.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/remove-spanner-after-spanner-in-inline-before-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/remove-spanner-after-spanner-in-inline-before-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/remove-spanner-in-table-caption-nested-multicol.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/remove-spanner-in-table-caption-nested-multicol.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/repeated-section-in-nested-table-nested-multicol.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/repeated-section-in-nested-table-nested-multicol.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/repeated-table-footer-in-caption-nested-multicol.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/repeated-table-footer-in-caption-nested-multicol.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/restricted-height-bottom-border-overflow-and-spanner.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/restricted-height-bottom-border-overflow-and-spanner.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/scrollable-spanner-in-nested.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/scrollable-spanner-in-nested.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/size-containment-become-multicol-add-inline-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/size-containment-become-multicol-add-inline-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/spanner-after-parallel-flow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/spanner-after-parallel-flow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/spanner-in-inline-after-very-tall-content-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/spanner-in-inline-after-very-tall-content-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/spanner-in-inline-after-very-tall-content-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/spanner-in-inline-after-very-tall-content-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/spanner-in-overflowed-clipped-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/spanner-in-overflowed-clipped-container.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/spanner-in-overflowed-container-before-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/spanner-in-overflowed-container-before-float.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/spanner-in-overflowed-container-before-inline-content.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/spanner-in-overflowed-container-before-inline-content.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/spanner-inside-inline-in-overflowed-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/spanner-inside-inline-in-overflowed-container.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/specified-height-with-just-spanner-and-oof.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/specified-height-with-just-spanner-and-oof.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/sticky-in-abs-in-sticky.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/sticky-in-abs-in-sticky.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/table-caption-change-descendant-display-type.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/table-caption-change-descendant-display-type.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/table-caption-inline-block-remove-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/table-caption-inline-block-remove-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/table-cell-writing-mode-root.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/table-cell-writing-mode-root.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/trailing-parent-padding-between-spanners.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/trailing-parent-padding-between-spanners.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/crashtests/vertical-rl-column-rules-wide-columns.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/crashtests/vertical-rl-column-rules-wide-columns.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-count-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-count-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-count-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-count-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-count-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-count-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-fill-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-fill-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-fill-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-fill-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-fill-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-fill-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-rule-color-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-rule-color-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-rule-color-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-rule-color-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-rule-color-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-rule-color-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-rule-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-rule-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-rule-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-rule-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-rule-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-rule-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-rule-style-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-rule-style-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-rule-style-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-rule-style-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-rule-style-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-rule-style-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-rule-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-rule-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-rule-width-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-rule-width-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-rule-width-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-rule-width-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-rule-width-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-rule-width-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-span-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-span-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-span-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-span-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-span-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-span-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-width-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-width-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-width-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-width-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/column-width-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/column-width-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/columns-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/columns-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/parsing/columns-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/parsing/columns-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/reference/column-fill-balance-orthog-block-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/reference/column-fill-balance-orthog-block-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/reference/multicol-basic-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/reference/multicol-basic-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/reference/multicol-clip-scrolled-content-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/reference/multicol-clip-scrolled-content-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/reference/nested-oofs-in-relative-multicol-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/reference/nested-oofs-in-relative-multicol-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/reference/subpixel-column-rule-width-ref.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/reference/subpixel-column-rule-width-ref.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/table/balance-breakafter-before-table-section-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/table/balance-breakafter-before-table-section-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/table/balance-table-with-border-spacing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/table/balance-table-with-border-spacing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/table/balance-table-with-fractional-height-row.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/table/balance-table-with-fractional-height-row.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/table/table-cell-as-multicol-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/table/table-cell-as-multicol-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/table/table-cell-as-multicol.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/table/table-cell-as-multicol.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/table/table-cell-content-change-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/table/table-cell-content-change-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/table/table-cell-content-change-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/table/table-cell-content-change-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/table/table-cell-content-change-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/table/table-cell-content-change-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/table/table-cell-content-change-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/table/table-cell-content-change-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/table/table-cell-multicol-nested-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/table/table-cell-multicol-nested-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/table/table-cell-multicol-nested-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/table/table-cell-multicol-nested-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-multicol/table/table-cell-multicol-nested-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-multicol/table/table-cell-multicol-nested-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

