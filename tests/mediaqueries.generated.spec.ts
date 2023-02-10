import { test, expect } from "@playwright/test"; 

 
   test('snapshot mediaqueries/aspect-ratio-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/aspect-ratio-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/aspect-ratio-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/aspect-ratio-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/aspect-ratio-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/aspect-ratio-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/aspect-ratio-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/aspect-ratio-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/aspect-ratio-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/aspect-ratio-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/aspect-ratio-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/aspect-ratio-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/aspect-ratio-serialization.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/aspect-ratio-serialization.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/device-aspect-ratio-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/device-aspect-ratio-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/device-aspect-ratio-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/device-aspect-ratio-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/device-aspect-ratio-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/device-aspect-ratio-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/device-aspect-ratio-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/device-aspect-ratio-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/device-aspect-ratio-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/device-aspect-ratio-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/device-aspect-ratio-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/device-aspect-ratio-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/dynamic-range.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/dynamic-range.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/forced-colors.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/forced-colors.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/match-media-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/match-media-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/media-query-matches-in-iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/media-query-matches-in-iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/min-width-tables-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/min-width-tables-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-calc-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-calc-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-calc-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-calc-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-calc-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-calc-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-calc-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-calc-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-calc-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-calc-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-calc-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-calc-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-calc-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-calc-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-calc-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-calc-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-case-insensitive-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-case-insensitive-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-deprecated-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-deprecated-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-dynamic-empty-children.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-dynamic-empty-children.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-gamut-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-gamut-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-gamut-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-gamut-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-gamut-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-gamut-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-gamut-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-gamut-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-gamut-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-gamut-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-invalid-media-type-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-invalid-media-type-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-invalid-media-type-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-invalid-media-type-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-invalid-media-type-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-invalid-media-type-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-invalid-media-type-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-invalid-media-type-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-invalid-media-type-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-invalid-media-type-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-invalid-media-type-layer-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-invalid-media-type-layer-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-invalid-media-type-layer-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-invalid-media-type-layer-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-negative-range-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-negative-range-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-negative-range-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-negative-range-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-range-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-range-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/mq-unknown-feature-custom-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/mq-unknown-feature-custom-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/navigation-controls.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/navigation-controls.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/negation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/negation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/negation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/negation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/prefers-color-scheme-svg-image-normal-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/prefers-color-scheme-svg-image-normal-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/prefers-color-scheme-svg-image-normal-with-meta-dark-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/prefers-color-scheme-svg-image-normal-with-meta-dark-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/prefers-color-scheme-svg-image-normal-with-meta-dark.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/prefers-color-scheme-svg-image-normal-with-meta-dark.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/prefers-color-scheme-svg-image-normal-with-meta-light-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/prefers-color-scheme-svg-image-normal-with-meta-light-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/prefers-color-scheme-svg-image-normal-with-meta-light.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/prefers-color-scheme-svg-image-normal-with-meta-light.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/prefers-color-scheme-svg-image-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/prefers-color-scheme-svg-image-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/prefers-color-scheme-svg-image-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/prefers-color-scheme-svg-image-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/prefers-color-scheme-svg-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/prefers-color-scheme-svg-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/prefers-color-scheme.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/prefers-color-scheme.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/prefers-contrast.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/prefers-contrast.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/prefers-reduced-data.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/prefers-reduced-data.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/prefers-reduced-motion.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/prefers-reduced-motion.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/relative-units-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/relative-units-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/relative-units-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/relative-units-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/relative-units-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/relative-units-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/relative-units-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/relative-units-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/relative-units-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/relative-units-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/test_media_queries.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/test_media_queries.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/viewport-script-dynamic-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/viewport-script-dynamic-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/viewport-script-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/viewport-script-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/support/media_queries_iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/support/media_queries_iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot mediaqueries/support/min-width-tables-001-iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/mediaqueries/support/min-width-tables-001-iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

