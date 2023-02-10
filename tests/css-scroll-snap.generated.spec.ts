import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-scroll-snap/capturing-snap-positions.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/capturing-snap-positions.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/ignore-snap-points-orthogonal-to-snap-axis.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/ignore-snap-points-orthogonal-to-snap-axis.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/nested-scrollIntoView-snaps.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/nested-scrollIntoView-snaps.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/no-red-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/no-red-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/no-snap-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/no-snap-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/overflowing-snap-areas.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/overflowing-snap-areas.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-margin-visibility-check.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-margin-visibility-check.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-on-large-element-not-covering-snapport.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-on-large-element-not-covering-snapport.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-padding-and-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-padding-and-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-snap-root-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-snap-root-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-snap-root-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-snap-root-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-snap-root-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-snap-root-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-snap-root-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-snap-root-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-snap-root-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-snap-root-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-snap-stop-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-snap-stop-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-snap-stop-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-snap-stop-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-snap-stop-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-snap-stop-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-snap-type-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-snap-type-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-snap-type-on-root-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-snap-type-on-root-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-snap-type.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-snap-type.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-target-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-target-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-target-align-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-target-align-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-target-align-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-target-align-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-target-align-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-target-align-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-target-margin-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-target-margin-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-target-margin-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-target-margin-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-target-margin-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-target-margin-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-target-margin-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-target-margin-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-target-margin-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-target-margin-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-target-margin-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-target-margin-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-target-padding-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-target-padding-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-target-padding-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-target-padding-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-target-padding-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-target-padding-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-target-snap-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-target-snap-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-target-snap-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-target-snap-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scroll-target-snap-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scroll-target-snap-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/scrollTo-scrollBy-snaps.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/scrollTo-scrollBy-snaps.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/selection-target.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/selection-target.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-area-capturing-add-scroll-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-area-capturing-add-scroll-container.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-area-capturing-remove-scroll-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-area-capturing-remove-scroll-container.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-at-user-scroll-end.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-at-user-scroll-end.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-inline-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-inline-block.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-intended-direction.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-intended-direction.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-on-focus.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-on-focus.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-to-transformed-target.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-to-transformed-target.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-to-visible-areas-both.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-to-visible-areas-both.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-to-visible-areas-margin-both.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-to-visible-areas-margin-both.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-to-visible-areas-margin-x-axis.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-to-visible-areas-margin-x-axis.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-to-visible-areas-margin-y-axis.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-to-visible-areas-margin-y-axis.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-to-visible-areas-x-axis.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-to-visible-areas-x-axis.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-to-visible-areas-y-axis.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-to-visible-areas-y-axis.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/unreachable-snap-positions-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/unreachable-snap-positions-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/unreachable-snap-positions-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/unreachable-snap-positions-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/input/keyboard.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/input/keyboard.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/input/mouse-wheel.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/input/mouse-wheel.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/input/snap-area-overflow-boundary.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/input/snap-area-overflow-boundary.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-margin-block-inline-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-margin-block-inline-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-margin-block-inline-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-margin-block-inline-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-margin-block-inline-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-margin-block-inline-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-margin-block-inline-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-margin-block-inline-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-margin-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-margin-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-margin-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-margin-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-margin-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-margin-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-margin-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-margin-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-padding-block-inline-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-padding-block-inline-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-padding-block-inline-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-padding-block-inline-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-padding-block-inline-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-padding-block-inline-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-padding-block-inline-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-padding-block-inline-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-padding-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-padding-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-padding-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-padding-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-padding-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-padding-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-padding-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-padding-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-snap-align-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-snap-align-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-snap-align-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-snap-align-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-snap-align-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-snap-align-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-snap-stop-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-snap-stop-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-snap-stop-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-snap-stop-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-snap-stop-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-snap-stop-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-snap-type-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-snap-type-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-snap-type-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-snap-type-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/parsing/scroll-snap-type-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/parsing/scroll-snap-type-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-initial-layout/direction-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-initial-layout/direction-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-initial-layout/scroll-snap-initial-layout-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-initial-layout/scroll-snap-initial-layout-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-initial-layout/scroll-snap-initial-layout-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-initial-layout/scroll-snap-initial-layout-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-initial-layout/scroll-snap-writing-mode-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-initial-layout/scroll-snap-writing-mode-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-initial-layout/scroll-snap-writing-mode-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-initial-layout/scroll-snap-writing-mode-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-initial-layout/snap-after-initial-layout-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-initial-layout/snap-after-initial-layout-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-initial-layout/writing-mode-horizontal-tb.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-initial-layout/writing-mode-horizontal-tb.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-initial-layout/writing-mode-vertical-lr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-initial-layout/writing-mode-vertical-lr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-initial-layout/writing-mode-vertical-rl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-initial-layout/writing-mode-vertical-rl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-relayout/adding-only-snap-area.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-relayout/adding-only-snap-area.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-relayout/adding-snap-area-while-snapped.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-relayout/adding-snap-area-while-snapped.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-relayout/changing-scroll-snap-align.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-relayout/changing-scroll-snap-align.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-relayout/changing-scroll-snap-type-on-root-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-relayout/changing-scroll-snap-type-on-root-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-relayout/changing-scroll-snap-type.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-relayout/changing-scroll-snap-type.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-relayout/focus-element-no-snap.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-relayout/focus-element-no-snap.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-relayout/move-current-target.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-relayout/move-current-target.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-relayout/not-resnap-outside-proximity-threshold.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-relayout/not-resnap-outside-proximity-threshold.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-relayout/remove-current-target.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-relayout/remove-current-target.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-relayout/resnap-to-focused.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-relayout/resnap-to-focused.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/snap-after-relayout/snap-to-different-targets.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/snap-after-relayout/snap-to-different-targets.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/support/scroll-target-align-001-iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/support/scroll-target-align-001-iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/support/scroll-target-margin-001-iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/support/scroll-target-margin-001-iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/support/scroll-target-padding-001-iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/support/scroll-target-padding-001-iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-snap/support/scroll-target-snap-001-iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-snap/support/scroll-target-snap-001-iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

