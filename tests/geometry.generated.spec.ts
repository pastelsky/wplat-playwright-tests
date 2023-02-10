import { test, expect } from "@playwright/test"; 

 
   test('snapshot geometry/DOMMatrix-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMMatrix-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMMatrix-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMMatrix-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMMatrix-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMMatrix-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMMatrix-a-f-alias.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMMatrix-a-f-alias.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMMatrix-attributes.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMMatrix-attributes.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMMatrix-invert-invertible.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMMatrix-invert-invertible.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMMatrix-invert-non-invertible.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMMatrix-invert-non-invertible.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMMatrix-invert-preserves-2d.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMMatrix-invert-preserves-2d.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMMatrix-newobject.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMMatrix-newobject.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMMatrix-stringifier.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMMatrix-stringifier.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMMatrix2DInit-validate-fixup.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMMatrix2DInit-validate-fixup.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMMatrixInit-validate-fixup.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMMatrixInit-validate-fixup.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMPoint-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMPoint-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMPoint-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMPoint-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMQuad-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMQuad-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMQuad-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMQuad-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMQuad-nan.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMQuad-nan.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMRect-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMRect-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMRect-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMRect-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMRect-nan.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMRect-nan.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/DOMRectList.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/DOMRectList.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/WebKitCSSMatrix.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/WebKitCSSMatrix.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/historical.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/historical.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/spec-examples.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/spec-examples.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot geometry/structured-serialization.html', async ({ page }) => {
      await page.goto('http://localhost:5050/geometry/structured-serialization.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

