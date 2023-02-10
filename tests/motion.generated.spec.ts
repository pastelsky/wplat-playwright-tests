import { test, expect } from "@playwright/test"; 

 
   test('snapshot motion/change-offset-path.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/change-offset-path.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-anchor-transform-box-fill-box-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-anchor-transform-box-fill-box-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-anchor-transform-box-fill-box-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-anchor-transform-box-fill-box-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-anchor-transform-box-fill-box-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-anchor-transform-box-fill-box-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-anchor-transform-box-fill-box-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-anchor-transform-box-fill-box-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-distance-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-distance-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-distance-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-distance-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-distance-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-distance-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-distance-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-distance-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-distance-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-distance-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-distance-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-distance-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-distance-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-distance-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-distance-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-distance-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-distance-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-distance-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-distance-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-distance-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-geometry-box-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-geometry-box-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-geometry-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-geometry-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-huge-angle-deg-001-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-huge-angle-deg-001-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-huge-angle-grad-001-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-huge-angle-grad-001-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-huge-angle-turn-001-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-huge-angle-turn-001-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-contain-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-contain-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-contain-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-contain-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-contain-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-contain-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-contain-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-contain-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-contain-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-contain-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-contain-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-contain-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-contain-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-contain-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-contain-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-contain-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-contain-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-contain-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-ray-contain-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-ray-contain-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-serialization.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-serialization.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-shape-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-shape-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-shape.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-shape.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-string-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-string-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-string-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-string-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-string-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-string-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-url-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-url-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-path-url.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-path-url.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-rotate-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-rotate-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-rotate-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-rotate-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-rotate-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-rotate-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-rotate-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-rotate-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-rotate-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-rotate-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-rotate-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-rotate-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/offset-supports-calc.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/offset-supports-calc.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/offset-anchor-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/offset-anchor-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/offset-anchor-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/offset-anchor-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/offset-distance-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/offset-distance-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/offset-distance-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/offset-distance-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/offset-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/offset-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/offset-path-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/offset-path-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/offset-path-interpolation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/offset-path-interpolation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/offset-path-interpolation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/offset-path-interpolation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/offset-path-interpolation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/offset-path-interpolation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/offset-path-interpolation-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/offset-path-interpolation-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/offset-path-interpolation-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/offset-path-interpolation-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/offset-position-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/offset-position-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/offset-position-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/offset-position-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/offset-rotate-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/offset-rotate-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/offset-rotate-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/offset-rotate-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-anchor-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-anchor-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-anchor-parsing-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-anchor-parsing-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-anchor-parsing-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-anchor-parsing-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-distance-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-distance-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-distance-parsing-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-distance-parsing-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-distance-parsing-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-distance-parsing-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-parsing-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-parsing-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-parsing-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-parsing-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-path-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-path-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-path-parsing-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-path-parsing-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-path-parsing-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-path-parsing-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-position-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-position-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-position-parsing-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-position-parsing-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-position-parsing-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-position-parsing-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-rotate-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-rotate-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-rotate-parsing-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-rotate-parsing-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-rotate-parsing-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-rotate-parsing-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/parsing/offset-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/parsing/offset-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/reftests/offset-distance-interpolation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/reftests/offset-distance-interpolation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/reftests/offset-path-path-interpolation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/reftests/offset-path-path-interpolation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/reftests/offset-path-path-interpolation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/reftests/offset-path-path-interpolation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/reftests/offset-path-with-transforms-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/reftests/offset-path-with-transforms-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/reftests/offset-path-with-transforms-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/reftests/offset-path-with-transforms-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot motion/animation/reftests/offset-rotate-interpolation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/motion/animation/reftests/offset-rotate-interpolation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

