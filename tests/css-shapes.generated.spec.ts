import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-shapes/basic-shape-circle-ellipse-serialization.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/basic-shape-circle-ellipse-serialization.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/basic-shape-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/basic-shape-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside-invalid-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside-invalid-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside-invalid-circle-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside-invalid-circle-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside-invalid-circle-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside-invalid-circle-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside-invalid-circle-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside-invalid-circle-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside-invalid-circle-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside-invalid-circle-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside-invalid-ellipse-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside-invalid-ellipse-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside-invalid-ellipse-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside-invalid-ellipse-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside-invalid-ellipse-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside-invalid-ellipse-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside-invalid-ellipse-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside-invalid-ellipse-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside-invalid-ellipse-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside-invalid-ellipse-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside-invalid-ellipse-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside-invalid-ellipse-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside-invalid-inset-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside-invalid-inset-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside-invalid-inset-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside-invalid-inset-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside-invalid-inset-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside-invalid-inset-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside-invalid-inset-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside-invalid-inset-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/animation/shape-image-threshold-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/animation/shape-image-threshold-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/animation/shape-margin-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/animation/shape-margin-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/animation/shape-margin-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/animation/shape-margin-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/animation/shape-outside-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/animation/shape-outside-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/animation/shape-outside-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/animation/shape-outside-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/parsing/shape-image-threshold-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/parsing/shape-image-threshold-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/parsing/shape-image-threshold-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/parsing/shape-image-threshold-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/parsing/shape-image-threshold-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/parsing/shape-image-threshold-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/parsing/shape-margin-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/parsing/shape-margin-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/parsing/shape-margin-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/parsing/shape-margin-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/parsing/shape-margin-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/parsing/shape-margin-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/parsing/shape-outside-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/parsing/shape-outside-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/parsing/shape-outside-invalid-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/parsing/shape-outside-invalid-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/parsing/shape-outside-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/parsing/shape-outside-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/parsing/shape-outside-valid-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/parsing/shape-outside-valid-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/parsing/shape-outside-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/parsing/shape-outside-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/shape-outside-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/shape-outside-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/test-plan/index.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/test-plan/index.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/assorted/float-retry-push-circle.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/assorted/float-retry-push-circle.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/assorted/float-retry-push-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/assorted/float-retry-push-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/assorted/float-retry-push-inset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/assorted/float-retry-push-inset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/assorted/float-retry-push-polygon.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/assorted/float-retry-push-polygon.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/assorted/float-should-push.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/assorted/float-should-push.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/formatting-context/shape-outside-formatting-context.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/formatting-context/shape-outside-formatting-context.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-border-box-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-border-box-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-border-box-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-border-box-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-border-box-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-border-box-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-border-box-border-radius-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-box-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-box-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-box-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-box-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-box-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-box-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-box-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-box-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-box-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-box-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-box-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-box-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-box-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-box-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-content-box-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-content-box-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-content-box-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-content-box-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-content-box-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-content-box-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-content-box-border-radius-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-content-box-border-radius-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-content-box-border-radius-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-content-box-border-radius-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-margin-box-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-margin-box-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-margin-box-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-margin-box-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-margin-box-border-radius-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-margin-box-border-radius-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-margin-box-border-radius-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-margin-box-border-radius-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-margin-box-border-radius-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-margin-box-border-radius-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-margin-box-border-radius-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-margin-box-border-radius-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-margin-box-border-radius-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-margin-box-border-radius-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-margin-box-border-radius-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-margin-box-border-radius-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-margin-box-border-radius-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-margin-box-border-radius-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-margin-box-border-radius-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-margin-box-border-radius-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-padding-box-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-padding-box-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-padding-box-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-padding-box-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-padding-box-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-padding-box-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-padding-box-border-radius-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-padding-box-border-radius-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/shape-outside-padding-box-border-radius-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/shape-outside-padding-box-border-radius-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/shape-image-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/shape-image-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-image-threshold-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-image-threshold-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-image-threshold-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-image-threshold-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-image-threshold-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-image-threshold-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-image-threshold-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-image-threshold-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-margin-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-margin-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-margin-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-margin-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-margin-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-margin-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-margin-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-margin-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-margin-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-margin-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-margin-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-margin-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-box-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-box-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-circle-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-circle-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-circle-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-circle-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-circle-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-circle-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-circle-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-circle-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-circle-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-circle-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-circle-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-circle-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-circle-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-circle-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-circle-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-circle-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-circle-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-circle-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-circle-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-circle-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-circle-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-circle-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-circle-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-circle-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-computed-shape-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-computed-shape-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-computed-shape-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-computed-shape-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-ellipse-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-ellipse-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-ellipse-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-ellipse-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-ellipse-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-ellipse-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-ellipse-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-ellipse-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-ellipse-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-ellipse-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-ellipse-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-ellipse-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-ellipse-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-ellipse-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-ellipse-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-ellipse-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-ellipse-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-ellipse-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-ellipse-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-ellipse-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-ellipse-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-ellipse-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-ellipse-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-ellipse-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-inset-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-inset-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-inset-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-inset-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-inset-0010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-inset-0010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-inset-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-inset-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-inset-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-inset-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-inset-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-inset-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-inset-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-inset-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-inset-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-inset-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-inset-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-inset-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-inset-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-inset-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-inset-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-inset-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-polygon-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-polygon-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-polygon-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-polygon-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-polygon-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-polygon-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-polygon-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-polygon-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-polygon-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-polygon-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-polygon-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-polygon-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-polygon-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-polygon-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-shape-arguments-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-shape-arguments-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-shape-arguments-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-shape-arguments-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-shape-box-pair-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-shape-box-pair-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-shape-inherit-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-shape-inherit-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-shape-initial-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-shape-initial-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-shape-none-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-shape-none-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/values/shape-outside-shape-notation-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/values/shape-outside-shape-notation-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/reference/shape-outside-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/reference/shape-outside-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/reference/shape-outside-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/reference/shape-outside-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/reference/shape-outside-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/reference/shape-outside-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/reference/shape-outside-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/reference/shape-outside-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/spec-examples/reference/shape-outside-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/spec-examples/reference/shape-outside-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/assorted/reference/float-retry-push-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/assorted/reference/float-retry-push-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/assorted/reference/float-should-push-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/assorted/reference/float-should-push-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/formatting-context/reference/shape-outside-formatting-context-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/formatting-context/reference/shape-outside-formatting-context-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-border-box-border-radius-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-box-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-box-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-box-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-box-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-content-box-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-content-box-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-content-box-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-content-box-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-content-box-border-radius-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-content-box-border-radius-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-content-box-border-radius-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-content-box-border-radius-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-border-radius-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-border-radius-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-border-radius-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-border-radius-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-border-radius-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-border-radius-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-border-radius-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-border-radius-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-border-radius-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-border-radius-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-border-radius-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-border-radius-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-border-radius-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-border-radius-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-border-radius-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-margin-box-border-radius-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-padding-box-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-padding-box-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-padding-box-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-padding-box-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-padding-box-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-padding-box-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-padding-box-border-radius-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-padding-box-border-radius-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-box/reference/shape-outside-padding-box-border-radius-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-box/reference/shape-outside-padding-box-border-radius-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-linear-gradient-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-radial-gradient-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-radial-gradient-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-radial-gradient-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-radial-gradient-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-radial-gradient-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-radial-gradient-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/shape-outside-radial-gradient-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/shape-outside-radial-gradient-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/reference/shape-image-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/reference/shape-image-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/reference/shape-image-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/reference/shape-image-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/reference/shape-image-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/reference/shape-image-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/reference/shape-image-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/reference/shape-image-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/reference/shape-image-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/reference/shape-image-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/reference/shape-image-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/reference/shape-image-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/reference/shape-image-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/reference/shape-image-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/reference/shape-image-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/reference/shape-image-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/reference/shape-image-018-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/reference/shape-image-018-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/reference/shape-image-019-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/reference/shape-image-019-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/reference/shape-image-020-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/reference/shape-image-020-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/reference/shape-image-021-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/reference/shape-image-021-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/reference/shape-image-022-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/reference/shape-image-022-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/reference/shape-image-023-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/reference/shape-image-023-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/reference/shape-image-024-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/reference/shape-image-024-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/reference/shape-image-025-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/reference/shape-image-025-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-042.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-042.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-043.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-043.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-044.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-044.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-047.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-047.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-048.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-048.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-049.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-049.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-050.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-050.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-051.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-051.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-052.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-052.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-053.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-053.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-054.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-054.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-055.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-055.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-056.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-056.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-integer-overflow-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/shape-outside-circle-integer-overflow-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-042.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-042.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-043.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-043.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-044.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-044.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-045.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-045.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-046.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-046.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-047.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-047.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-048.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-048.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-049.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-049.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-050.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-050.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-051.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-051.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-052.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-052.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-integer-overflow-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/shape-outside-ellipse-integer-overflow-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-refcrash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/shape-outside-inset-refcrash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/shape-outside-polygon-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/reference/shape-outside-linear-gradient-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/reference/shape-outside-linear-gradient-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/reference/shape-outside-linear-gradient-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/reference/shape-outside-linear-gradient-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/shape-image/gradients/reference/shape-outside-linear-gradient-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/shape-image/gradients/reference/shape-outside-linear-gradient-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-023-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-023-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-030-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-030-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-032-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-032-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-033-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-033-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-034-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-034-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-035-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-035-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-036-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-036-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-041-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-041-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-042-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-042-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-047-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-047-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-048-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-048-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-049-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-049-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-050-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-050-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-051-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-051-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-052-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-052-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-053-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-053-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-054-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-054-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-055-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-055-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-056-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/circle/reference/shape-outside-circle-056-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-021-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-021-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-030-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-030-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-032-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-032-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-033-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-033-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-034-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-034-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-035-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-035-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-036-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-036-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-037-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-037-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-038-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-038-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-039-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-039-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-040-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-040-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-042-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-042-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-044-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-044-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-045-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-045-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-046-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-046-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-047-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-047-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-048-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-048-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-049-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-049-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-050-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-050-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-051-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-051-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-052-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/ellipse/reference/shape-outside-ellipse-052-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-016-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-016-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-017-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-017-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-020-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-020-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-021-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-021-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-022-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-022-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-023-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-023-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-024-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-024-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-025-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-025-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-026-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-026-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-027-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/inset/reference/shape-outside-inset-027-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-017-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-017-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-018-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-018-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-019-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-019-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-020-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-020-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-021-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-021-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-022-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-022-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-023-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-023-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-024-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-024-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-025-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-025-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-032-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shapes/shape-outside/supported-shapes/polygon/reference/shape-outside-polygon-032-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

