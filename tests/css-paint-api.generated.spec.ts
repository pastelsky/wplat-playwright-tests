import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-paint-api/background-image-alpha-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/background-image-alpha-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/background-image-alpha.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/background-image-alpha.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/background-image-multiple-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/background-image-multiple-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/background-image-multiple.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/background-image-multiple.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/background-image-tiled-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/background-image-tiled-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/background-image-tiled.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/background-image-tiled.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/background-repeat-x-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/background-repeat-x-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/background-repeat-x.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/background-repeat-x.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/color-custom-property-animation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/color-custom-property-animation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/color-custom-property-animation.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/color-custom-property-animation.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/column-count-crash.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/column-count-crash.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/custom-property-animation-on-main-thread.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/custom-property-animation-on-main-thread.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/dynamic-import-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/dynamic-import-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/dynamic-import.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/dynamic-import.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-background-image-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-background-image-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-background-image-001.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-background-image-001.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-background-image-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-background-image-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-background-image-002.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-background-image-002.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-background-image-tiled-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-background-image-tiled-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-background-image-tiled-001.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-background-image-tiled-001.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-background-image-tiled-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-background-image-tiled-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-background-image-tiled-002.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-background-image-tiled-002.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-background-image-tiled-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-background-image-tiled-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-background-image-tiled-003.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-background-image-tiled-003.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-border-image-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-border-image-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-border-image-001.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-border-image-001.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-border-image-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-border-image-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-border-image-002.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-border-image-002.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-border-image-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-border-image-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-border-image-003.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-border-image-003.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-border-image-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-border-image-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-border-image-004.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-border-image-004.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-border-image-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-border-image-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-border-image-005.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-border-image-005.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-with-float-size-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-with-float-size-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/geometry-with-float-size.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/geometry-with-float-size.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/idlharness.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/idlharness.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/invalid-image-constructor-error-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/invalid-image-constructor-error-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/invalid-image-constructor-error.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/invalid-image-constructor-error.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/invalid-image-paint-error-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/invalid-image-paint-error-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/invalid-image-paint-error.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/invalid-image-paint-error.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/invalid-image-pending-script-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/invalid-image-pending-script-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/invalid-image-pending-script.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/invalid-image-pending-script.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/no-op-animation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/no-op-animation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/no-op-animation.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/no-op-animation.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/non-registered-property-value.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/non-registered-property-value.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/one-custom-property-animation-half-opaque-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/one-custom-property-animation-half-opaque-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/one-custom-property-animation-half-opaque.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/one-custom-property-animation-half-opaque.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/one-custom-property-animation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/one-custom-property-animation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/one-custom-property-animation.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/one-custom-property-animation.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/overdraw-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/overdraw-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/overdraw.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/overdraw.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint-arguments-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint-arguments-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint-arguments.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint-arguments.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint-function-arguments-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint-function-arguments-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint-function-arguments-var.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint-function-arguments-var.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint-function-arguments.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint-function-arguments.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint-function-this-value.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint-function-this-value.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-canvasFilter-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-canvasFilter-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-canvasFilter.tentative.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-canvasFilter.tentative.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-composite-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-composite-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-composite.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-composite.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-conicGradient-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-conicGradient-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-conicGradient.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-conicGradient.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-filter-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-filter-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-filter.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-filter.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-gradient-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-gradient-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-gradient.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-gradient.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-image-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-image-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-image.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-image.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-paths-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-paths-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-paths.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-paths.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-rects-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-rects-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-rects.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-rects.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-reset-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-reset-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-reset.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-reset.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-roundRect-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-roundRect-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-roundRect.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-roundRect.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-shadows-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-shadows-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-shadows.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-shadows.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-transform-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-transform-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/paint2d-transform.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/paint2d-transform.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-001.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-001.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-002.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-002.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-003.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-003.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-004.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-004.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-005.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-005.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-006.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-006.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-007.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-007.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-008.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-008.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-009.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-009.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-010.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-010.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-011.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-011.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-012.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-012.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-013.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-013.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-014.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-014.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-015.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-015.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-016.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-016.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-017.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-017.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-018-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-018-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-018.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-018.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-019.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-019.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-020.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-020.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-021.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-021.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-022.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-022.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parse-input-arguments-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parse-input-arguments-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-interpolation-001.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-interpolation-001.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-interpolation-002.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-interpolation-002.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-interpolation-003.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-interpolation-003.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-interpolation-004.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-interpolation-004.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-interpolation-005.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-interpolation-005.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-interpolation-006.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-interpolation-006.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-interpolation-007.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-interpolation-007.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-interpolation-008.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-interpolation-008.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-interpolation-009.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-interpolation-009.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-interpolation-010.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-interpolation-010.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-invalidation-001.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-invalidation-001.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-invalidation-002.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-invalidation-002.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-stylemap.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-stylemap.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-001.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-001.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-002.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-002.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-003.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-003.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-004.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-004.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-005.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-005.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-006.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-006.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-007.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-007.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-008.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-008.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-009.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-009.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-010.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-010.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-011.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-011.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-012.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-012.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-013.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-013.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-014.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-014.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-015.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-015.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-016.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-016.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-017.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-017.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/registered-property-value-018.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/registered-property-value-018.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/roundrect-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/roundrect-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/roundrect.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/roundrect.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/setTransform-001.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/setTransform-001.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/setTransform-002.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/setTransform-002.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/setTransform-003.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/setTransform-003.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/setTransform-004.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/setTransform-004.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/setTransform-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/setTransform-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/style-background-image-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/style-background-image-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/style-background-image.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/style-background-image.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/style-before-pseudo-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/style-before-pseudo-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/style-before-pseudo.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/style-before-pseudo.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/style-first-letter-pseudo-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/style-first-letter-pseudo-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/style-first-letter-pseudo.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/style-first-letter-pseudo.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/top-level-await-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/top-level-await-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/top-level-await.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/top-level-await.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/two-custom-property-animation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/two-custom-property-animation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/two-custom-property-animation.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/two-custom-property-animation.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/two-element-custom-property-animation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/two-element-custom-property-animation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/two-element-custom-property-animation.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/two-element-custom-property-animation.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/two-element-one-custom-property-animation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/two-element-one-custom-property-animation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/two-element-one-custom-property-animation.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/two-element-one-custom-property-animation.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/valid-image-after-load-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/valid-image-after-load-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/valid-image-after-load.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/valid-image-after-load.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/valid-image-before-load-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/valid-image-before-load-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/valid-image-before-load.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/valid-image-before-load.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/hidpi/canvas-transform-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/hidpi/canvas-transform-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/hidpi/canvas-transform.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/hidpi/canvas-transform.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/hidpi/device-pixel-ratio-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/hidpi/device-pixel-ratio-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/hidpi/device-pixel-ratio.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/hidpi/device-pixel-ratio.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-paint-api/parsing/paint-function-valid.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-paint-api/parsing/paint-function-valid.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

