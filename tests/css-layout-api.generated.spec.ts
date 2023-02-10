import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-layout-api/at-supports-rule.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/at-supports-rule.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/box-tree-registered-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/box-tree-registered-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/box-tree-registered.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/box-tree-registered.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/box-tree-unregistered-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/box-tree-unregistered-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/box-tree-unregistered.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/box-tree-unregistered.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/chrome-bug-1287843-000-crash.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/chrome-bug-1287843-000-crash.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/chrome-bug-1287843-001-crash.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/chrome-bug-1287843-001-crash.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/chrome-bug-1291449-crash.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/chrome-bug-1291449-crash.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/chrome-bug-1296664-crash.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/chrome-bug-1296664-crash.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/computed-style-layout-function.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/computed-style-layout-function.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints-data-function-failure.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints-data-function-failure.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints-data-sab-failure.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints-data-sab-failure.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints-data.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints-data.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/crash-multicol.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/crash-multicol.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fragment-data-function-failure.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fragment-data-function-failure.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fragment-data-immutable.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fragment-data-immutable.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fragment-data-sab-failure.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fragment-data-sab-failure.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fragment-data.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fragment-data.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/green-square-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/green-square-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/inline-style-layout-function.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/inline-style-layout-function.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/input-text-crash.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/input-text-crash.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/inside-multicol-crash.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/inside-multicol-crash.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/list-item-multicol-with-custom-layout-child-crash.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/list-item-multicol-with-custom-layout-child-crash.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/multicol-break-before-crash.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/multicol-break-before-crash.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/multicol-child-crash.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/multicol-child-crash.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/multicol-details-crash.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/multicol-details-crash.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/multicol-fieldset-crash.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/multicol-fieldset-crash.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/style-map-multi-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/style-map-multi-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/style-map-multi.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/style-map-multi.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/style-map-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/style-map-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/style-map.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/style-map.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/supports.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/supports.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/sync-layout-microtasks.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/sync-layout-microtasks.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/auto-block-size/absolute.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/auto-block-size/absolute.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/auto-block-size/auto-block-size-absolute-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/auto-block-size/auto-block-size-absolute-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/auto-block-size/auto-block-size-floats-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/auto-block-size/auto-block-size-floats-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/auto-block-size/auto-block-size-negative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/auto-block-size/auto-block-size-negative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/auto-block-size/flex-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/auto-block-size/flex-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/auto-block-size/flex.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/auto-block-size/flex.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/auto-block-size/floats.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/auto-block-size/floats.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/auto-block-size/inflow-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/auto-block-size/inflow-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/auto-block-size/inflow.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/auto-block-size/inflow.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/auto-block-size/negative.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/auto-block-size/negative.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/baseline/child-baseline.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/baseline/child-baseline.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/baseline/flex-baseline.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/baseline/flex-baseline.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/baseline/no-baseline.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/baseline/no-baseline.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/baseline/orthogonal-baseline.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/baseline/orthogonal-baseline.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/available-block-size-htb-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/available-block-size-htb-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/available-block-size-invalid.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/available-block-size-invalid.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/available-block-size-vrl-htb.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/available-block-size-vrl-htb.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/available-inline-size-htb-htb.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/available-inline-size-htb-htb.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/available-inline-size-invalid.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/available-inline-size-invalid.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/available-inline-size-vrl-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/available-inline-size-vrl-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/available-size-for-percentages-htb-htb.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/available-size-for-percentages-htb-htb.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/available-size-for-percentages-htb-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/available-size-for-percentages-htb-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/available-size-for-percentages-invalid.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/available-size-for-percentages-invalid.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/available-size-for-percentages-vrl-htb.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/available-size-for-percentages-vrl-htb.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/available-size-for-percentages-vrl-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/available-size-for-percentages-vrl-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/fixed-block-size-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/fixed-block-size-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/fixed-block-size.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/fixed-block-size.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/fixed-inline-size-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/fixed-inline-size-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/fixed-inline-size.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/fixed-inline-size.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/percentage-size-htb-htb.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/percentage-size-htb-htb.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/percentage-size-htb-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/percentage-size-htb-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/percentage-size-invalid.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/percentage-size-invalid.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/percentage-size-quirks-mode.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/percentage-size-quirks-mode.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/percentage-size-vrl-htb.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/percentage-size-vrl-htb.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/child-constraints/percentage-size-vrl-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/child-constraints/percentage-size-vrl-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-absolute-left-right-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-absolute-left-right-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-absolute-none.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-absolute-none.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-absolute-top-bottom.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-absolute-top-bottom.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-block-none-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-block-none-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-block-none.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-block-none.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-fixed-max.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-fixed-max.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-fixed-min.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-fixed-min.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-fixed-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-fixed-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-fixed.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-fixed.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-flex-basis-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-flex-basis-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-flex-column-basis.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-flex-column-basis.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-flex-column-grow.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-flex-column-grow.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-flex-column-none.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-flex-column-none.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-flex-column-stretch-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-flex-column-stretch-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-flex-grow-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-flex-grow-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-flex-none.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-flex-none.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-flex-percentage-indefinite.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-flex-percentage-indefinite.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-flex-stretch-max.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-flex-stretch-max.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-flex-stretch.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-flex-stretch.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-grid-none.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-grid-none.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-grid-stretch-max.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-grid-stretch-max.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-grid-stretch.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-grid-stretch.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-grid-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-grid-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-percentage-indefinite.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-percentage-indefinite.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-percentage-quirks-mode.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-percentage-quirks-mode.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-percentage-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-percentage-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-percentage.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-percentage.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-block-size-quirky-body.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-block-size-quirky-body.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-inline-size-absolute-left-right.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-inline-size-absolute-left-right.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-inline-size-absolute-top-bottom-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-inline-size-absolute-top-bottom-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-inline-size-block-auto-avoid-floats-vlr.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-inline-size-block-auto-avoid-floats-vlr.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-inline-size-block-auto-avoid-floats.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-inline-size-block-auto-avoid-floats.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-inline-size-block-auto-vlr.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-inline-size-block-auto-vlr.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-inline-size-block-auto.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-inline-size-block-auto.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-inline-size-fixed-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-inline-size-fixed-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-inline-size-fixed.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-inline-size-fixed.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-inline-size-flex-grow-column-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-inline-size-flex-grow-column-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-inline-size-flex-grow.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-inline-size-flex-grow.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-inline-size-grid.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-inline-size-grid.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-inline-size-percentage-vlr.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-inline-size-percentage-vlr.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-inline-size-percentage.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-inline-size-percentage.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/fixed-inline-size-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/fixed-inline-size-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/edges/all-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/edges/all-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/edges/all.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/edges/all.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/edges/border-htb-rtl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/edges/border-htb-rtl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/edges/border-htb.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/edges/border-htb.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/edges/border-vlr-rtl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/edges/border-vlr-rtl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/edges/border-vlr.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/edges/border-vlr.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/edges/border-vrl-rtl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/edges/border-vrl-rtl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/edges/border-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/edges/border-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/edges/padding-htb-rtl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/edges/padding-htb-rtl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/edges/padding-htb.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/edges/padding-htb.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/edges/padding-vlr-rtl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/edges/padding-vlr-rtl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/edges/padding-vlr.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/edges/padding-vlr.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/edges/padding-vrl-rtl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/edges/padding-vrl-rtl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/edges/padding-vrl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/edges/padding-vrl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/edges/scrollbar-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/edges/scrollbar-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/edges/scrollbar.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/edges/scrollbar.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fallback-intrinsic-sizes/bad-return.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fallback-intrinsic-sizes/bad-return.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fallback-intrinsic-sizes/constructor-error.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fallback-intrinsic-sizes/constructor-error.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fallback-intrinsic-sizes/error.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fallback-intrinsic-sizes/error.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fallback-intrinsic-sizes/fallback-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fallback-intrinsic-sizes/fallback-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fallback-intrinsic-sizes/invalid-child.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fallback-intrinsic-sizes/invalid-child.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fallback-intrinsic-sizes/no-promise.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fallback-intrinsic-sizes/no-promise.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fallback-intrinsic-sizes/unresolved-promise.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fallback-intrinsic-sizes/unresolved-promise.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fallback-layout/bad-return.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fallback-layout/bad-return.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fallback-layout/constructor-error.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fallback-layout/constructor-error.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fallback-layout/error.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fallback-layout/error.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fallback-layout/fallback-layout-fallback-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fallback-layout/fallback-layout-fallback-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fallback-layout/invalid-child.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fallback-layout/invalid-child.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fallback-layout/invalid-fragment.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fallback-layout/invalid-fragment.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fallback-layout/no-promise.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fallback-layout/no-promise.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/fallback-layout/unresolved-promise.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/fallback-layout/unresolved-promise.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/absolute-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/absolute-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/absolute.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/absolute.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/child-replaced-percentage-01.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/child-replaced-percentage-01.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/child-replaced-percentage-02.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/child-replaced-percentage-02.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/child-replaced-percentage-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/child-replaced-percentage-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/child-size-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/child-size-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/child-size-01.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/child-size-01.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/child-size-02-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/child-size-02-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/child-size-02.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/child-size-02.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/child-size-03.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/child-size-03.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/child-size-contribution.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/child-size-contribution.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/content-size-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/content-size-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/content-size.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/content-size.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/floats-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/floats-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/floats.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/floats.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/invalid-min-max.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/invalid-min-max.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/invalid-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/invalid-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/negative-max.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/negative-max.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/negative-min.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/negative-min.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/intrinsic-sizes/negative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/intrinsic-sizes/negative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/layout-child/absolute.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/layout-child/absolute.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/layout-child/before-after.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/layout-child/before-after.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/layout-child/fixed.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/layout-child/fixed.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/layout-child/float.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/layout-child/float.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/layout-child/inflow.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/layout-child/inflow.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/layout-child/inlines-dynamic.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/layout-child/inlines-dynamic.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/layout-child/inlines.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/layout-child/inlines.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/layout-child/text-01.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/layout-child/text-01.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/layout-child/text-02.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/layout-child/text-02.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/position-fragment/htb-ltr.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/position-fragment/htb-ltr.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/position-fragment/htb-rtl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/position-fragment/htb-rtl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/position-fragment/ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/position-fragment/ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/position-fragment/vlr-ltr.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/position-fragment/vlr-ltr.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/position-fragment/vlr-rtl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/position-fragment/vlr-rtl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/position-fragment/vrl-ltr.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/position-fragment/vrl-ltr.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/position-fragment/vrl-rtl.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/position-fragment/vrl-rtl.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-layout-api/constraints/support/constraints-fixed-block-size-quirky-body-iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-layout-api/constraints/support/constraints-fixed-block-size-quirky-body-iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

