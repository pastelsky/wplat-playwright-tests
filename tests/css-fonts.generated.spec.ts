import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-fonts/alternates-order-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/alternates-order-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/alternates-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/alternates-order.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/ascent-descent-override-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/ascent-descent-override-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/ascent-descent-override.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/ascent-descent-override.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/calc-in-font-variation-settings.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/calc-in-font-variation-settings.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/cjk-kerning.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/cjk-kerning.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/crash-font-face-invalid-descriptor.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/crash-font-face-invalid-descriptor.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/crash-large-grapheme-cluster.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/crash-large-grapheme-cluster.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/downloadable-font-in-iframe-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/downloadable-font-in-iframe-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/downloadable-font-in-iframe-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/downloadable-font-in-iframe-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/downloadable-font-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/downloadable-font-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/downloadable-font-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/downloadable-font-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/fallback-remote-to-data-url.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/fallback-remote-to-data-url.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/fallback-url-to-local.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/fallback-url-to-local.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/first-available-font-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/first-available-font-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/first-available-font-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/first-available-font-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/first-available-font-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/first-available-font-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/first-available-font-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/first-available-font-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/first-available-font-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/first-available-font-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/first-available-font-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/first-available-font-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/first-available-font-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/first-available-font-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/first-available-font-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/first-available-font-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/first-available-font-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/first-available-font-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/first-available-font-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/first-available-font-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/first-available-font-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/first-available-font-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-colorization-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-colorization-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-colorization.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-colorization.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-default-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-default-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-default-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-default-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-default-02-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-default-02-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-default-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-default-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-default-03-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-default-03-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-default-03.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-default-03.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-default-04-a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-default-04-a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-default-04-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-default-04-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-default-04-c-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-default-04-c-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-default-04.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-default-04.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-local-css-wide-keyword-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-local-css-wide-keyword-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-range-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-range-order.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-stretch-auto-static-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-stretch-auto-static-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-stretch-auto-static.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-stretch-auto-static.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-stretch-auto-variable-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-stretch-auto-variable-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-stretch-auto-variable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-stretch-auto-variable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-stretch-default-variable-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-stretch-default-variable-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-stretch-default-variable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-stretch-default-variable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-style-auto-static-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-style-auto-static-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-style-auto-static.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-style-auto-static.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-style-auto-variable-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-style-auto-variable-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-style-auto-variable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-style-auto-variable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-style-default-variable-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-style-default-variable-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-style-default-variable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-style-default-variable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-unicode-range-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-unicode-range-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-unicode-range-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-unicode-range-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-unicode-range-nbsp-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-unicode-range-nbsp-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-unicode-range-nbsp.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-unicode-range-nbsp.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-unicode-range.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-unicode-range.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-weight-auto-static-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-weight-auto-static-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-weight-auto-static.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-weight-auto-static.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-weight-auto-variable-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-weight-auto-variable-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-weight-auto-variable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-weight-auto-variable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-weight-default-variable-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-weight-default-variable-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-face-weight-default-variable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-face-weight-default-variable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-family-name-025-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-family-name-025-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-family-name-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-family-name-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-family-src-quoted.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-family-src-quoted.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-feature-resolution-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-feature-resolution-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-feature-resolution-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-feature-resolution-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-feature-resolution-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-feature-resolution-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-feature-resolution-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-feature-resolution-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-feature-settings-descriptor-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-feature-settings-descriptor-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-feature-settings-descriptor-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-feature-settings-descriptor-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-feature-settings-serialization-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-feature-settings-serialization-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-feature-settings-tibetan-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-feature-settings-tibetan-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-feature-settings-tibetan.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-feature-settings-tibetan.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-features-across-space-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-features-across-space-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-features-across-space-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-features-across-space-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-features-across-space-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-features-across-space-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-features-across-space-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-features-across-space-3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-kerning-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-kerning-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-kerning-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-kerning-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-kerning-02-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-kerning-02-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-kerning-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-kerning-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-kerning-03-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-kerning-03-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-kerning-03.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-kerning-03.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-kerning-04-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-kerning-04-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-kerning-04.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-kerning-04.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-kerning-05-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-kerning-05-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-kerning-05.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-kerning-05.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-language-override-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-language-override-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-language-override-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-language-override-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-language-override-02-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-language-override-02-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-language-override-02-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-language-override-02-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-language-override-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-language-override-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-language-override-03.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-language-override-03.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-10-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-10-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-10.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-10.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-11-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-11-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-11.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-11.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-12-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-12-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-12.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-12.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-13-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-13-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-13.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-13.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-14-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-14-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-14.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-14.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-15-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-15-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-15.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-15.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-16-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-16-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-16.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-16.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-17-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-17-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-17.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-17.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-18-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-18-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-18.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-18.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-19-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-19-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-19.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-19.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-20-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-20-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-20.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-20.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-21-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-21-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-21.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-21.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-22-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-22-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-22.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-22.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-23-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-23-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-23.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-23.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-24-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-24-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-24.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-24.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-25-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-25-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-25.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-25.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-26-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-26-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-26.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-26.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-27-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-27-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-27.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-27.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-28-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-28-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-28.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-28.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-29-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-29-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-29.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-29.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-3-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-3-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-30-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-30-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-30.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-30.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-31-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-31-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-31.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-31.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-32-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-32-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-32.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-32.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-33-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-33-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-33.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-33.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-34-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-34-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-34.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-34.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-35-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-35-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-35.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-35.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-4-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-4-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-4.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-4.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-5-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-5-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-5.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-5.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-6-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-6-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-6.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-6.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-7-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-7-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-7.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-7.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-8-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-8-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-8.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-8.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-9-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-9-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-9.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-9.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-add-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-add-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-add-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-add-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-add-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-add-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-add.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-add.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-empty-font-family-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-empty-font-family-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-empty-font-family.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-empty-font-family.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-modify-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-modify-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-modify-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-modify-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-modify-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-modify-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-modify.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-modify.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-remove-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-remove-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-remove-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-remove-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-remove-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-remove-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-remove.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-remove.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette-vs-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette-vs-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-palette.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-palette.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-shorthand-serialization-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-shorthand-serialization-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-shorthand-serialization-font-stretch.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-shorthand-serialization-font-stretch.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-shorthand-serialization-prevention.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-shorthand-serialization-prevention.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-shorthand-subproperties-reset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-shorthand-subproperties-reset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-adjust-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-adjust-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-adjust-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-adjust-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-adjust-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-adjust-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-adjust-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-adjust-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-adjust-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-adjust-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-adjust-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-adjust-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-adjust-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-adjust-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-adjust-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-adjust-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-adjust-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-adjust-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-adjust-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-adjust-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-adjust-order-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-adjust-order-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-adjust-order-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-adjust-order-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-adjust-units-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-adjust-units-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-adjust-units-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-adjust-units-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-adjust-zero-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-adjust-zero-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-adjust-zero-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-adjust-zero-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-monospace-adjust-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-monospace-adjust-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-monospace-adjust.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-monospace-adjust.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-relative-across-calc-ff-bug-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-relative-across-calc-ff-bug-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-xxx-large-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-xxx-large-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-xxx-large.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-xxx-large.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-zero-1-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-zero-1-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-zero-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-zero-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-zero-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-zero-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-zero-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-zero-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-size-zero-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-size-zero-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-03.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-03.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-04.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-04.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-05.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-05.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-06.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-06.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-07.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-07.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-08.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-08.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-09.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-09.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-10.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-10.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-11.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-11.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-12.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-12.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-13.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-13.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-14.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-14.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-15.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-15.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-16.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-16.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-17.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-17.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-18.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-18.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-stretch-pass-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-stretch-pass-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-style-angle.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-style-angle.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-02-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-02-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-03-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-03-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-03.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-03.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-04-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-04-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-04.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-04.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-05-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-05-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-05.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-05.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-06-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-06-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-06.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-06.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-07-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-07-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-07.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-07.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-small-caps-first-letter-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-small-caps-first-letter-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-small-caps-first-letter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-small-caps-first-letter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-small-caps-first-line-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-small-caps-first-line-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-small-caps-first-line.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-small-caps-first-line.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-small-caps-not-applied-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-small-caps-not-applied-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-small-caps-not-applied.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-small-caps-not-applied.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-small-caps-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-small-caps-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-small-caps.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-small-caps.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-style-binary-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-style-binary-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-style-binary.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-style-binary.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-style-first-letter-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-style-first-letter-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-style-first-letter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-style-first-letter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-style-first-line-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-style-first-line-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-style-first-line.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-style-first-line.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-style-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-style-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-style.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-style.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-weight-binary-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-weight-binary-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-weight-binary.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-weight-binary.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-weight-first-letter-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-weight-first-letter-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-weight-first-letter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-weight-first-letter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-weight-first-line-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-weight-first-line-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-weight-first-line.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-weight-first-line.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-weight-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-weight-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-synthesis-weight.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-synthesis-weight.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-02-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-02-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-03-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-03-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-03.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-03.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-04-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-04-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-04.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-04.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-02-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-02-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-03-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-03-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-03.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-03.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-04-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-04-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-04.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-04.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-05-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-05-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-05.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-05.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-06-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-06-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-06.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-06.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-07-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-07-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-07.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-07.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-08-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-08-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-08.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-08.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-09-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-09-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-09.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-09.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-10-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-10-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-10.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-10.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-11-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-11-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-11.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-11.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-12-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-12-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-12.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-12.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-13-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-13-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-13.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-13.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-14-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-14-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-14.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-14.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-15-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-15-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-15.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-15.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-16-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-16-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-16.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-16.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-17-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-17-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-17.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-17.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-18-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-18-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-18.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-18.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-19-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-19-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-19.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-19.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-layers-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-layers-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-layers.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-layers.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-alternates-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-alternates-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-caps-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-caps-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-caps-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-caps-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-caps-02-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-caps-02-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-caps-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-caps-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-caps-03-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-caps-03-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-caps-03.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-caps-03.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-caps-04-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-caps-04-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-caps-04.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-caps-04.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-caps-05-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-caps-05-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-caps-05.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-caps-05.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-caps-06-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-caps-06-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-caps-06.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-caps-06.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-caps-07-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-caps-07-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-caps-07.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-caps-07.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-caps-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-caps-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-caps.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-caps.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-debug.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-debug.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-02-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-02-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-03-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-03-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-03.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-03.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-04-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-04-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-04.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-04.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-05-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-05-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-05.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-05.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-06-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-06-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-06.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-06.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-07-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-07-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-07.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-07.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-08-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-08-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-08.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-08.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-09-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-09-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-09.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-09.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-10-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-10-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-10.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-10.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-east-asian.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-east-asian.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-emoji-1-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-emoji-1-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-emoji-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-emoji-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-emoji-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-emoji-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-emoji-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-emoji-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-02-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-02-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-03-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-03-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-03.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-03.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-04-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-04-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-04.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-04.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-05-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-05-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-05.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-05.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-06-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-06-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-06.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-06.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-07-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-07-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-07.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-07.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-08-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-08-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-08.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-08.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-09-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-09-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-09.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-09.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-10-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-10-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-10.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-10.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-11-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-11-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-11.optional.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-11.optional.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-ligatures.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-ligatures.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-02-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-02-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-03-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-03-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-03.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-03.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-04-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-04-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-04.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-04.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-05-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-05-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-05.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-05.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-06-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-06-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-06.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-06.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-07-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-07-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-07.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-07.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-08-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-08-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-08.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-08.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-09-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-09-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-09.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-09.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-numeric.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-numeric.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-position-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-position-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-position-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-position-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-position-02-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-position-02-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-position-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-position-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-position-03-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-position-03-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-position-03.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-position-03.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-position-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-position-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variant-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variant-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-variation-settings-serialization-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-variation-settings-serialization-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/format-specifiers-variations.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/format-specifiers-variations.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/generic-family-keywords-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/generic-family-keywords-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/generic-family-keywords-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/generic-family-keywords-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/generic-family-keywords-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/generic-family-keywords-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/hiragana-katakana-kerning-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/hiragana-katakana-kerning-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/hiragana-katakana-kerning.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/hiragana-katakana-kerning.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/idlharness.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/idlharness.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/infinite-size-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/infinite-size-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/language-specific-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/language-specific-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/line-gap-override-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/line-gap-override-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/line-gap-override.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/line-gap-override.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/metrics-override-normal-keyword-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/metrics-override-normal-keyword-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/metrics-override-normal-keyword.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/metrics-override-normal-keyword.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/palette-values-rule-add-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/palette-values-rule-add-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/palette-values-rule-add-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/palette-values-rule-add-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/palette-values-rule-add-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/palette-values-rule-add-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/palette-values-rule-add.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/palette-values-rule-add.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/palette-values-rule-delete-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/palette-values-rule-delete-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/palette-values-rule-delete-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/palette-values-rule-delete-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/palette-values-rule-delete-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/palette-values-rule-delete-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/palette-values-rule-delete.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/palette-values-rule-delete.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/quoted-generic-ignored-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/quoted-generic-ignored-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/quoted-generic-ignored.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/quoted-generic-ignored.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/rem-in-monospace-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/rem-in-monospace-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/rem-in-monospace.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/rem-in-monospace.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/rlh-in-monospace-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/rlh-in-monospace-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/rlh-in-monospace.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/rlh-in-monospace.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/size-adjust-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/size-adjust-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/size-adjust-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/size-adjust-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/size-adjust-02-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/size-adjust-02-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/size-adjust-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/size-adjust-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/size-adjust-tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/size-adjust-tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/size-adjust-text-decoration-tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/size-adjust-text-decoration-tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/size-adjust-text-decoration.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/size-adjust-text-decoration.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/size-adjust.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/size-adjust.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-10-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-10-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-10.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-10.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-11-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-11-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-11.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-11.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-12-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-12-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-12.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-12.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-13-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-13-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-13.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-13.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-14-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-14-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-14.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-14.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-15-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-15-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-15.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-15.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-16-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-16-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-16.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-16.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-17-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-17-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-17.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-17.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-18-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-18-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-18.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-18.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-19-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-19-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-19.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-19.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-20-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-20-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-20.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-20.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-3-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-3-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-4-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-4-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-4.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-4.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-5-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-5-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-5.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-5.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-6-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-6-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-6.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-6.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-7-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-7-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-7.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-7.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-8-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-8-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-8.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-8.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-9-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-9-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-9.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-9.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/standard-font-family.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/standard-font-family.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/system-fonts-serialization.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/system-fonts-serialization.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/system-ui-ar-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/system-ui-ar-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/system-ui-ar.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/system-ui-ar.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/system-ui-ja-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/system-ui-ja-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/system-ui-ja-vs-zh.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/system-ui-ja-vs-zh.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/system-ui-ja.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/system-ui-ja.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/system-ui-mixed-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/system-ui-mixed-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/system-ui-mixed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/system-ui-mixed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/system-ui-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/system-ui-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/system-ui-ur-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/system-ui-ur-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/system-ui-ur-vs-ar.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/system-ui-ur-vs-ar.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/system-ui-ur.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/system-ui-ur.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/system-ui-zh-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/system-ui-zh-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/system-ui-zh.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/system-ui-zh.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/system-ui.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/system-ui.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/test-synthetic-italic-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/test-synthetic-italic-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/test-synthetic-italic-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/test-synthetic-italic-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/test-synthetic-italic-3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/test-synthetic-italic-3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/test-synthetic-italic-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/test-synthetic-italic-3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/test_datafont_same_origin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/test_datafont_same_origin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/test_font_family_parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/test_font_family_parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/test_font_feature_values_parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/test_font_feature_values_parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/animations/font-size-adjust-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/animations/font-size-adjust-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/animations/font-size-interpolation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/animations/font-size-interpolation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/animations/font-size-interpolation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/animations/font-size-interpolation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/animations/font-size-interpolation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/animations/font-size-interpolation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/animations/font-stretch-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/animations/font-stretch-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/animations/font-style-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/animations/font-style-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/animations/font-variation-settings-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/animations/font-variation-settings-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/animations/font-variation-settings-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/animations/font-variation-settings-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/animations/system-fonts.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/animations/system-fonts.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-display/font-display-change-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-display/font-display-change-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-display/font-display-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-display/font-display-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-display/font-display-failure-fallback.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-display/font-display-failure-fallback.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-display/font-display-feature-policy-02.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-display/font-display-feature-policy-02.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-display/font-display-feature-policy-02.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-display/font-display-feature-policy-02.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-display/font-display-preload-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-display/font-display-preload-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-display/font-display-preload.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-display/font-display-preload.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-display/font-display-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-display/font-display-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/font-display/font-display.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/font-display/font-display.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/matching/fixed-stretch-style-over-weight-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/matching/fixed-stretch-style-over-weight-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/matching/fixed-stretch-style-over-weight.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/matching/fixed-stretch-style-over-weight.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/matching/range-descriptor-reversed-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/matching/range-descriptor-reversed-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/matching/range-descriptor-reversed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/matching/range-descriptor-reversed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/matching/stretch-distance-over-weight-distance-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/matching/stretch-distance-over-weight-distance-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/matching/stretch-distance-over-weight-distance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/matching/stretch-distance-over-weight-distance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/matching/style-ranges-over-weight-direction-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/matching/style-ranges-over-weight-direction-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/matching/style-ranges-over-weight-direction.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/matching/style-ranges-over-weight-direction.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-depth-001-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-depth-001-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-script-level-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-script-level-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-script-level-002.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-script-level-002.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-script-level-003.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-script-level-003.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-script-level-003.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-script-level-003.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-script-level-004.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-script-level-004.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-002.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-002.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-002.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-002.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-003.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-003.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-003.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-003.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-004.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-004.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-004.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-004.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-005.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-005.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-005.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-script-level-auto-and-math-style-005.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-script-level-font-size-clamping-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-script-level-font-size-clamping-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-script-level-font-size-clamping-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-script-level-font-size-clamping-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/math-script-level-and-math-style/math-style-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/math-script-level-and-math-style/math-style-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-face-src-format.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-face-src-format.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-face-src-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-face-src-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-face-src-local.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-face-src-local.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-face-src-tech.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-face-src-tech.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-family-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-family-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-family-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-family-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-family-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-family-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-feature-settings-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-feature-settings-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-feature-settings-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-feature-settings-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-feature-settings-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-feature-settings-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-kerning-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-kerning-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-kerning-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-kerning-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-kerning-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-kerning-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-language-override-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-language-override-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-language-override-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-language-override-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-language-override-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-language-override-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-optical-sizing-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-optical-sizing-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-optical-sizing-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-optical-sizing-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-optical-sizing-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-optical-sizing-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-palette-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-palette-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-palette-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-palette-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-palette-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-palette-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-palette-values-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-palette-values-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-palette-values-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-palette-values-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-shorthand-variant.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-shorthand-variant.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-size-adjust-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-size-adjust-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-size-adjust-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-size-adjust-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-size-adjust-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-size-adjust-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-size-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-size-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-size-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-size-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-size-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-size-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-stretch-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-stretch-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-stretch-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-stretch-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-stretch-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-stretch-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-style-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-style-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-style-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-style-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-style-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-style-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-synthesis-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-synthesis-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-synthesis-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-synthesis-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-synthesis-small-caps-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-synthesis-small-caps-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-synthesis-small-caps-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-synthesis-small-caps-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-synthesis-style-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-synthesis-style-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-synthesis-style-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-synthesis-style-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-synthesis-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-synthesis-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-synthesis-weight-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-synthesis-weight-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-synthesis-weight-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-synthesis-weight-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-alternates-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-alternates-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-alternates-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-alternates-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-caps-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-caps-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-caps-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-caps-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-caps-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-caps-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-east-asian-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-east-asian-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-east-asian-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-east-asian-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-east-asian-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-east-asian-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-emoji-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-emoji-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-emoji-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-emoji-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-emoji-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-emoji-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-ligatures-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-ligatures-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-ligatures-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-ligatures-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-ligatures-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-ligatures-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-numeric-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-numeric-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-numeric-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-numeric-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-numeric-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-numeric-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-position-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-position-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-position-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-position-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-position-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-position-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-serialization.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-serialization.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variant-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variant-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variation-settings-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variation-settings-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variation-settings-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variation-settings-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-variation-settings-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-variation-settings-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-weight-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-weight-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-weight-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-weight-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/parsing/font-weight-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/parsing/font-weight-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/at-font-face-descriptors.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/at-font-face-descriptors.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/at-font-face-font-matching.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/at-font-face-font-matching.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-descriptor-range-reversed-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-descriptor-range-reversed-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-descriptor-range-reversed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-descriptor-range-reversed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-opentype-collections.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-opentype-collections.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-parse-numeric-stretch-style-weight.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-parse-numeric-stretch-style-weight.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-slant-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-slant-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-slant-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-slant-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-slant-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-slant-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-slant-2a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-slant-2a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-slant-2b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-slant-2b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-stretch.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-stretch.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-style-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-style-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-style-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-style-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-variation-settings-inherit.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-variation-settings-inherit.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-weight-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-weight-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-weight-lighter-bolder.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-weight-lighter-bolder.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-weight-matching-installed-fonts.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-weight-matching-installed-fonts.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-weight-matching.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-weight-matching.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-weight-metrics-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-weight-metrics-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-weight-metrics.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-weight-metrics.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/font-weight-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/font-weight-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/slnt-backslant-variable-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/slnt-backslant-variable-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/slnt-backslant-variable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/slnt-backslant-variable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/slnt-variable-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/slnt-variable-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/slnt-variable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/slnt-variable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/variable-box-font-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/variable-box-font-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/variable-box-font.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/variable-box-font.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/variable-gpos-m2b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/variable-gpos-m2b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/variable-gpos-m2b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/variable-gpos-m2b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/variable-gsub-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/variable-gsub-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/variable-gsub.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/variable-gsub.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/variable-opsz-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/variable-opsz-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/variable-opsz-size-adjust-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/variable-opsz-size-adjust-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/variable-opsz-size-adjust.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/variable-opsz-size-adjust.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-fonts/variations/variable-opsz.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-fonts/variations/variable-opsz.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

