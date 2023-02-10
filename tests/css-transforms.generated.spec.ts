import { test, expect } from "@playwright/test";


   test('snapshot css-transforms/2d-rotate-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/2d-rotate-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/2d-rotate-js.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/2d-rotate-js.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/2d-rotate-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/2d-rotate-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/2d-rotate-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/2d-rotate-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/3d-rendering-context-and-abspos.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/3d-rendering-context-and-abspos.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/3d-rendering-context-and-fixpos.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/3d-rendering-context-and-fixpos.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/3d-rendering-context-and-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/3d-rendering-context-and-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/3d-rendering-context-and-z-ordering-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/3d-rendering-context-and-z-ordering-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/3d-rendering-context-and-z-ordering-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/3d-rendering-context-and-z-ordering-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/3d-rendering-context-and-z-ordering-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/3d-rendering-context-and-z-ordering-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/3d-rendering-context-behavior.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/3d-rendering-context-behavior.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/3d-scene-with-iframe-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/3d-scene-with-iframe-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/3d-scene-with-iframe-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/3d-scene-with-iframe-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/3dtransform-and-filter-no-perspective-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/3dtransform-and-filter-no-perspective-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/3dtransform-and-filter-no-perspective-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/3dtransform-and-filter-no-perspective-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/3dtransform-and-position-sticky-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/3dtransform-and-position-sticky-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/3dtransform-and-position-sticky-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/3dtransform-and-position-sticky-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/3dtransform-and-position-sticky-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/3dtransform-and-position-sticky-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/add-child-in-empty-layer-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/add-child-in-empty-layer-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/add-child-in-empty-layer.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/add-child-in-empty-layer.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-001.ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-001.ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-hidden-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-hidden-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-hidden-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-hidden-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-hidden-002.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-hidden-002.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-hidden-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-hidden-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-hidden-003.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-hidden-003.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-hidden-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-hidden-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-hidden-004.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-hidden-004.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-hidden-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-hidden-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-hidden-005.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-hidden-005.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-hidden-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-hidden-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-hidden-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-hidden-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-hidden-animated-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-hidden-animated-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-hidden-animated-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-hidden-animated-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-hidden-animated-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-hidden-animated-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-hidden-child-translate.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-hidden-child-translate.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-hidden-child-will-change-transform.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-hidden-child-will-change-transform.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/backface-visibility-with-sibling-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/backface-visibility-with-sibling-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/change-perspective-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/change-perspective-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/change-scale-wide-range-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/change-scale-wide-range-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/change-scale-wide-range.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/change-scale-wide-range.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/change-transform-origin-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/change-transform-origin-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/composited-under-rotateY-180deg-clip-perspective-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/composited-under-rotateY-180deg-clip-perspective-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/composited-under-rotateY-180deg-clip-perspective.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/composited-under-rotateY-180deg-clip-perspective.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/composited-under-rotateY-180deg-clip-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/composited-under-rotateY-180deg-clip-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/composited-under-rotateY-180deg-clip.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/composited-under-rotateY-180deg-clip.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/composited-under-rotateY-180deg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/composited-under-rotateY-180deg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/composited-under-rotateY-180deg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/composited-under-rotateY-180deg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/containing-block-dynamic-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/containing-block-dynamic-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-rotate-2d-3d-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-rotate-2d-3d-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-rotate-2d-3d-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-rotate-2d-3d-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-scale-nested-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-scale-nested-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-skew-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-skew-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-skew-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-skew-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-skew-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-skew-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-skew-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-skew-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-3d-rotate3d-X-negative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-3d-rotate3d-X-negative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-3d-rotate3d-X-positive.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-3d-rotate3d-X-positive.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-3d-rotate3d-Y-negative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-3d-rotate3d-Y-negative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-3d-rotate3d-Y-positive.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-3d-rotate3d-Y-positive.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-3d-rotate3d-Z-negative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-3d-rotate3d-Z-negative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-3d-rotate3d-Z-positive.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-3d-rotate3d-Z-positive.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-3d-rotateX-negative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-3d-rotateX-negative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-3d-rotateX-positive.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-3d-rotateX-positive.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-3d-rotateY-negative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-3d-rotateY-negative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-3d-rotateY-positive.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-3d-rotateY-positive.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-3d-rotateZ-negative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-3d-rotateZ-negative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-3d-rotateZ-positive.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-3d-rotateZ-positive.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-3d-transform-style.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-3d-transform-style.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-animate-translate-implied-y-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-animate-translate-implied-y-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-animate-translate-implied-y.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-animate-translate-implied-y.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-inherit-rotate.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-inherit-rotate.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-inherit-scale.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-inherit-scale.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-property-existence.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-property-existence.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-scale-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-scale-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-scale-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-scale-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transform-style-evaluation-validation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transform-style-evaluation-validation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transforms-3d-on-anonymous-block-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transforms-3d-on-anonymous-block-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css-transforms-transformlist.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css-transforms-transformlist.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css3-transform-perspective.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css3-transform-perspective.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css3-transform-rotateY-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css3-transform-rotateY-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css3-transform-rotateY.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css3-transform-rotateY.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css3-transform-scale-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css3-transform-scale-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css3-transform-scale-ref-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css3-transform-scale-ref-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/css3-transform-scale.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/css3-transform-scale.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/dynamic-fixed-pos-cb-change-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/dynamic-fixed-pos-cb-change-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/dynamic-fixed-pos-cb-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/dynamic-fixed-pos-cb-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/fractional-scale-gradient-bg-obscure-red-bg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/fractional-scale-gradient-bg-obscure-red-bg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/fractional-scale-gradient-bg-obscure-red-bg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/fractional-scale-gradient-bg-obscure-red-bg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/huge-length-tiny-scale-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/huge-length-tiny-scale-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/huge-length-tiny-scale.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/huge-length-tiny-scale.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/inline-with-filter-and-hidden-backface.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/inline-with-filter-and-hidden-backface.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/large-matrix-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/large-matrix-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/paint-order-with-transform-change-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/paint-order-with-transform-change-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/paint-order-with-transform-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/paint-order-with-transform-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-children-only-abspos.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-children-only-abspos.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-children-only-fixpos.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-children-only-fixpos.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-children-only-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-children-only-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-containing-block-dynamic-1a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-containing-block-dynamic-1a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-containing-block-dynamic-1b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-containing-block-dynamic-1b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-origin-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-origin-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-origin-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-origin-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-origin-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-origin-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-origin-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-origin-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-origin-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-origin-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-origin-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-origin-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-origin-x.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-origin-x.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-origin-xy.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-origin-xy.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-split-by-zero-w-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-split-by-zero-w-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-split-by-zero-w.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-split-by-zero-w.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-svg-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-svg-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-svg-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-svg-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-transforms-equivalence-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-transforms-equivalence-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-transforms-equivalence.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-transforms-equivalence.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-translateZ-0.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-translateZ-0.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-translateZ-negative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-translateZ-negative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-translateZ-positive.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-translateZ-positive.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-untransformable-no-stacking-context-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-untransformable-no-stacking-context-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-untransformable-no-stacking-context.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-untransformable-no-stacking-context.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-zero-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-zero-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-zero-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-zero-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-zero-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-zero-3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/perspective-zero.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/perspective-zero.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve-3d-flat-grouping-properties-containing-block-inline-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve-3d-flat-grouping-properties-containing-block-inline-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve-3d-flat-grouping-properties-containing-block-inline.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve-3d-flat-grouping-properties-containing-block-inline.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve-3d-flat-grouping-properties-containing-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve-3d-flat-grouping-properties-containing-block.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve-3d-flat-grouping-properties.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve-3d-flat-grouping-properties.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-and-filter-no-perspective-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-and-filter-no-perspective-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-and-filter-no-perspective.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-and-filter-no-perspective.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-and-filter-with-perspective-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-and-filter-with-perspective-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-and-filter-with-perspective.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-and-filter-with-perspective.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-and-flattening-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-and-flattening-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-and-flattening-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-and-flattening-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-and-flattening-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-and-flattening-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-and-flattening-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-and-flattening-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-and-flattening-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-and-flattening-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-and-flattening-z-order-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-and-flattening-z-order-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-and-flattening-z-order-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-and-flattening-z-order-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-and-flattening-z-order-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-and-flattening-z-order-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-and-flattening-z-order-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-and-flattening-z-order-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-and-flattening-z-order-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-and-flattening-z-order-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-and-flattening-z-order-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-and-flattening-z-order-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-and-flattening-z-order-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-and-flattening-z-order-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-and-flattening-z-order-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-and-flattening-z-order-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-button-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-button-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-button.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-button.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-nested-perspective-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-nested-perspective-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-nested-perspective.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-nested-perspective.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/preserve3d-overflow-percent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/preserve3d-overflow-percent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate-180-degrees-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate-180-degrees-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate-270-degrees-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate-270-degrees-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate-90-degrees-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate-90-degrees-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotateY-180deg-with-overflow-scroll-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotateY-180deg-with-overflow-scroll-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotateY-180deg-with-overflow-scroll.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotateY-180deg-with-overflow-scroll.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotateY.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotateY.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate_45deg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate_45deg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate_45deg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate_45deg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate_x_45deg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate_x_45deg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate_x_45deg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate_x_45deg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate_y_45deg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate_y_45deg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate_y_45deg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate_y_45deg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotated-clip-under-opacity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotated-clip-under-opacity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale-optional-second-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale-optional-second-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale-transform-overlap-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale-transform-overlap-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale-transform-overlap.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale-transform-overlap.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale-zero-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale-zero-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scalex-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scalex-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scalex.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scalex.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scaley-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scaley-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scaley.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scaley.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scroll-preserve-3d.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scroll-preserve-3d.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scrollable-hidden-3d-transform-z-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scrollable-hidden-3d-transform-z-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scrollable-hidden-3d-transform-z.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scrollable-hidden-3d-transform-z.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scrollable-scroll-3d-transform-z-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scrollable-scroll-3d-transform-z-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scrollable-scroll-3d-transform-z.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scrollable-scroll-3d-transform-z.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/size-change-under-backface-visibility-hidden-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/size-change-under-backface-visibility-hidden-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/size-change-under-backface-visibility-hidden.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/size-change-under-backface-visibility-hidden.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/skew-test1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/skew-test1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/subpixel-perspective-backface-hidden-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/subpixel-perspective-backface-hidden-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/subpixel-perspective-backface-hidden.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/subpixel-perspective-backface-hidden.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/subpixel-perspective-translate-z-0-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/subpixel-perspective-translate-z-0-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/subpixel-perspective-translate-z-0.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/subpixel-perspective-translate-z-0.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/subpixel-transform-changes-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/subpixel-transform-changes-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/subpixel-transform-changes-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/subpixel-transform-changes-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/subpixel-transform-changes-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/subpixel-transform-changes-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/subpixel-transform-changes-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/subpixel-transform-changes-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/text-perspective-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/text-perspective-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-2d-getComputedStyle-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-2d-getComputedStyle-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-3d-fixed-under-fixed-opacity-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-3d-fixed-under-fixed-opacity-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-3d-scales-different-x-y-dynamic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-3d-scales-different-x-y-dynamic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-3d-scales-different-x-y-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-3d-scales-different-x-y-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-3d-scales-different-x-y-dynamic-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-3d-scales-different-x-y-dynamic-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-3d-scales-different-x-y-dynamic-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-3d-scales-different-x-y-dynamic-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-abspos-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-abspos-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-abspos-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-abspos-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-abspos-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-abspos-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-abspos-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-abspos-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-abspos-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-abspos-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-abspos-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-abspos-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-abspos-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-abspos-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-abspos-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-abspos-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-and-individual-transform-properties-computed-style.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-and-individual-transform-properties-computed-style.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-background-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-background-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-background-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-background-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-background-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-background-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-background-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-background-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-background-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-background-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-background-006-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-background-006-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-background-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-background-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-background-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-background-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-background-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-background-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-background-ref-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-background-ref-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-background-ref-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-background-ref-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-blank-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-blank-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-clip-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-clip-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-clip-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-clip-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-compound-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-compound-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-compound-notref-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-compound-notref-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-compound-notref-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-compound-notref-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-compound-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-compound-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-containing-block-dynamic-1a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-containing-block-dynamic-1a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-containing-block-dynamic-1b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-containing-block-dynamic-1b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-descendant-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-descendant-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-descendant-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-descendant-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-display-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-display-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-display-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-display-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-display-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-display-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-display-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-display-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-display-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-display-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-display-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-display-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-fixed-bg-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-fixed-bg-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-fixed-bg-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-fixed-bg-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-fixed-bg-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-fixed-bg-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-fixed-bg-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-fixed-bg-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-fixed-bg-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-fixed-bg-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-fixed-bg-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-fixed-bg-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-fixed-bg-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-fixed-bg-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-fixed-bg-008.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-fixed-bg-008.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-fixed-bg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-fixed-bg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-flattening-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-flattening-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-generated-001-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-generated-001-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-generated-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-generated-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-generated-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-generated-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-generated-002-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-generated-002-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-generated-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-generated-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-generated-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-generated-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-getBoundingClientRect-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-getBoundingClientRect-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-hit-testing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-hit-testing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-iframe-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-iframe-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-iframe-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-iframe-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-image-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-image-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-image-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-image-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-inherit-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-inherit-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-inherit-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-inherit-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-inherit-origin-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-inherit-origin-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-inherit-origin-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-inherit-origin-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-inherit-origin-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-inherit-origin-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-inherit-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-inherit-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-inline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-inline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-inline-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-inline-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-inline-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-inline-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-015-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-015-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-016-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-016-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-017-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-017-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-018-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-018-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-019-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-019-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-input-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-input-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-lime-square-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-lime-square-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-005-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-005-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-008-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-008-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-matrix-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-matrix-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-in-shadow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-in-shadow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-name-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-name-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-name-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-name-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-name-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-name-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-name-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-name-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-name-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-name-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-name-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-name-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-name-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-name-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-name-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-name-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-name-ref-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-name-ref-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-name-ref-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-name-ref-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-name-ref-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-name-ref-3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-ref-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-ref-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin-ref-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin-ref-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-overflow-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-overflow-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-overflow-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-overflow-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-overflow-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-overflow-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-overflow-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-overflow-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-percent-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-percent-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-percent-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-percent-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-percent-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-percent-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-percent-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-percent-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-percent-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-percent-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-percent-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-percent-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-percent-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-percent-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-percent-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-percent-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-percent-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-percent-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-percent-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-percent-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-percent-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-percent-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-percent-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-percent-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-propagate-inherit-boolean-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-propagate-inherit-boolean-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-propagate-inherit-boolean-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-propagate-inherit-boolean-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-root-bg-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-root-bg-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-root-bg-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-root-bg-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-root-bg-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-root-bg-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-root-bg-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-root-bg-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-root-bg-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-root-bg-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-root-bg-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-root-bg-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-rotate-001-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-rotate-001-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-rotate-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-rotate-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-rotate-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-rotate-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-rotate-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-rotate-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-rotate-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-rotate-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-rotate-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-rotate-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-rotate-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-rotate-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-rotate-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-rotate-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-rotate-007-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-rotate-007-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-rotate-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-rotate-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-rotate-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-rotate-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-rounding-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-rounding-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-rounding-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-rounding-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-scale-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-scale-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-scale-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-scale-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-scale-hittest.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-scale-hittest.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-scale-percent-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-scale-percent-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-scale-percent-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-scale-percent-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-scale-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-scale-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-scale-test.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-scale-test.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-scalex-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-scalex-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-scalex-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-scalex-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-scaley-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-scaley-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-scaley-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-scaley-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-singular-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-singular-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-singular-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-singular-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-stacking-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-stacking-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-stacking-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-stacking-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-stacking-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-stacking-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-stacking-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-stacking-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-stresstest-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-stresstest-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-stresstest-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-stresstest-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-001-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-001-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-002-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-002-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-004-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-004-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-005-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-005-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-009-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-009-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-010-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-010-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-011-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-011-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-table-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-table-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-inline-block-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-inline-block-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-inline-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-inline-block.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-inline-table-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-inline-table-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-inline-table.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-inline-table.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-list-item-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-list-item-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-list-item.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-list-item.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-table-caption-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-table-caption-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-table-caption.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-table-caption.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-table-cell-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-table-cell-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-table-cell.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-table-cell.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-table-footer-group-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-table-footer-group-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-table-footer-group.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-table-footer-group.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-table-header-group-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-table-header-group-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-table-header-group.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-table-header-group.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-table-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-table-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-table-row-group-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-table-row-group-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-table-row-group.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-table-row-group.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-table-row-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-table-row-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-table-row.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-table-row.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformable-table.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformable-table.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformed-caption-contains-fixed-position-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformed-caption-contains-fixed-position-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformed-caption-contains-fixed-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformed-caption-contains-fixed-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformed-tbody-contains-fixed-position-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformed-tbody-contains-fixed-position-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformed-tbody-contains-fixed-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformed-tbody-contains-fixed-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformed-td-contains-fixed-position-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformed-td-contains-fixed-position-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformed-td-contains-fixed-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformed-td-contains-fixed-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformed-tfoot-contains-fixed-position-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformed-tfoot-contains-fixed-position-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformed-tfoot-contains-fixed-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformed-tfoot-contains-fixed-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformed-th-contains-fixed-position-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformed-th-contains-fixed-position-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformed-th-contains-fixed-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformed-th-contains-fixed-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformed-thead-contains-fixed-position-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformed-thead-contains-fixed-position-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformed-thead-contains-fixed-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformed-thead-contains-fixed-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformed-tr-contains-fixed-position-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformed-tr-contains-fixed-position-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformed-tr-contains-fixed-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformed-tr-contains-fixed-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformed-tr-percent-height-child-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformed-tr-percent-height-child-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-transformed-tr-percent-height-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-transformed-tr-percent-height-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translate-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translate-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translate-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translate-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translate-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translate-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translate-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translate-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translate-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translate-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translate-background-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translate-background-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translate-background-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translate-background-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translate-background-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translate-background-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translate-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translate-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translatex-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translatex-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translatex-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translatex-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translatex-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translatex-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translatex-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translatex-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translatex-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translatex-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translatex-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translatex-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translatex-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translatex-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translatey-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translatey-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translatey-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translatey-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translatey-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translatey-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translatey-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translatey-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translatey-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translatey-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-translatey-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-translatey-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-backface-visibility-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-backface-visibility-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-backface-visibility-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-backface-visibility-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-backface-visibility-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-backface-visibility-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-backface-visibility-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-backface-visibility-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-backface-visibility-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-backface-visibility-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-backface-visibility-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-backface-visibility-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-backface-visibility-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-backface-visibility-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-backface-visibility-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-backface-visibility-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-image-scale-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-image-scale-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-image-scale-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-image-scale-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-matrix3d-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-matrix3d-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-matrix3d-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-matrix3d-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-matrix3d-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-matrix3d-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-matrix3d-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-matrix3d-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-matrix3d-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-matrix3d-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-matrix3d-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-matrix3d-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-matrix3d-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-matrix3d-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-matrix3d-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-matrix3d-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-matrix3d-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-matrix3d-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-matrix3d-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-matrix3d-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-perspective-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-perspective-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-perspective-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-perspective-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-perspective-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-perspective-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-perspective-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-perspective-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-perspective-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-perspective-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-perspective-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-perspective-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-perspective-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-perspective-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-perspective-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-perspective-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-perspective-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-perspective-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-perspective-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-perspective-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-perspective-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-perspective-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-perspective-origin-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-perspective-origin-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-perspective-origin-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-perspective-origin-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-preserve3d-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-preserve3d-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-preserve3d-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-preserve3d-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-preserve3d-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-preserve3d-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-preserve3d-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-preserve3d-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-preserve3d-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-preserve3d-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-preserve3d-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-preserve3d-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-preserve3d-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-preserve3d-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-preserve3d-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-preserve3d-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-preserve3d-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-preserve3d-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-preserve3d-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-preserve3d-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-preserve3d-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-preserve3d-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-preserve3d-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-preserve3d-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-preserve3d-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-preserve3d-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-preserve3d-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-preserve3d-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-preserve3d-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-preserve3d-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-rotate3d-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-rotate3d-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-rotate3d-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-rotate3d-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-rotatex-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-rotatex-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-rotatex-perspective-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-rotatex-perspective-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-rotatex-perspective-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-rotatex-perspective-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-rotatex-perspective-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-rotatex-perspective-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-rotatex-perspective-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-rotatex-perspective-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-rotatex-perspective-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-rotatex-perspective-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-rotatex-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-rotatex-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-rotatex-transformorigin-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-rotatex-transformorigin-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-rotatex-transformorigin-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-rotatex-transformorigin-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-rotatey-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-rotatey-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-rotatey-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-rotatey-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-scale-001-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-scale-001-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-scale-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-scale-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-scale-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-scale-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-scale-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-scale-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-scale-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-scale-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-scale-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-scale-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-scale-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-scale-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-scale-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-scale-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-scale-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-scale-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-scale-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-scale-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-scale-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-scale-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-sorting-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-sorting-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-sorting-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-sorting-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-sorting-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-sorting-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-sorting-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-sorting-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-sorting-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-sorting-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-sorting-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-sorting-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-sorting-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-sorting-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-translate3d-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-translate3d-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-translate3d-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-translate3d-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-translatez-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-translatez-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-translatez-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-translatez-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform3d-translatez-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform3d-translatez-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform_translate.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform_translate.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform_translate_invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform_translate_invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform_translate_max.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform_translate_max.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform_translate_min.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform_translate_min.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform_translate_neg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform_translate_neg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform_translate_second_omited.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform_translate_second_omited.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform_translate_zero.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform_translate_zero.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transformed-preserve-3d-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transformed-preserve-3d-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transformed-rotateX-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transformed-rotateX-3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transformed-rotateY-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transformed-rotateY-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transforms-rotate-degree-45.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transforms-rotate-degree-45.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transforms-rotate-degree-90.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transforms-rotate-degree-90.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transforms-rotate-translate-scale.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transforms-rotate-translate-scale.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transforms-rotateY-degree-60.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transforms-rotateY-degree-60.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transforms-skewX.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transforms-skewX.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transforms-skewY.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transforms-skewY.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transforms-support-calc.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transforms-support-calc.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate-getComputedStyle.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate-getComputedStyle.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate-optional-second-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate-optional-second-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/ttwf-css-3d-polygon-cycle-mismatch.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/ttwf-css-3d-polygon-cycle-mismatch.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/ttwf-css-3d-polygon-cycle.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/ttwf-css-3d-polygon-cycle.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/ttwf-reftest-rotate.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/ttwf-reftest-rotate.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/ttwf-transform-skewx-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/ttwf-transform-skewx-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/ttwf-transform-skewy-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/ttwf-transform-skewy-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/ttwf-transform-translatex-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/ttwf-transform-translatex-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/ttwf-transform-translatey-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/ttwf-transform-translatey-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/z-index-does-not-apply-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/z-index-does-not-apply-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/z-index-does-not-apply.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/z-index-does-not-apply.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/canvas-webgl-translate-in-animation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/canvas-webgl-translate-in-animation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/canvas-webgl-translate-in-animation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/canvas-webgl-translate-in-animation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/composited-transform.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/composited-transform.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/list-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/list-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/matrix-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/matrix-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/perspective-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/perspective-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/perspective-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/perspective-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/perspective-origin-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/perspective-origin-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/rotate-animation-on-svg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/rotate-animation-on-svg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/rotate-animation-on-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/rotate-animation-on-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/rotate-animation-with-will-change-transform-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/rotate-animation-with-will-change-transform-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/rotate-animation-with-will-change-transform-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/rotate-animation-with-will-change-transform-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/rotate-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/rotate-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/rotate-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/rotate-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/rotate-transform-equivalent-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/rotate-transform-equivalent-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/rotate-transform-equivalent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/rotate-transform-equivalent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/scale-animation-on-svg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/scale-animation-on-svg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/scale-animation-on-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/scale-animation-on-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/scale-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/scale-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/scale-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/scale-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-animated-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-animated-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-computed-value.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-computed-value.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-inline-value.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-inline-value.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-matrix.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-matrix.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-perspective.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-perspective.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-rotate-slerp.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-rotate-slerp.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-rotate.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-rotate.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-scale.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-scale.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-skew.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-skew.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-translate-em.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-translate-em.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-translate.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-translate.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-interpolation-verify-reftests.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-interpolation-verify-reftests.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-matrix-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-matrix-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-origin-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-origin-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-perspective-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-perspective-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-rotate-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-rotate-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-scale-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-scale-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-skew-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-skew-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/transform-translate-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/transform-translate-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/translate-animation-on-svg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/translate-animation-on-svg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/translate-animation-on-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/translate-animation-on-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/translate-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/translate-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/animation/translate-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/animation/translate-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/crashtests/large-scale3d-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/crashtests/large-scale3d-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/crashtests/large-scaley-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/crashtests/large-scaley-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/crashtests/locked-display-transform-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/crashtests/locked-display-transform-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/crashtests/preserve3d-containing-block-inline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/crashtests/preserve3d-containing-block-inline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/crashtests/preserve3d-containing-block-inline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/crashtests/preserve3d-containing-block-inline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/crashtests/preserve3d-containing-br-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/crashtests/preserve3d-containing-br-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/crashtests/preserve3d-containing-br-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/crashtests/preserve3d-containing-br-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/crashtests/preserve3d-inline-hit-test.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/crashtests/preserve3d-inline-hit-test.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/crashtests/preserve3d-scene-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/crashtests/preserve3d-scene-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/crashtests/preserve3d-scene-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/crashtests/preserve3d-scene-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test.skip('snapshot css-transforms/crashtests/transform-marquee-resize-div-image-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/crashtests/transform-marquee-resize-div-image-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/crashtests/w-crossing-zero-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/crashtests/w-crossing-zero-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/crashtests/w-negative-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/crashtests/w-negative-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/crashtests/w-negative-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/crashtests/w-negative-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/crashtests/w-negative-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/crashtests/w-negative-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/crashtests/zero-perspective-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/crashtests/zero-perspective-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/document-styles/svg-document-styles-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/document-styles/svg-document-styles-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/document-styles/svg-document-styles-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/document-styles/svg-document-styles-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/document-styles/svg-document-styles-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/document-styles/svg-document-styles-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/document-styles/svg-document-styles-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/document-styles/svg-document-styles-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/document-styles/svg-document-styles-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/document-styles/svg-document-styles-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/document-styles/svg-document-styles-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/document-styles/svg-document-styles-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/document-styles/svg-document-styles-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/document-styles/svg-document-styles-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/document-styles/svg-document-styles-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/document-styles/svg-document-styles-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/document-styles/svg-document-styles-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/document-styles/svg-document-styles-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/document-styles/svg-document-styles-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/document-styles/svg-document-styles-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/document-styles/svg-document-styles-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/document-styles/svg-document-styles-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/document-styles/svg-document-styles-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/document-styles/svg-document-styles-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/document-styles/svg-document-styles-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/document-styles/svg-document-styles-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/document-styles/svg-document-styles-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/document-styles/svg-document-styles-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/external-styles/svg-external-styles-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/external-styles/svg-external-styles-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/external-styles/svg-external-styles-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/external-styles/svg-external-styles-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/external-styles/svg-external-styles-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/external-styles/svg-external-styles-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/external-styles/svg-external-styles-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/external-styles/svg-external-styles-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/external-styles/svg-external-styles-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/external-styles/svg-external-styles-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/external-styles/svg-external-styles-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/external-styles/svg-external-styles-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/external-styles/svg-external-styles-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/external-styles/svg-external-styles-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/external-styles/svg-external-styles-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/external-styles/svg-external-styles-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/external-styles/svg-external-styles-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/external-styles/svg-external-styles-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/external-styles/svg-external-styles-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/external-styles/svg-external-styles-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/external-styles/svg-external-styles-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/external-styles/svg-external-styles-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/external-styles/svg-external-styles-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/external-styles/svg-external-styles-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/external-styles/svg-external-styles-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/external-styles/svg-external-styles-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/gradientTransform/svg-gradientTransform-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/gradientTransform/svg-gradientTransform-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/gradientTransform/svg-gradientTransform-combination-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/gradientTransform/svg-gradientTransform-combination-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/gradientTransform/svg-gradientTransform-combination-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/gradientTransform/svg-gradientTransform-combination-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-group-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-group-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-group-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-group-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-group-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-group-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-group-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-group-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-group-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-group-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-group-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-group-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-group-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-group-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-group-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-group-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-group-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-group-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-group-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-group-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-group-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-group-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/svg-transform-nested-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/svg-transform-nested-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/change-rotate-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/change-rotate-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/change-scale-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/change-scale-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/change-translate-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/change-translate-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/individual-transform-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/individual-transform-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/individual-transform-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/individual-transform-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/individual-transform-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/individual-transform-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/individual-transform-2a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/individual-transform-2a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/individual-transform-2b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/individual-transform-2b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/individual-transform-2c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/individual-transform-2c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/individual-transform-2d.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/individual-transform-2d.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/individual-transform-2e.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/individual-transform-2e.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/stacking-context-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/stacking-context-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/stacking-context-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/stacking-context-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/translate-fill-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/translate-fill-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/translate-view-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/translate-view-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/inline-styles/svg-inline-styles-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/inline-styles/svg-inline-styles-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/inline-styles/svg-inline-styles-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/inline-styles/svg-inline-styles-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/inline-styles/svg-inline-styles-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/inline-styles/svg-inline-styles-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/inline-styles/svg-inline-styles-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/inline-styles/svg-inline-styles-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/inline-styles/svg-inline-styles-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/inline-styles/svg-inline-styles-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/inline-styles/svg-inline-styles-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/inline-styles/svg-inline-styles-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/inline-styles/svg-inline-styles-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/inline-styles/svg-inline-styles-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/inline-styles/svg-inline-styles-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/inline-styles/svg-inline-styles-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/inline-styles/svg-inline-styles-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/inline-styles/svg-inline-styles-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/inline-styles/svg-inline-styles-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/inline-styles/svg-inline-styles-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/inline-styles/svg-inline-styles-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/inline-styles/svg-inline-styles-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/inline-styles/svg-inline-styles-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/inline-styles/svg-inline-styles-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/inline-styles/svg-inline-styles-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/inline-styles/svg-inline-styles-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/inline-styles/svg-inline-styles-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/inline-styles/svg-inline-styles-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-042.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-042.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-043.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-043.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-044.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-044.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-045.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-045.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-046.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-046.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-047.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-047.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-048.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-048.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-049.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-049.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-050.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-050.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-051.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-051.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-052.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-052.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-053.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-053.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-054.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-054.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-055.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-055.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-056.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-056.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-057.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-057.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-058.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-058.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-059.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-059.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-060.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-060.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-061.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-061.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-062.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-062.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-063.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-063.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-064.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-064.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-065.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-065.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-066.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-066.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-067.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-067.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-068.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-068.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/svg-matrix-069.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/svg-matrix-069.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/backface-visibility-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/backface-visibility-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/backface-visibility-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/backface-visibility-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/backface-visibility-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/backface-visibility-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/perspective-origin-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/perspective-origin-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/perspective-origin-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/perspective-origin-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/perspective-origin-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/perspective-origin-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/rotate-parsing-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/rotate-parsing-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/rotate-parsing-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/rotate-parsing-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/scale-parsing-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/scale-parsing-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/scale-parsing-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/scale-parsing-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/transform-box-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/transform-box-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/transform-box-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/transform-box-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/transform-box-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/transform-box-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/transform-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/transform-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/transform-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/transform-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/transform-origin-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/transform-origin-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/transform-origin-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/transform-origin-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/transform-origin-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/transform-origin-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/transform-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/transform-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/translate-parsing-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/translate-parsing-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/parsing/translate-parsing-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/parsing/translate-parsing-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/patternTransform/svg-patternTransform-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/patternTransform/svg-patternTransform-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/patternTransform/svg-patternTransform-combination-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/patternTransform/svg-patternTransform-combination-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/backface-visibility-hidden-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/backface-visibility-hidden-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/css-scale-nested-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/css-scale-nested-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/css-transform-3d-rotateX-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/css-transform-3d-rotateX-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/css-transform-3d-rotateZ-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/css-transform-3d-rotateZ-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/css-transform-3d-transform-style-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/css-transform-3d-transform-style-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/css-transform-scale-ref-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/css-transform-scale-ref-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/css-transform-scale-ref-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/css-transform-scale-ref-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/css-transforms-3d-anonymous-block-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/css-transforms-3d-anonymous-block-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/css-transforms-transformlist-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/css-transforms-transformlist-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/css3-transform-perspective-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/css3-transform-perspective-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/css3-transform-scale-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/css3-transform-scale-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/green.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/green.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/perspective-origin-reftest.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/perspective-origin-reftest.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/perspective-reftest.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/perspective-reftest.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/rotate-180-degrees-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/rotate-180-degrees-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/rotate-270-degrees-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/rotate-270-degrees-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/rotate-90-degrees-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/rotate-90-degrees-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/rotateY-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/rotateY-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/scale-optional-second-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/scale-optional-second-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/scale-zero-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/scale-zero-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/skew-test1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/skew-test1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/subpixel-transform-changes-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/subpixel-transform-changes-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/subpixel-transform-changes-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/subpixel-transform-changes-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/subpixel-transform-changes-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/subpixel-transform-changes-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/subpixel-transform-changes-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/subpixel-transform-changes-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/transform-origin-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/transform-origin-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/transform-origin-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/transform-origin-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/transform-scale-test-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/transform-scale-test-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/transform-translatex-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/transform-translatex-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/transformed-preserve-3d-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/transformed-preserve-3d-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/transformed-rotateX-3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/transformed-rotateX-3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/transformed-rotateY-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/transformed-rotateY-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/transforms-rotate-degree-45-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/transforms-rotate-degree-45-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/transforms-rotate-degree-90-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/transforms-rotate-degree-90-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/transforms-rotate-translate-scale-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/transforms-rotate-translate-scale-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/transforms-rotateY-degree-60-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/transforms-rotateY-degree-60-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/transforms-skewX-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/transforms-skewX-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/transforms-skewY-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/transforms-skewY-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/translate-optional-second-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/translate-optional-second-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/ttwf-css-3d-polygon-cycle-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/ttwf-css-3d-polygon-cycle-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/ttwf-reftest-rotate-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/ttwf-reftest-rotate-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/ttwf-reftest-transform-skewx-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/ttwf-reftest-transform-skewx-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/ttwf-reftest-transform-skewy-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/ttwf-reftest-transform-skewy-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/ttwf-reftest-transform-translatex-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/ttwf-reftest-transform-translatex-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/reference/ttwf-reftest-transform-translatey-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/reference/ttwf-reftest-transform-translatey-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate/svg-rotate-3args-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate/svg-rotate-3args-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate/svg-rotate-3args-invalid-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate/svg-rotate-3args-invalid-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate/svg-rotate-3args-invalid-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate/svg-rotate-3args-invalid-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate/svg-rotate-3args-invalid-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate/svg-rotate-3args-invalid-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate/svg-rotate-3args-invalid-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate/svg-rotate-3args-invalid-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate/svg-rotate-3args-invalid-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate/svg-rotate-3args-invalid-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate/svg-rotate-angle-45-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate/svg-rotate-angle-45-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate/svg-rotate-angle-45-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate/svg-rotate-angle-45-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate/svg-rotate-angle-45-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate/svg-rotate-angle-45-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate/svg-rotate-angle-90-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate/svg-rotate-angle-90-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate/svg-rotate-angle-90-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate/svg-rotate-angle-90-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate/svg-rotate-angle-90-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate/svg-rotate-angle-90-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate/svg-rotate-angle-90-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate/svg-rotate-angle-90-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate/svg-rotate-angle-90-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate/svg-rotate-angle-90-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale/svg-scale-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale/svg-scale-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale/svg-scale-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale/svg-scale-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale/svg-scale-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale/svg-scale-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale/svg-scale-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale/svg-scale-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale/svg-scale-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale/svg-scale-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale/svg-scale-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale/svg-scale-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale/svg-scale-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale/svg-scale-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale/svg-scale-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale/svg-scale-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale/svg-scale-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale/svg-scale-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale/svg-scale-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale/svg-scale-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale/svg-scale-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale/svg-scale-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale/svg-scale-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale/svg-scale-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale/svg-scale-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale/svg-scale-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale/svg-scale-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale/svg-scale-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale/svg-scale-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale/svg-scale-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale/svg-scale-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale/svg-scale-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/skewX/svg-skewx-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/skewX/svg-skewx-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/skewX/svg-skewx-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/skewX/svg-skewx-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/skewX/svg-skewx-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/skewX/svg-skewx-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/skewX/svg-skewx-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/skewX/svg-skewx-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/skewX/svg-skewx-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/skewX/svg-skewx-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/skewX/svg-skewx-with-units.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/skewX/svg-skewx-with-units.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/skewX/svg-skewxy-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/skewX/svg-skewxy-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/skewY/svg-skewy-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/skewY/svg-skewy-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/skewY/svg-skewy-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/skewY/svg-skewy-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/skewY/svg-skewy-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/skewY/svg-skewy-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/skewY/svg-skewy-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/skewY/svg-skewy-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/skewY/svg-skewy-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/skewY/svg-skewy-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/skewY/svg-skewy-with-units.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/skewY/svg-skewy-with-units.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/support/transform-iframe-001-contents.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/support/transform-iframe-001-contents.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/cssbox-border-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/cssbox-border-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/cssbox-content-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/cssbox-content-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/cssbox-fill-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/cssbox-fill-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/cssbox-initial.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/cssbox-initial.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/cssbox-stroke-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/cssbox-stroke-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/cssbox-view-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/cssbox-view-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/fill-box-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/fill-box-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/fill-box-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/fill-box-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/fill-box-mutation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/fill-box-mutation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/fill-box-mutation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/fill-box-mutation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/svgbox-border-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/svgbox-border-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/svgbox-content-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/svgbox-content-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/svgbox-fill-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/svgbox-fill-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/svgbox-initial.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/svgbox-initial.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/svgbox-stroke-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/svgbox-stroke-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/svgbox-view-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/svgbox-view-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/value-changed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/value-changed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/view-box-mutation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/view-box-mutation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/view-box-mutation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/view-box-mutation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/view-box-mutation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/view-box-mutation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/view-box-nested.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/view-box-nested.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/view-box-viewbox-nested.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/view-box-viewbox-nested.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/view-box-viewbox.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/view-box-viewbox.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/view-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/view-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-list-separation/svg-transform-list-separations-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-list-separation/svg-transform-list-separations-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-list-separation/svg-transform-list-separations-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-list-separation/svg-transform-list-separations-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-list-separation/svg-transform-list-separations-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-list-separation/svg-transform-list-separations-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-list-separation/svg-transform-list-separations-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-list-separation/svg-transform-list-separations-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-list-separation/svg-transform-list-separations-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-list-separation/svg-transform-list-separations-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-list-separation/svg-transform-list-separations-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-list-separation/svg-transform-list-separations-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-list-separation/svg-transform-list-separations-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-list-separation/svg-transform-list-separations-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-list-separation/svg-transform-list-separations-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-list-separation/svg-transform-list-separations-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-list-separation/svg-transform-list-separations-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-list-separation/svg-transform-list-separations-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-list-separation/svg-transform-list-separations-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-list-separation/svg-transform-list-separations-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-list-separation/svg-transform-list-separations-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-list-separation/svg-transform-list-separations-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-cm-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-cm-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-cm-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-cm-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-cm-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-cm-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-cm-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-cm-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-cm-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-cm-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-in-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-in-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-in-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-in-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-in-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-in-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-in-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-in-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-in-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-in-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-pt-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-pt-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-pt-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-pt-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-pt-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-pt-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-pt-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-pt-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-length-pt-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-length-pt-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-042.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-042.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-043.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-043.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-044.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-044.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-045.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-045.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-046.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-046.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-invalid-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-invalid-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-invalid-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-invalid-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-invalid-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-invalid-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-invalid-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-invalid-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-invalid-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-invalid-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-invalid-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-invalid-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-invalid-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-invalid-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-invalid-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-invalid-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-invalid-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-invalid-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-invalid-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-invalid-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-invalid-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-invalid-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/svg-origin-relative-length-invalid-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/svg-origin-relative-length-invalid-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/svg-translate-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/svg-translate-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/svg-translate-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/svg-translate-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/svg-translate-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/svg-translate-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/svg-translate-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/svg-translate-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/svg-translate-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/svg-translate-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/svg-translate-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/svg-translate-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/svg-translate-049.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/svg-translate-049.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/svg-translate-050.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/svg-translate-050.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/svg-translate-051.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/svg-translate-051.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/svg-translate-052.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/svg-translate-052.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/svg-translate-053.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/svg-translate-053.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/svg-translate-054.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/svg-translate-054.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/svg-translate-055.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/svg-translate-055.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/svg-translate-multiple-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/svg-translate-multiple-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/svg-translate-multiple-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/svg-translate-multiple-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/svg-translate-with-units.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/svg-translate-with-units.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/translate-and-transform-attribute-in-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/translate-and-transform-attribute-in-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/translate-and-transform-css-property-in-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/translate-and-transform-css-property-in-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/translate-in-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/translate-in-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/document-styles/reference/svg-document-styles-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/document-styles/reference/svg-document-styles-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/external-styles/reference/svg-external-styles-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/external-styles/reference/svg-external-styles-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/gradientTransform/reference/svg-gradientTransform-combination-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/gradientTransform/reference/svg-gradientTransform-combination-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/gradientTransform/reference/svg-gradientTransform-ex-unit-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/gradientTransform/reference/svg-gradientTransform-ex-unit-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/gradientTransform/reference/svg-gradientTransform-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/gradientTransform/reference/svg-gradientTransform-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/gradientTransform/reference/svg-gradientTransform-relative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/gradientTransform/reference/svg-gradientTransform-relative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/gradientTransform/reference/svg-gradientTransform-transform-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/gradientTransform/reference/svg-gradientTransform-transform-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/reference/svg-green-square-250x250-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/reference/svg-green-square-250x250-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/group/reference/svg-green-square-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/group/reference/svg-green-square-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/animation/individual-transform-combine-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/animation/individual-transform-combine-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/animation/individual-transform-combine.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/animation/individual-transform-combine.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/animation/individual-transform-ordering-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/animation/individual-transform-ordering-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/individual-transform/animation/individual-transform-ordering.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/individual-transform/animation/individual-transform-ordering.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/inline-styles/reference/svg-inline-styles-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/inline-styles/reference/svg-inline-styles-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/reference/svg-matrix-clipped-rect-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/reference/svg-matrix-clipped-rect-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/matrix/reference/svg-matrix-four-color-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/matrix/reference/svg-matrix-four-color-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/patternTransform/reference/svg-patternTransform-combination-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/patternTransform/reference/svg-patternTransform-combination-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/patternTransform/reference/svg-patternTransform-ex-unit-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/patternTransform/reference/svg-patternTransform-ex-unit-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/patternTransform/reference/svg-patternTransform-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/patternTransform/reference/svg-patternTransform-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/patternTransform/reference/svg-patternTransform-relative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/patternTransform/reference/svg-patternTransform-relative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate/reference/svg-rotate-3args-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate/reference/svg-rotate-3args-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate/reference/svg-rotate-angle-45-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate/reference/svg-rotate-angle-45-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/rotate/reference/svg-rotate-angle-90-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/rotate/reference/svg-rotate-angle-90-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/scale/reference/svg-scale-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/scale/reference/svg-scale-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/skewX/reference/svg-skewx-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/skewX/reference/svg-skewx-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/skewX/reference/svg-skewxy-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/skewX/reference/svg-skewxy-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/skewY/reference/svg-skewy-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/skewY/reference/svg-skewy-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/reference/cssbox-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/reference/cssbox-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/reference/greensquare200x200.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/reference/greensquare200x200.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-box/reference/svgbox-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-box/reference/svgbox-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-list-separation/reference/svg-transform-list-separations-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-list-separation/reference/svg-transform-list-separations-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/reference/svg-origin-length-cm-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/reference/svg-origin-length-cm-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/reference/svg-origin-length-in-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/reference/svg-origin-length-in-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/reference/svg-origin-length-pt-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/reference/svg-origin-length-pt-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/reference/svg-origin-length-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/reference/svg-origin-length-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/reference/svg-origin-relative-length-invalid-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/reference/svg-origin-relative-length-invalid-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/transform-origin/reference/svg-origin-relative-length-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/transform-origin/reference/svg-origin-relative-length-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/reference/svg-translate-abs-unit-combinations-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/reference/svg-translate-abs-unit-combinations-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/reference/svg-translate-ex-unit-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/reference/svg-translate-ex-unit-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/reference/svg-translate-multiple-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/reference/svg-translate-multiple-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/reference/svg-translate-multiple-relative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/reference/svg-translate-multiple-relative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/reference/svg-translate-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/reference/svg-translate-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/reference/svg-translate-relative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/reference/svg-translate-relative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/reference/translate-and-transform-attribute-in-svg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/reference/translate-and-transform-attribute-in-svg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/reference/translate-and-transform-css-property-in-svg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/reference/translate-and-transform-css-property-in-svg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot css-transforms/translate/reference/translate-in-svg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transforms/translate/reference/translate-in-svg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })

