import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-color/009900-image-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/009900-image-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/009900-tagged-image-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/009900-tagged-image-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/a98rgb-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/a98rgb-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/a98rgb-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/a98rgb-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/a98rgb-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/a98rgb-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/a98rgb-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/a98rgb-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/a98rgb-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/a98rgb-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/a98rgb-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/a98rgb-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/at-color-profile-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/at-color-profile-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/background-color-hsl-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/background-color-hsl-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/background-color-hsl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/background-color-hsl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/background-color-hsl-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/background-color-hsl-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/background-color-hsl-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/background-color-hsl-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/background-color-hsl-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/background-color-hsl-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/background-color-hsl-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/background-color-hsl-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/background-color-hsl-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/background-color-hsl-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/background-color-hsl-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/background-color-hsl-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/background-color-rgb-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/background-color-rgb-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/background-color-rgb-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/background-color-rgb-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/background-color-rgb-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/background-color-rgb-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/background-color-rgb-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/background-color-rgb-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/background-color-rgb-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/background-color-rgb-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/background-color-rgb-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/background-color-rgb-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/blacksquare-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/blacksquare-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/blacktext-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/blacktext-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/body-opacity-0-to-1-stacking-context.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/body-opacity-0-to-1-stacking-context.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/canvas-change-opacity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/canvas-change-opacity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/color-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/color-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/color-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/color-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/color-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/color-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/color-contrast-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/color-contrast-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/color-initial-canvastext.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/color-initial-canvastext.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/color-mix-basic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/color-mix-basic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/color-mix-basic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/color-mix-basic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/color-mix-currentcolor-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/color-mix-currentcolor-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/color-mix-currentcolor-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/color-mix-currentcolor-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/color-mix-currentcolor-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/color-mix-currentcolor-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/color-mix-currentcolor-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/color-mix-currentcolor-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/color-mix-non-srgb-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/color-mix-non-srgb-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/color-mix-non-srgb-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/color-mix-non-srgb-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/color-mix-percents-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/color-mix-percents-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/color-mix-percents-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/color-mix-percents-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/color-mix-percents-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/color-mix-percents-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/composited-filters-under-opacity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/composited-filters-under-opacity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/composited-filters-under-opacity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/composited-filters-under-opacity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/currentcolor-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/currentcolor-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/currentcolor-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/currentcolor-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/currentcolor-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/currentcolor-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/currentcolor-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/currentcolor-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-ButtonBorder-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-ButtonBorder-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-ButtonFace-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-ButtonFace-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-Canvas-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-Canvas-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-CanvasText-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-CanvasText-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/deprecated-sameas-GrayText-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/deprecated-sameas-GrayText-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/display-p3-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/display-p3-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/display-p3-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/display-p3-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/display-p3-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/display-p3-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/display-p3-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/display-p3-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/display-p3-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/display-p3-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/display-p3-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/display-p3-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/display-p3-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/display-p3-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/filters-under-will-change-opacity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/filters-under-will-change-opacity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/greensquare-090-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/greensquare-090-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/greensquare-display-p3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/greensquare-display-p3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/greensquare-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/greensquare-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/greentext-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/greentext-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hex-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hex-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hex-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hex-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hex-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hex-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hex-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hex-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hex-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hex-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hsl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hsl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hsl-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hsl-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hsl-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hsl-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hsl-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hsl-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hsl-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hsl-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hsl-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hsl-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hsl-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hsl-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hsl-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hsl-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hsla-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hsla-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hsla-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hsla-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hsla-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hsla-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hsla-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hsla-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hsla-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hsla-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hsla-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hsla-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hsla-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hsla-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hsla-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hsla-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hwb-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hwb-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hwb-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hwb-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hwb-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hwb-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hwb-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hwb-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hwb-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hwb-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hwb-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hwb-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hwb-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hwb-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/hwb-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/hwb-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/inline-opacity-float-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/inline-opacity-float-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lab-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lab-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lab-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lab-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lab-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lab-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lab-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lab-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lab-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lab-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lab-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lab-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lab-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lab-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lab-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lab-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lab-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lab-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lab-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lab-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lab-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lab-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lab-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lab-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lch-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lch-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lch-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lch-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lch-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lch-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lch-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lch-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lch-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lch-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lch-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lch-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lch-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lch-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lch-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lch-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lch-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lch-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lch-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lch-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lch-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lch-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lch-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lch-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lch-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lch-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/lch-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/lch-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/mossgreensquare-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/mossgreensquare-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/named-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/named-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/nested-color-mix-with-currentcolor.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/nested-color-mix-with-currentcolor.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklab-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklab-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklab-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklab-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklab-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklab-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklab-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklab-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklab-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklab-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklab-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklab-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklab-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklab-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklab-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklab-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklab-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklab-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklab-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklab-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklab-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklab-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklab-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklab-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklch-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklch-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklch-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklch-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklch-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklch-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklch-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklch-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklch-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklch-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklch-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklch-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklch-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklch-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklch-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklch-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklch-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklch-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklch-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklch-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklch-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklch-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklch-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklch-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklch-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklch-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/oklch-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/oklch-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/opacity-overlapping-letters-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/opacity-overlapping-letters-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/opacity-overlapping-letters.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/opacity-overlapping-letters.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/predefined-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/predefined-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/predefined-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/predefined-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/predefined-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/predefined-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/predefined-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/predefined-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/predefined-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/predefined-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/predefined-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/predefined-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/predefined-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/predefined-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/predefined-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/predefined-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/predefined-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/predefined-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/predefined-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/predefined-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/predefined-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/predefined-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/prophoto-rgb-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/prophoto-rgb-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/prophoto-rgb-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/prophoto-rgb-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/prophoto-rgb-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/prophoto-rgb-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/prophoto-rgb-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/prophoto-rgb-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/prophoto-rgb-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/prophoto-rgb-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/prophoto-rgb-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/prophoto-rgb-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/prophoto-rgb-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/prophoto-rgb-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rebeccapurple-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rebeccapurple-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rec2020-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rec2020-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rec2020-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rec2020-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rec2020-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rec2020-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rec2020-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rec2020-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rec2020-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rec2020-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rec2020-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rec2020-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rec2020-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rec2020-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rgb-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rgb-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rgb-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rgb-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rgb-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rgb-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rgb-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rgb-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rgb-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rgb-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rgb-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rgb-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rgb-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rgb-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rgb-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rgb-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rgba-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rgba-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rgba-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rgba-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rgba-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rgba-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rgba-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rgba-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rgba-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rgba-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rgba-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rgba-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rgba-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rgba-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/rgba-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/rgba-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/srgb-linear-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/srgb-linear-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/srgb-linear-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/srgb-linear-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/srgb-linear-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/srgb-linear-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/srgb-linear-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/srgb-linear-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/srgb-linear-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/srgb-linear-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/srgb-linear-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/srgb-linear-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/system-color-compute.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/system-color-compute.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/system-color-consistency.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/system-color-consistency.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t31-color-currentColor-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t31-color-currentColor-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t32-opacity-basic-0.0-a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t32-opacity-basic-0.0-a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t32-opacity-basic-0.6-a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t32-opacity-basic-0.6-a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t32-opacity-basic-1.0-a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t32-opacity-basic-1.0-a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t32-opacity-clamping-1.0-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t32-opacity-clamping-1.0-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t32-opacity-offscreen-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t32-opacity-offscreen-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t32-opacity-offscreen-multiple-boxes-1-c-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t32-opacity-offscreen-multiple-boxes-1-c-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t32-opacity-offscreen-multiple-boxes-2-c-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t32-opacity-offscreen-multiple-boxes-2-c-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t32-opacity-offscreen-with-alpha-c-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t32-opacity-offscreen-with-alpha-c-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t32-opacity-zorder-c-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t32-opacity-zorder-c-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t41-html4-keywords-a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t41-html4-keywords-a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t421-rgb-clip-outside-gamut-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t421-rgb-clip-outside-gamut-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t421-rgb-hex3-expand-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t421-rgb-hex3-expand-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t421-rgb-values-meaning-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t421-rgb-values-meaning-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t422-rgba-a1.0-a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t422-rgba-a1.0-a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t422-rgba-clamping-a0.0-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t422-rgba-clamping-a0.0-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t422-rgba-clamping-a1.0-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t422-rgba-clamping-a1.0-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t422-rgba-clip-outside-device-gamut-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t422-rgba-clip-outside-device-gamut-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t422-rgba-func-int-a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t422-rgba-func-int-a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t422-rgba-func-no-mixed-f-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t422-rgba-func-no-mixed-f-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t422-rgba-func-whitespace-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t422-rgba-func-whitespace-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t422-rgba-values-meaning-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t422-rgba-values-meaning-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t423-transparent-2-a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t423-transparent-2-a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-basic-a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-basic-a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-clip-outside-gamut-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-clip-outside-gamut-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-h-rotating-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-h-rotating-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-parsing-f-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-parsing-f-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-10-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-10-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-10.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-10.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-11-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-11-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-11.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-11.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-12-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-12-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-12.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-12.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-13-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-13-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-13.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-13.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-14-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-14-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-14.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-14.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-15-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-15-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-15.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-15.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-4-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-4-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-4.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-4.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-5-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-5-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-5.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-5.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-6-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-6-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-6.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-6.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-7-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-7-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-7.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-7.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-8-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-8-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-8.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-8.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-9-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-9-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t424-hsl-values-b-9.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t424-hsl-values-b-9.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t425-hsla-basic-a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t425-hsla-basic-a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t425-hsla-clip-outside-device-gamut-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t425-hsla-clip-outside-device-gamut-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t425-hsla-h-rotating-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t425-hsla-h-rotating-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t425-hsla-values-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t425-hsla-values-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t43-svg-keywords-a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t43-svg-keywords-a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t44-currentcolor-background-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t44-currentcolor-background-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/t44-currentcolor-border-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/t44-currentcolor-border-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/tagged-images-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/tagged-images-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/tagged-images-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/tagged-images-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/tagged-images-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/tagged-images-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/tagged-images-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/tagged-images-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/untagged-images-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/untagged-images-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/whitesquare-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/whitesquare-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/whitetext-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/whitetext-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-d50-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-d50-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-d50-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-d50-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-d50-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-d50-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-d50-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-d50-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-d50-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-d50-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-d50-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-d50-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-d50-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-d50-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-d65-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-d65-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-d65-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-d65-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-d65-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-d65-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-d65-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-d65-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-d65-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-d65-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-d65-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-d65-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/xyz-d65-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/xyz-d65-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/yellowsquare-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/yellowsquare-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/animation/color-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/animation/color-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/animation/color-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/animation/color-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/animation/opacity-animation-ending-correctly-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/animation/opacity-animation-ending-correctly-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/animation/opacity-animation-ending-correctly-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/animation/opacity-animation-ending-correctly-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/animation/opacity-animation-ending-correctly-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/animation/opacity-animation-ending-correctly-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/animation/opacity-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/animation/opacity-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-computed-color-contrast-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-computed-color-contrast-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-computed-color-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-computed-color-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-computed-color-mix-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-computed-color-mix-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-computed-hex-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-computed-hex-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-computed-hsl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-computed-hsl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-computed-hwb.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-computed-hwb.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-computed-lab.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-computed-lab.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-computed-named-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-computed-named-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-computed-relative-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-computed-relative-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-computed-rgb.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-computed-rgb.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-invalid-color-contrast-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-invalid-color-contrast-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-invalid-color-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-invalid-color-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-invalid-color-mix-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-invalid-color-mix-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-invalid-hex-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-invalid-hex-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-invalid-hsl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-invalid-hsl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-invalid-hwb.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-invalid-hwb.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-invalid-lab.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-invalid-lab.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-invalid-named-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-invalid-named-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-invalid-relative-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-invalid-relative-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-invalid-rgb.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-invalid-rgb.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-valid-color-contrast-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-valid-color-contrast-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-valid-color-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-valid-color-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-valid-color-mix-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-valid-color-mix-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-valid-hsl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-valid-hsl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-valid-hwb.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-valid-hwb.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-valid-lab.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-valid-lab.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-valid-relative-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-valid-relative-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-valid-rgb.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-valid-rgb.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-valid-system-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-valid-system-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/color-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/color-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/opacity-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/opacity-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/opacity-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/opacity-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-color/parsing/opacity-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-color/parsing/opacity-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

