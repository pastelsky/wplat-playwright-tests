import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-properties-values-api/animate-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animate-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/at-property-animation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/at-property-animation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/at-property-cssom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/at-property-cssom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/at-property-non-matching-media-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/at-property-non-matching-media-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/at-property-shadow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/at-property-shadow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/at-property-stylesheets.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/at-property-stylesheets.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/at-property-typedom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/at-property-typedom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/at-property-viewport-units-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/at-property-viewport-units-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/at-property-viewport-units.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/at-property-viewport-units.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/at-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/at-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/conditional-rules.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/conditional-rules.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/determine-registration.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/determine-registration.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/font-size-animation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/font-size-animation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/idlharness.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/idlharness.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/property-cascade.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/property-cascade.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/register-property-syntax-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/register-property-syntax-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/register-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/register-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/registered-properties-inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/registered-properties-inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/registered-property-change-style-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/registered-property-change-style-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/registered-property-computation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/registered-property-computation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/registered-property-crosstalk.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/registered-property-crosstalk.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/registered-property-cssom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/registered-property-cssom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/registered-property-initial.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/registered-property-initial.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/registered-property-revert.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/registered-property-revert.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/self-utils.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/self-utils.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/typedom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/typedom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/unit-cycles.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/unit-cycles.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/url-resolution.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/url-resolution.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/var-reference-registered-properties-cycles.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/var-reference-registered-properties-cycles.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/var-reference-registered-properties.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/var-reference-registered-properties.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-angle-comma-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-angle-comma-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-angle-space-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-angle-space-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-angle.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-angle.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-color-comma-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-color-comma-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-color-space-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-color-space-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-custom-ident.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-custom-ident.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-inherited-used-by-standard-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-inherited-used-by-standard-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-integer-comma-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-integer-comma-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-integer-space-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-integer-space-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-integer.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-integer.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-length-comma-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-length-comma-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-length-percentage-comma-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-length-percentage-comma-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-length-percentage-space-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-length-percentage-space-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-length-percentage.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-length-percentage.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-length-space-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-length-space-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-length.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-length.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-list-type-mismatch.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-list-type-mismatch.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-non-inherited-used-by-standard-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-non-inherited-used-by-standard-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-number-comma-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-number-comma-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-number-space-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-number-space-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-number.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-number.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-percentage-comma-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-percentage-comma-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-percentage-space-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-percentage-space-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-percentage.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-percentage.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-resolution-comma-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-resolution-comma-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-resolution-space-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-resolution-space-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-resolution.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-resolution.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-time-comma-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-time-comma-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-time-space-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-time-space-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-time.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-time.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-transform-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-transform-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-transform-list-multiple-values.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-transform-list-multiple-values.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-transform-list-single-values.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-transform-list-single-values.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-animation-url.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-animation-url.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-angle.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-angle.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-custom-ident.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-custom-ident.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-inherited-used-by-standard-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-inherited-used-by-standard-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-integer.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-integer.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-length-percentage.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-length-percentage.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-length.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-length.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-mismatched-inherited-property-numbers.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-mismatched-inherited-property-numbers.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-mismatched-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-mismatched-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-mismatched-property-numbers.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-mismatched-property-numbers.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-non-inherited-used-by-standard-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-non-inherited-used-by-standard-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-number.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-number.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-percentage.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-percentage.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-resolution.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-resolution.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-time.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-time.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-transform-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-transform-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-transform-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-transform-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/animation/custom-property-transition-url.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/animation/custom-property-transition-url.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-properties-values-api/crashtests/initial-in-audio-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-properties-values-api/crashtests/initial-in-audio-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

