import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-overflow/chrome-body-overflow-propagation-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/chrome-body-overflow-propagation-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/clip-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/clip-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/clip-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/clip-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/clip-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/clip-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/clip-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/clip-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/clip-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/clip-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/clip-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/clip-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/clip-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/clip-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/clip-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/clip-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/clip-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/clip-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/clip-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/clip-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/clip-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/clip-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/clip-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/clip-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/display-flex-svg-overflow-default-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/display-flex-svg-overflow-default-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/display-flex-svg-overflow-default.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/display-flex-svg-overflow-default.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/dynamic-visible-to-clip-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/dynamic-visible-to-clip-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/float-with-relpos-and-transform.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/float-with-relpos-and-transform.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/incremental-scroll-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/incremental-scroll-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/incremental-scroll.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/incremental-scroll.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/input-scrollable-region-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/input-scrollable-region-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/logical-overflow-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/logical-overflow-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/margin-block-end-scroll-area-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/margin-block-end-scroll-area-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/no-scrollable-overflow-vertical-rl-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/no-scrollable-overflow-vertical-rl-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/no-scrollable-overflow-vertical-rl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/no-scrollable-overflow-vertical-rl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/orthogonal-flow-with-inline-end-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/orthogonal-flow-with-inline-end-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/outline-with-opacity-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/outline-with-opacity-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-abpos-transform.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-abpos-transform.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-auto-scrollbar-gutter-intrinsic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-auto-scrollbar-gutter-intrinsic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-auto-scrollbar-gutter-intrinsic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-auto-scrollbar-gutter-intrinsic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-auto-scrollbar-gutter-intrinsic-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-auto-scrollbar-gutter-intrinsic-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-auto-scrollbar-gutter-intrinsic-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-auto-scrollbar-gutter-intrinsic-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-auto-scrollbar-gutter-intrinsic-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-auto-scrollbar-gutter-intrinsic-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-auto-scrollbar-gutter-intrinsic-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-auto-scrollbar-gutter-intrinsic-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-body-propagation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-body-propagation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-body-propagation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-body-propagation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-body-propagation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-body-propagation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-body-propagation-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-body-propagation-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-body-propagation-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-body-propagation-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-body-propagation-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-body-propagation-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-body-propagation-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-body-propagation-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-body-propagation-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-body-propagation-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-body-propagation-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-body-propagation-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-body-propagation-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-body-propagation-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-body-propagation-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-body-propagation-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-body-propagation-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-body-propagation-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-body-propagation-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-body-propagation-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-body-propagation-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-body-propagation-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-body-propagation-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-body-propagation-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-body-propagation-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-body-propagation-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-canvas-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-canvas-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-canvas.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-canvas.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-001-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-001-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-002-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-002-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-cant-scroll-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-cant-scroll-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-cant-scroll.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-cant-scroll.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-content-visual-overflow-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-content-visual-overflow-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-content-visual-overflow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-content-visual-overflow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-hit-testing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-hit-testing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-intersection-observer.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-intersection-observer.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-invalidation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-invalidation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-invalidation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-invalidation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-mul-column-border-box-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-mul-column-border-box-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-mul-column-border-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-mul-column-border-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-mul-column-content-box-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-mul-column-content-box-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-mul-column-content-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-mul-column-content-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-mul-column-padding-box-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-mul-column-padding-box-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-mul-column-padding-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-mul-column-padding-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-svg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-svg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-visual-box-and-value-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-visual-box-and-value-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-visual-box-and-value-with-border-radius-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-visual-box-and-value-with-border-radius-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-visual-box-and-value-with-border-radius.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-visual-box-and-value-with-border-radius.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-visual-box-and-value.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-visual-box-and-value.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-visual-box-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-visual-box-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-margin-visual-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-margin-visual-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-scroll-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-scroll-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-x-visible-y-svg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-x-visible-y-svg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-x-visible-y-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-x-visible-y-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-y-visible-x-svg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-y-visible-x-svg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-clip-y-visible-x-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-clip-y-visible-x-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-codependent-scrollbars.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-codependent-scrollbars.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-ellipsis-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-ellipsis-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-empty-child-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-empty-child-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-hidden-resize-with-stacking-context-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-hidden-resize-with-stacking-context-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-img-border-radius.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-img-border-radius.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-img-display-table-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-img-display-table-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-img-display-table.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-img-display-table.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-img-object-position-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-img-object-position-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-img-object-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-img-object-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-img-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-img-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-img-scroll-non-replaced-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-img-scroll-non-replaced-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-img-scroll-non-replaced.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-img-scroll-non-replaced.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-img-scroll-replaced-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-img-scroll-replaced-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-img-scroll-replaced.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-img-scroll-replaced.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-img-svg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-img-svg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-img-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-img-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-img.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-img.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-inline-block-with-opacity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-inline-block-with-opacity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-inline-transform-relative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-inline-transform-relative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-negative-margin-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-negative-margin-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-negative-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-negative-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-no-frameset-propagation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-no-frameset-propagation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-overlay-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-overlay-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-overlay.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-overlay.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-recalc-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-recalc-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-replaced-element-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-replaced-element-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-scroll-big-border-small-content-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-scroll-big-border-small-content-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-scroll-big-border-small-content.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-scroll-big-border-small-content.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-scroll-intrinsic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-scroll-intrinsic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-scroll-intrinsic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-scroll-intrinsic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-scroll-resize-visibility-hidden-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-scroll-resize-visibility-hidden-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-scroll-resize-visibility-hidden.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-scroll-resize-visibility-hidden.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-shorthand-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-shorthand-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-video-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-video-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overflow-video.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overflow-video.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/overfow-outside-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/overfow-outside-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/paint-containment-svg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/paint-containment-svg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/paint-containment-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/paint-containment-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/resizer-no-size-change.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/resizer-no-size-change.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/resizer-transform.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/resizer-transform.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scroll-overflow-padding-block-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scroll-overflow-padding-block-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-float.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-input-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-input-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-input-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-input-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-input-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-input-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-input-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-input-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-self-collapsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-self-collapsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-textarea.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-textarea.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-transform-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-transform-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-transform-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-transform-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-transform-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-transform-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-transform-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-transform-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-transform-dynamic-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-transform-dynamic-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-transform-dynamic-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-transform-dynamic-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-transform-dynamic-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-transform-dynamic-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-transform-dynamic-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-transform-dynamic-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-transform-dynamic-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-transform-dynamic-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-vertical-rl-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-vertical-rl-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollable-overflow-zero-one-axis.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollable-overflow-zero-one-axis.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-empty-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-empty-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-empty-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-empty-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-abspos-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-abspos-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-abspos-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-abspos-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-dynamic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-dynamic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-propagation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-propagation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-propagation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-propagation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-propagation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-propagation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-propagation-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-propagation-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-propagation-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-propagation-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-propagation-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-propagation-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-propagation-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-propagation-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-rtl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-rtl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-rtl-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-rtl-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-rtl-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-rtl-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-vertical-lr-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-vertical-lr-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-vertical-lr-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-vertical-lr-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-vertical-lr-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-vertical-lr-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-vertical-rl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-vertical-rl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-vertical-rl-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-vertical-rl-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/scrollbar-gutter-vertical-rl-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/scrollbar-gutter-vertical-rl-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/select-size-overflow-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/select-size-overflow-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/select-size-overflow-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/select-size-overflow-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/shrink-to-fit-auto-overflow-relayout-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/shrink-to-fit-auto-overflow-relayout-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/table-header-group-overflow-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/table-header-group-overflow-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/text-overflow-ellipsis-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/text-overflow-ellipsis-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/text-overflow-ellipsis-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/text-overflow-ellipsis-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/text-overflow-ellipsis-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/text-overflow-ellipsis-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/text-overflow-ellipsis-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/text-overflow-ellipsis-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/text-overflow-ellipsis-editing-input-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/text-overflow-ellipsis-editing-input-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/text-overflow-ellipsis-editing-input.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/text-overflow-ellipsis-editing-input.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/text-overflow-ellipsis-rtl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/text-overflow-ellipsis-rtl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/text-overflow-ellipsis-vertical-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/text-overflow-ellipsis-vertical-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/text-overflow-ellipsis-vertical-rtl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/text-overflow-ellipsis-vertical-rtl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/text-overflow-scroll-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/text-overflow-scroll-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/text-overflow-scroll-rtl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/text-overflow-scroll-rtl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/text-overflow-scroll-vertical-lr-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/text-overflow-scroll-vertical-lr-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/text-overflow-scroll-vertical-lr-rtl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/text-overflow-scroll-vertical-lr-rtl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/text-overflow-scroll-vertical-rl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/text-overflow-scroll-vertical-rl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/text-overflow-scroll-vertical-rl-rtl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/text-overflow-scroll-vertical-rl-rtl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-041-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-041-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-042-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-042-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-043.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-043.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-block-in-inline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-block-in-inline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/webkit-line-clamp-with-line-height.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/webkit-line-clamp-with-line-height.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/block-ellipsis-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/block-ellipsis-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/block-ellipsis-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/block-ellipsis-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/continue-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/continue-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/continue-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/continue-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/line-clamp-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/line-clamp-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/line-clamp-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/line-clamp-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/max-lines-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/max-lines-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/max-lines-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/max-lines-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/overflow-clip-margin-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/overflow-clip-margin-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/overflow-clip-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/overflow-clip-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/overflow-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/overflow-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/overflow-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/overflow-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/overflow-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/overflow-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/scrollbar-gutter-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/scrollbar-gutter-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/scrollbar-gutter-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/scrollbar-gutter-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/text-overflow-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/text-overflow-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/text-overflow-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/text-overflow-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/text-overflow-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/text-overflow-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/webkit-line-clamp-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/webkit-line-clamp-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/parsing/webkit-line-clamp-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/parsing/webkit-line-clamp-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/input-scrollable-region-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/input-scrollable-region-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/overflow-body-no-propagation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/overflow-body-no-propagation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/overflow-body-propagation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/overflow-body-propagation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/overflow-ellipsis-dynamic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/overflow-ellipsis-dynamic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/overflow-inline-block-with-opacity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/overflow-inline-block-with-opacity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/overflow-recalc-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/overflow-recalc-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/text-overflow-ellipsis-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/text-overflow-ellipsis-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/text-overflow-ellipsis-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/text-overflow-ellipsis-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/text-overflow-ellipsis-rtl-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/text-overflow-ellipsis-rtl-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/text-overflow-ellipsis-vertical-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/text-overflow-ellipsis-vertical-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/text-overflow-ellipsis-vertical-rtl-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/text-overflow-ellipsis-vertical-rtl-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/text-overflow-scroll-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/text-overflow-scroll-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/text-overflow-scroll-rtl-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/text-overflow-scroll-rtl-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/text-overflow-scroll-vertical-lr-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/text-overflow-scroll-vertical-lr-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/text-overflow-scroll-vertical-lr-rtl-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/text-overflow-scroll-vertical-lr-rtl-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-015-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-015-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-016-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-016-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-017-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-017-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-018-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-018-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-019-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-019-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-020-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-020-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-021-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-021-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-022-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-022-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-023-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-023-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-024-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-024-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-025-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-025-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-026-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-026-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-027-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-027-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-029-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-029-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-030-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-030-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-031-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-031-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-032-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-032-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-035-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-035-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-036-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-036-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-037-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-037-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-038-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-038-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-039-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-039-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-040-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-040-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-block-in-inline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-block-in-inline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-dynamic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-dynamic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-overflow/reference/webkit-line-clamp-with-line-height-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-overflow/reference/webkit-line-clamp-with-line-height-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

