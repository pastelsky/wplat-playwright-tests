import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-masking/idlharness.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/idlharness.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/inheritance.sub.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/inheritance.sub.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/animations/clip-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/animations/clip-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/animations/clip-path-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/animations/clip-path-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/animations/clip-path-interpolation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/animations/clip-path-interpolation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/animations/clip-path-interpolation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/animations/clip-path-interpolation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/animations/clip-path-interpolation-shape.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/animations/clip-path-interpolation-shape.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/animations/mask-image-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/animations/mask-image-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/animations/mask-position-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/animations/mask-position-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-absolute-positioned-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-absolute-positioned-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-absolute-positioned-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-absolute-positioned-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-filter-order-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-filter-order-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-filter-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-filter-order.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-fixed-pos-transform-descendant-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-fixed-pos-transform-descendant-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-fixed-pos-transform-descendant-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-fixed-pos-transform-descendant-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-negative-values-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-negative-values-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-negative-values-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-negative-values-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-negative-values-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-negative-values-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-negative-values-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-negative-values-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-no-clipping-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-no-clipping-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-no-clipping-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-no-clipping-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-no-stacking-context-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-no-stacking-context-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-no-stacking-context.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-no-stacking-context.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-not-absolute-positioned-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-not-absolute-positioned-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-not-absolute-positioned-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-not-absolute-positioned-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-not-absolute-positioned-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-not-absolute-positioned-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-not-absolute-positioned-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-not-absolute-positioned-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-rect-auto-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-rect-auto-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-rect-auto-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-rect-auto-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-rect-auto-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-rect-auto-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-rect-auto-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-rect-auto-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-rect-auto-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-rect-auto-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-rect-auto-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-rect-auto-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-rect-comma-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-rect-comma-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-rect-comma-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-rect-comma-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-rect-comma-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-rect-comma-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-rect-comma-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-rect-comma-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-rect-scroll.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-rect-scroll.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-transform-order-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-transform-order-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/clip-transform-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/clip-transform-order.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-blending-offset-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-blending-offset-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-blending-offset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-blending-offset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-borderBox-1a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-borderBox-1a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-borderBox-1b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-borderBox-1b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-borderBox-1c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-borderBox-1c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-circle-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-circle-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-circle-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-circle-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-circle-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-circle-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-circle-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-circle-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-circle-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-circle-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-circle-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-circle-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-circle-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-circle-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-circle-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-circle-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-columns-shape-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-columns-shape-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-columns-shape-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-columns-shape-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-contentBox-1a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-contentBox-1a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-contentBox-1b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-contentBox-1b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-contentBox-1c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-contentBox-1c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-descendant-text-mutated-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-descendant-text-mutated-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-document-element-will-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-document-element-will-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-document-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-document-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-element-userSpaceOnUse-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-element-userSpaceOnUse-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-element-userSpaceOnUse-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-element-userSpaceOnUse-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-element-userSpaceOnUse-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-element-userSpaceOnUse-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-element-userSpaceOnUse-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-element-userSpaceOnUse-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-ellipse-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-ellipse-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-ellipse-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-ellipse-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-ellipse-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-ellipse-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-ellipse-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-ellipse-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-ellipse-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-ellipse-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-ellipse-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-ellipse-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-ellipse-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-ellipse-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-ellipse-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-ellipse-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-fillBox-1a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-fillBox-1a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-filter-order-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-filter-order-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-filter-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-filter-order.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-filter-radius-clips.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-filter-radius-clips.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-fixed-nested-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-fixed-nested-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-fixed-nested.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-fixed-nested.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-fixed-scroll-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-fixed-scroll-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-fixed-scroll.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-fixed-scroll.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-geometryBox-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-geometryBox-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-geometryBox-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-geometryBox-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-geometryBox-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-geometryBox-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-inline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-inline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-inline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-inline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-inline-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-inline-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-inset-round-percent-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-inset-round-percent-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-inset-round-percent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-inset-round-percent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-localRef-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-localRef-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-localRef-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-localRef-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-marginBox-1a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-marginBox-1a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-mix-blend-mode-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-mix-blend-mode-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-mix-blend-mode-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-mix-blend-mode-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-paddingBox-1a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-paddingBox-1a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-paddingBox-1b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-paddingBox-1b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-paddingBox-1c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-paddingBox-1c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-path-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-path-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-path-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-path-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-path-interpolation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-path-interpolation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-path-interpolation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-path-interpolation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-path-interpolation-with-zoom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-path-interpolation-with-zoom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-path-with-zoom-hittest.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-path-with-zoom-hittest.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-path-with-zoom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-path-with-zoom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-polygon-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-polygon-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-polygon-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-polygon-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-polygon-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-polygon-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-polygon-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-polygon-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-polygon-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-polygon-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-polygon-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-polygon-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-polygon-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-polygon-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-polygon-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-polygon-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-polygon-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-polygon-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-polygon-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-polygon-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-polygon-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-polygon-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-polygon-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-polygon-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-polygon-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-polygon-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-reference-box-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-reference-box-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-reference-box-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-reference-box-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-reference-box-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-reference-box-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-reference-box-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-reference-box-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-reference-restore.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-reference-restore.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-rotated-will-change-transform-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-rotated-will-change-transform-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-rotated-will-change-transform.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-rotated-will-change-transform.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-round-zero-size-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-round-zero-size-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-round-zero-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-round-zero-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-scaled-video-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-scaled-video-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-scaled-video.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-scaled-video.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-scroll.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-scroll.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-shape-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-shape-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-shape-002-units.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-shape-002-units.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-shape-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-shape-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-shape-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-shape-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-shape-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-shape-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-shape-interpolation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-shape-interpolation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-shape-interpolation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-shape-interpolation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-strokeBox-1a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-strokeBox-1a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-strokeBox-1b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-strokeBox-1b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-svg-invalidate-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-svg-invalidate-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-svg-invalidate.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-svg-invalidate.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-svg-text-backdrop-filter-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-svg-text-backdrop-filter-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-svg-text-backdrop-filter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-svg-text-backdrop-filter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-svg-text-font-loading.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-svg-text-font-loading.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-transform-mutated-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-transform-mutated-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-transform-mutated-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-transform-mutated-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-url-reference-change-from-empty.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-url-reference-change-from-empty.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-url-reference-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-url-reference-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-viewBox-1a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-viewBox-1a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-viewBox-1b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-viewBox-1b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/clip-path-viewBox-1c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/clip-path-viewBox-1c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference-local-url-with-base-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference-local-url-with-base-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference-mutated.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference-mutated.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference-nonexisting-existing-local.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference-nonexisting-existing-local.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/svg-clip-path-circle-offset-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/svg-clip-path-circle-offset-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/svg-clip-path-circle-offset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/svg-clip-path-circle-offset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/svg-clip-path-ellipse-offset-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/svg-clip-path-ellipse-offset-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/svg-clip-path-ellipse-offset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/svg-clip-path-ellipse-offset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/svg-clip-path-fixed-values-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/svg-clip-path-fixed-values-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/svg-clip-path-fixed-values.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/svg-clip-path-fixed-values.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-rule/clip-rule-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-rule/clip-rule-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-rule/clip-rule-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-rule/clip-rule-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/hit-test/clip-path-element-objectboundingbox-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/hit-test/clip-path-element-objectboundingbox-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/hit-test/clip-path-element-objectboundingbox-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/hit-test/clip-path-element-objectboundingbox-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/hit-test/clip-path-element-userspaceonuse-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/hit-test/clip-path-element-userspaceonuse-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/hit-test/clip-path-shape-polygon-and-box-shadow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/hit-test/clip-path-shape-polygon-and-box-shadow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-clip-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-clip-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-clip-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-clip-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-clip-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-clip-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-clip-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-clip-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-composite-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-composite-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-composite-1a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-composite-1a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-composite-1b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-composite-1b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-composite-1c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-composite-1c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-composite-1d.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-composite-1d.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-composite-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-composite-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-composite-2a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-composite-2a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-composite-2b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-composite-2b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-composite-2c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-composite-2c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-1a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-1a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-1b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-1b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-1c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-1c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-1d.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-1d.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-3a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-3a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-3b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-3b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-3c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-3c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-3d.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-3d.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-3e.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-3e.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-3f.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-3f.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-3g.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-3g.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-3h.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-3h.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-3i.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-3i.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-4a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-4a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-4b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-4b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-5-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-5-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-5.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-5.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-6-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-6-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-6.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-6.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-clip-exclude-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-clip-exclude-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-clip-exclude.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-clip-exclude.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-data-url-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-data-url-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-ib-split-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-ib-split-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-ib-split.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-ib-split.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-svg-child-will-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-svg-child-will-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-url-image-hash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-url-image-hash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-url-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-url-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-url-local-mask.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-url-local-mask.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-image-url-remote-mask.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-image-url-remote-mask.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-mode-a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-mode-a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-mode-b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-mode-b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-mode-c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-mode-c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-mode-d.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-mode-d.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-mode-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-mode-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-mode-to-mask-type-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-mode-to-mask-type-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-mode-to-mask-type.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-mode-to-mask-type.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-opacity-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-opacity-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-opacity-1a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-opacity-1a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-opacity-1b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-opacity-1b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-opacity-1c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-opacity-1c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-opacity-1d.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-opacity-1d.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-opacity-1e.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-opacity-1e.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-origin-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-origin-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-origin-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-origin-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-origin-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-origin-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-origin-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-origin-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-origin-3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-origin-3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-origin-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-origin-3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-1a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-1a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-1b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-1b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-1c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-1c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-2a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-2a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-2b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-2b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-3a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-3a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-3b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-3b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-4-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-4-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-4a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-4a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-4b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-4b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-4c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-4c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-4d.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-4d.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-5-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-5-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-5.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-5.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-6-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-6-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-6.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-6.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-7-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-7-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-position-7.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-position-7.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-repeat-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-repeat-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-repeat-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-repeat-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-repeat-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-repeat-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-repeat-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-repeat-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-repeat-3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-repeat-3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-repeat-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-repeat-3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-auto-auto.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-auto-auto.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-auto-length-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-auto-length-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-auto-length.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-auto-length.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-auto-percent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-auto-percent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-auto-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-auto-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-auto.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-auto.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-contain-clip-border-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-contain-clip-border-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-contain-clip-border.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-contain-clip-border.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-contain-clip-padding-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-contain-clip-padding-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-contain-clip-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-contain-clip-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-contain-position-fifty-fifty-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-contain-position-fifty-fifty-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-contain-position-fifty-fifty.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-contain-position-fifty-fifty.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-contain-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-contain-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-contain.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-contain.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-cover-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-cover-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-cover.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-cover.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-length-auto.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-length-auto.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-length-length-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-length-length-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-length-length.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-length-length.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-length-percent-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-length-percent-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-length-percent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-length-percent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-length.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-length.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-percent-auto.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-percent-auto.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-percent-length.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-percent-length.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-percent-percent-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-percent-percent-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-percent-percent-stretch-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-percent-percent-stretch-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-percent-percent-stretch.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-percent-percent-stretch.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-percent-percent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-percent-percent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/mask-size-percent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/mask-size-percent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/parsing/clip-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/parsing/clip-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/parsing/clip-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/parsing/clip-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/parsing/clip-path-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/parsing/clip-path-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/parsing/clip-path-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/parsing/clip-path-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/parsing/clip-path-shape-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/parsing/clip-path-shape-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/parsing/clip-path-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/parsing/clip-path-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/parsing/clip-rule-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/parsing/clip-rule-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/parsing/clip-rule-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/parsing/clip-rule-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/parsing/clip-rule-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/parsing/clip-rule-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/parsing/clip-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/parsing/clip-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/parsing/mask-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/parsing/mask-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/parsing/mask-position-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/parsing/mask-position-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/parsing/mask-position-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/parsing/mask-position-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/parsing/mask-type-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/parsing/mask-type-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/parsing/mask-type-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/parsing/mask-type-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/parsing/mask-type-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/parsing/mask-type-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/parsing/mask-valid.sub.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/parsing/mask-valid.sub.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/reference/clip-absolute-positioned-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/reference/clip-absolute-positioned-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/reference/clip-full-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/reference/clip-full-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/reference/clip-horizontal-stripe-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/reference/clip-horizontal-stripe-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/reference/clip-no-clipping-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/reference/clip-no-clipping-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/reference/clip-overflow-hidden-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/reference/clip-overflow-hidden-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/reference/clip-rect-bottom-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/reference/clip-rect-bottom-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/reference/clip-rect-left-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/reference/clip-rect-left-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/reference/clip-rect-right-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/reference/clip-rect-right-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/reference/clip-rect-scroll-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/reference/clip-rect-scroll-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/reference/clip-rect-top-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/reference/clip-rect-top-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip/reference/clip-vertical-stripe-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip/reference/clip-vertical-stripe-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-custom-timing-function-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-custom-timing-function-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-custom-timing-function-reverse.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-custom-timing-function-reverse.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-custom-timing-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-custom-timing-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-filter-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-filter-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-filter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-filter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-fixed-position-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-fixed-position-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-fixed-position-rounding-error-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-fixed-position-rounding-error-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-fixed-position-rounding-error.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-fixed-position-rounding-error.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-fixed-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-fixed-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-fragmented-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-fragmented-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-fragmented.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-fragmented.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-incompatible-shapes1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-incompatible-shapes1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-incompatible-shapes1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-incompatible-shapes1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-incompatible-shapes2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-incompatible-shapes2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-incompatible-shapes2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-incompatible-shapes2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-missing-0-percent-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-missing-0-percent-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-missing-0-percent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-missing-0-percent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-non-keyframe-timing-function-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-non-keyframe-timing-function-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-non-keyframe-timing-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-non-keyframe-timing-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-none-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-none-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-none.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-none.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-overflow-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-overflow-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-overflow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-overflow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-svg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-svg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-svg-zoom-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-svg-zoom-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-svg-zoom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-svg-zoom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-three-keyframes1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-three-keyframes1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-three-keyframes1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-three-keyframes1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-three-keyframes2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-three-keyframes2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-three-keyframes2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-three-keyframes2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-zoom-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-zoom-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation-zoom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation-zoom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-animation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-animation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-transition-custom-timing-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-transition-custom-timing-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-transition-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-transition-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/clip-path-transition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/clip-path-transition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/two-clip-path-animation-diff-length1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/two-clip-path-animation-diff-length1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/two-clip-path-animation-diff-length1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/two-clip-path-animation-diff-length1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/two-clip-path-animation-diff-length2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/two-clip-path-animation-diff-length2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/two-clip-path-animation-diff-length2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/two-clip-path-animation-diff-length2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/two-clip-path-animation-diff-length3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/two-clip-path-animation-diff-length3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/animations/two-clip-path-animation-diff-length3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/animations/two-clip-path-animation-diff-length3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-circle-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-circle-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-circle-3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-circle-3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-circle-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-circle-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-columns-shape-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-columns-shape-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-columns-shape-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-columns-shape-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-descendant-text-mutated-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-descendant-text-mutated-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-document-element-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-document-element-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-ellipse-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-ellipse-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-filter-radius-clips-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-filter-radius-clips-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-path-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-path-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-path-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-path-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-path-interpolation-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-path-interpolation-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-path-interpolation-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-path-interpolation-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-path-interpolation-with-zoom-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-path-interpolation-with-zoom-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-path-with-zoom-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-path-with-zoom-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-rectangle-border-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-rectangle-border-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-rectangle-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-rectangle-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-ref-bottom-green-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-ref-bottom-green-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-ref-right-green-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-ref-right-green-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-reference-box-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-reference-box-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-reference-box-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-reference-box-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-reference-box-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-reference-box-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-reference-box-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-reference-box-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-reference-restore-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-reference-restore-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-scroll-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-scroll-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-shape-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-shape-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-shape-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-shape-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-square-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-square-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-square-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-square-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-stripes-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-stripes-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-stripes-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-stripes-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-stripes-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-stripes-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-transform-mutated-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-transform-mutated-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/clip-path-transform-mutated-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/clip-path-transform-mutated-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/green-100x100.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/green-100x100.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/reference-local-url-with-base-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/reference-local-url-with-base-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/reference-mutated-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/reference-mutated-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-path/reference/reference-nonexisting-existing-local-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-path/reference/reference-nonexisting-existing-local-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/clip-rule/reference/clip-rule-rectangle-border-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/clip-rule/reference/clip-rule-rectangle-border-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/reference/mask-image-data-url-image-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/reference/mask-image-data-url-image-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/reference/mask-image-ib-split-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/reference/mask-image-ib-split-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/reference/mask-image-ib-split-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/reference/mask-image-ib-split-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/reference/mask-image-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/reference/mask-image-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-masking/mask-image/reference/mask-image-svg-child-will-change-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-masking/mask-image/reference/mask-image-svg-child-will-change-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

