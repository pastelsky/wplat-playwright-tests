import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-values/absolute-length-units-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/absolute-length-units-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/absolute_length_units.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/absolute_length_units.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/acos-asin-atan-atan2-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/acos-asin-atan-atan2-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/acos-asin-atan-atan2-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/acos-asin-atan-atan2-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/acos-asin-atan-atan2-serialize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/acos-asin-atan-atan2-serialize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/angle-units-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/angle-units-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/angle-units-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/angle-units-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/angle-units-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/angle-units-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/angle-units-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/angle-units-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/angle-units-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/angle-units-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/attr-color-invalid-cast.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/attr-color-invalid-cast.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/attr-color-invalid-fallback.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/attr-color-invalid-fallback.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/attr-color-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/attr-color-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/attr-in-max.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/attr-in-max.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/attr-invalid-type-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/attr-invalid-type-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/attr-invalid-type-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/attr-invalid-type-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/attr-invalid-type-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/attr-invalid-type-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/attr-length-invalid-cast.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/attr-length-invalid-cast.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/attr-length-invalid-fallback.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/attr-length-invalid-fallback.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/attr-length-valid-zero-nofallback.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/attr-length-valid-zero-nofallback.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/attr-length-valid-zero.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/attr-length-valid-zero.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/attr-length-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/attr-length-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/attr-px-invalid-cast.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/attr-px-invalid-cast.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/attr-px-invalid-fallback.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/attr-px-invalid-fallback.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/attr-px-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/attr-px-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-angle-values.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-angle-values.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-background-image-gradient-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-background-image-gradient-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-background-image-gradient-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-background-image-gradient-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-background-linear-gradient-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-background-linear-gradient-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-background-linear-gradient-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-background-linear-gradient-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-background-position-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-background-position-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-background-position-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-background-position-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-background-position-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-background-position-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-background-position-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-background-position-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-background-size-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-background-size-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-background-size-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-background-size-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-border-radius-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-border-radius-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-border-radius-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-border-radius-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-catch-divide-by-0.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-catch-divide-by-0.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-ch-ex-lang-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-ch-ex-lang-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-ch-ex-lang.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-ch-ex-lang.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-height-block-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-height-block-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-height-block-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-height-block-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-height-table-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-height-table-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-height-table-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-height-table-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-in-calc.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-in-calc.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-in-color-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-in-color-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-in-font-feature-settings.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-in-font-feature-settings.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-in-max.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-in-max.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-in-media-queries-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-in-media-queries-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-in-media-queries-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-in-media-queries-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-in-media-queries-with-mixed-units.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-in-media-queries-with-mixed-units.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-infinity-nan-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-infinity-nan-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-infinity-nan-serialize-angle.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-infinity-nan-serialize-angle.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-infinity-nan-serialize-length.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-infinity-nan-serialize-length.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-infinity-nan-serialize-time.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-infinity-nan-serialize-time.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-integer.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-integer.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-invalid-range-clamping.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-invalid-range-clamping.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-letter-spacing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-letter-spacing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-margin-block-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-margin-block-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-margin-block-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-margin-block-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-max-height-block-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-max-height-block-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-max-height-block-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-max-height-block-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-max-width-block-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-max-width-block-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-max-width-block-intrinsic-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-max-width-block-intrinsic-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-max-width-block-intrinsic-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-max-width-block-intrinsic-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-min-height-block-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-min-height-block-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-min-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-min-height.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-min-width-block-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-min-width-block-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-min-width-block-intrinsic-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-min-width-block-intrinsic-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-min-width-block-intrinsic-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-min-width-block-intrinsic-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-nesting-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-nesting-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-nesting.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-nesting.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-numbers.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-numbers.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-offsets-absolute-bottom-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-offsets-absolute-bottom-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-offsets-absolute-left-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-offsets-absolute-left-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-offsets-absolute-right-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-offsets-absolute-right-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-offsets-absolute-top-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-offsets-absolute-top-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-offsets-absolute-top-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-offsets-absolute-top-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-offsets-relative-bottom-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-offsets-relative-bottom-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-offsets-relative-left-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-offsets-relative-left-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-offsets-relative-left-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-offsets-relative-left-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-offsets-relative-right-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-offsets-relative-right-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-offsets-relative-top-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-offsets-relative-top-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-offsets-relative-top-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-offsets-relative-top-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-padding-block-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-padding-block-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-padding-block-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-padding-block-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-parenthesis-stack.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-parenthesis-stack.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-positive-fraction-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-positive-fraction-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-rem-lang-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-rem-lang-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-rem-lang.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-rem-lang.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-rgb-percent-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-rgb-percent-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-rounding-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-rounding-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-rounds-to-integer.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-rounds-to-integer.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-serialization-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-serialization-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-serialization.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-serialization.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-text-indent-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-text-indent-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-text-indent-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-text-indent-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-text-indent-intrinsic-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-text-indent-intrinsic-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-text-indent-intrinsic-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-text-indent-intrinsic-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-time-values.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-time-values.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-transform-origin-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-transform-origin-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-transform-origin-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-transform-origin-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-unit-analysis.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-unit-analysis.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-vertical-align-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-vertical-align-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-vertical-align-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-vertical-align-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-width-block-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-width-block-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-width-block-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-width-block-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-width-block-intrinsic-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-width-block-intrinsic-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-width-block-intrinsic-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-width-block-intrinsic-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-width-table-auto-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-width-table-auto-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-width-table-auto-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-width-table-auto-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-width-table-fixed-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-width-table-fixed-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-width-table-fixed-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-width-table-fixed-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-z-index-fractions-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-z-index-fractions-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/calc-zero-percent-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/calc-zero-percent-height.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/cap-unit-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/cap-unit-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ch-empty-pseudo-recalc-on-font-load.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ch-empty-pseudo-recalc-on-font-load.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ch-pseudo-recalc-on-font-load.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ch-pseudo-recalc-on-font-load.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ch-recalc-on-font-load.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ch-recalc-on-font-load.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ch-unit-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ch-unit-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ch-unit-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ch-unit-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ch-unit-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ch-unit-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ch-unit-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ch-unit-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ch-unit-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ch-unit-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ch-unit-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ch-unit-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ch-unit-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ch-unit-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ch-unit-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ch-unit-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ch-unit-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ch-unit-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ch-unit-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ch-unit-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ch-unit-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ch-unit-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ch-unit-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ch-unit-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/clamp-length-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/clamp-length-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/clamp-length-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/clamp-length-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/clamp-length-serialize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/clamp-length-serialize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/dynamic-viewport-units-rule-cache.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/dynamic-viewport-units-rule-cache.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ex-calc-expression-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ex-calc-expression-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ex-calc-expression-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ex-calc-expression-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ex-unit-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ex-unit-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ex-unit-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ex-unit-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ex-unit-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ex-unit-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ex-unit-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ex-unit-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/exp-log-compute.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/exp-log-compute.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/exp-log-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/exp-log-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/exp-log-serialize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/exp-log-serialize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/getComputedStyle-border-radius-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/getComputedStyle-border-radius-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/getComputedStyle-border-radius-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/getComputedStyle-border-radius-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/getComputedStyle-border-radius-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/getComputedStyle-border-radius-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/hypot-pow-sqrt-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/hypot-pow-sqrt-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/hypot-pow-sqrt-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/hypot-pow-sqrt-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/hypot-pow-sqrt-serialize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/hypot-pow-sqrt-serialize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ic-unit-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ic-unit-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ic-unit-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ic-unit-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ic-unit-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ic-unit-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ic-unit-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ic-unit-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ic-unit-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ic-unit-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ic-unit-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ic-unit-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ic-unit-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ic-unit-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ic-unit-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ic-unit-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ic-unit-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ic-unit-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ic-unit-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ic-unit-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ic-unit-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ic-unit-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ic-unit-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ic-unit-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/integer_interpolation_round_half_towards_positive_infinity_order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/integer_interpolation_round_half_towards_positive_infinity_order.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/integer_interpolation_round_half_towards_positive_infinity_z_index.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/integer_interpolation_round_half_towards_positive_infinity_z_index.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/lh-rlh-on-root-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/lh-rlh-on-root-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/lh-unit-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/lh-unit-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/lh-unit-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/lh-unit-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/lh-unit-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/lh-unit-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/lh-unit-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/lh-unit-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/line-break-ch-unit.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/line-break-ch-unit.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/max-20-arguments.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/max-20-arguments.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/max-length-percent-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/max-length-percent-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/max-unitless-zero-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/max-unitless-zero-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/min-length-percent-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/min-length-percent-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/min-max-percentage-length-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/min-max-percentage-length-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-angle-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-angle-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-angle-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-angle-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-angle-serialize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-angle-serialize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-integer-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-integer-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-length-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-length-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-length-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-length-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-length-percent-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-length-percent-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-length-percent-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-length-percent-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-length-percent-serialize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-length-percent-serialize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-length-serialize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-length-serialize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-number-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-number-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-number-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-number-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-number-serialize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-number-serialize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-percentage-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-percentage-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-percentage-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-percentage-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-percentage-serialize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-percentage-serialize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-time-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-time-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-time-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-time-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/minmax-time-serialize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/minmax-time-serialize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/negative-calc-to-non-negative-integer-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/negative-calc-to-non-negative-integer-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/negative-calc-to-non-negative-integer.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/negative-calc-to-non-negative-integer.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/percentage-rem-low.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/percentage-rem-low.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/q-unit-case-insensitivity-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/q-unit-case-insensitivity-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/q-unit-case-insensitivity-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/q-unit-case-insensitivity-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/rch-invalidation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/rch-invalidation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/rem-root-font-size-restyle-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/rem-root-font-size-restyle-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/rem-root-font-size-restyle-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/rem-root-font-size-restyle-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/rem-unit-root-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/rem-unit-root-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/rex-invalidation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/rex-invalidation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/rgba-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/rgba-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/ric-invalidation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/ric-invalidation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/rlh-invalidation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/rlh-invalidation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/round-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/round-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/round-mod-rem-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/round-mod-rem-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/round-mod-rem-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/round-mod-rem-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/round-mod-rem-serialize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/round-mod-rem-serialize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/signs-abs-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/signs-abs-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/signs-abs-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/signs-abs-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/signs-abs-serialize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/signs-abs-serialize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/sin-cos-tan-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/sin-cos-tan-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/sin-cos-tan-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/sin-cos-tan-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/sin-cos-tan-serialize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/sin-cos-tan-serialize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/update-subpixel-rem-unit.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/update-subpixel-rem-unit.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/vh-calc-support-pct.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/vh-calc-support-pct.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/vh-calc-support.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/vh-calc-support.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/vh-em-inherit.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/vh-em-inherit.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/vh-inherit.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/vh-inherit.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/vh-interpolate-pct.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/vh-interpolate-pct.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/vh-interpolate-px.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/vh-interpolate-px.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/vh-interpolate-vh.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/vh-interpolate-vh.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/vh-support-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/vh-support-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/vh-support-transform-origin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/vh-support-transform-origin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/vh-support-transform-translate.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/vh-support-transform-translate.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/vh-support.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/vh-support.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/vh-zero-support.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/vh-zero-support.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/vh_not_refreshing_on_chrome.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/vh_not_refreshing_on_chrome.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/viewport-relative-lengths-scaled-viewport.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/viewport-relative-lengths-scaled-viewport.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/viewport-unit-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/viewport-unit-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/viewport-units-001-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/viewport-units-001-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/viewport-units-001-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/viewport-units-001-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/viewport-units-after-font-load.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/viewport-units-after-font-load.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/viewport-units-compute.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/viewport-units-compute.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/viewport-units-css2-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/viewport-units-css2-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/viewport-units-invalidation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/viewport-units-invalidation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/viewport-units-keyframes.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/viewport-units-keyframes.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/viewport-units-media-queries.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/viewport-units-media-queries.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/viewport-units-modify.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/viewport-units-modify.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/viewport-units-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/viewport-units-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/viewport-units-writing-mode-font-size-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/viewport-units-writing-mode-font-size-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/viewport-units-writing-mode-font-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/viewport-units-writing-mode-font-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/viewport-units-writing-mode.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/viewport-units-writing-mode.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/animations/calc-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/animations/calc-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/animations/line-height-lh-transition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/animations/line-height-lh-transition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/crashtests/viewport-unit-inline-style-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/crashtests/viewport-unit-inline-style-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/200-200-green.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/200-200-green.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/all-green.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/all-green.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/cap-unit-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/cap-unit-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/ch-unit-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/ch-unit-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/ch-unit-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/ch-unit-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/ch-unit-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/ch-unit-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/ch-unit-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/ch-unit-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/ch-unit-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/ch-unit-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/ch-unit-016-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/ch-unit-016-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/ex-unit-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/ex-unit-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/ex-unit-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/ex-unit-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/ex-unit-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/ex-unit-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/ic-unit-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/ic-unit-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/ic-unit-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/ic-unit-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/ic-unit-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/ic-unit-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/ic-unit-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/ic-unit-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/ic-unit-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/ic-unit-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/ic-unit-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/ic-unit-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/ic-unit-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/ic-unit-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/vh_not_refreshing_on_chrome-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/vh_not_refreshing_on_chrome-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/vh_not_refreshing_on_chrome_iframe-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/vh_not_refreshing_on_chrome_iframe-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/reference/viewport-unit-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/reference/viewport-unit-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/support/mixed-units-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/support/mixed-units-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/support/mixed-units-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/support/mixed-units-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/support/mixed-units-03.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/support/mixed-units-03.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/support/mixed-units-04.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/support/mixed-units-04.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/support/mixed-units-05.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/support/mixed-units-05.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/support/mixed-units-06.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/support/mixed-units-06.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/support/vh-support-transform-origin-iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/support/vh-support-transform-origin-iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/support/vh-support-transform-translate-iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/support/vh-support-transform-translate-iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/support/vh_not_refreshing_on_chrome_iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/support/vh_not_refreshing_on_chrome_iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/urls/empty.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/urls/empty.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/urls/fragment-only.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/urls/fragment-only.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/urls/resolve-relative-to-base.sub.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/urls/resolve-relative-to-base.sub.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-values/urls/resolve-relative-to-stylesheet.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-values/urls/resolve-relative-to-stylesheet.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

