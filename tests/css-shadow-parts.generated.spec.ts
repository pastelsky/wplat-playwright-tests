import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-shadow-parts/all-hosts.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/all-hosts.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/both-part-and-exportparts.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/both-part-and-exportparts.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/chaining-invalid-selector.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/chaining-invalid-selector.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/complex-matching.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/complex-matching.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/complex-non-matching.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/complex-non-matching.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/different-host.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/different-host.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/double-forward.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/double-forward.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/exportparts-multiple.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/exportparts-multiple.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/host-part-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/host-part-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/host-stylesheet.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/host-stylesheet.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/idlharness.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/idlharness.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/inner-host.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/inner-host.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/interaction-with-nested-pseudo-class-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/interaction-with-nested-pseudo-class-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/interaction-with-nested-pseudo-class.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/interaction-with-nested-pseudo-class.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/interaction-with-placeholder-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/interaction-with-placeholder-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/interaction-with-placeholder.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/interaction-with-placeholder.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/interaction-with-pseudo-elements.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/interaction-with-pseudo-elements.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/invalidation-change-exportparts-forward.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/invalidation-change-exportparts-forward.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/invalidation-change-part-name-forward.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/invalidation-change-part-name-forward.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/invalidation-change-part-name-idl-domtokenlist.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/invalidation-change-part-name-idl-domtokenlist.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/invalidation-change-part-name-idl-setter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/invalidation-change-part-name-idl-setter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/invalidation-change-part-name.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/invalidation-change-part-name.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/invalidation-complex-selector-forward.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/invalidation-complex-selector-forward.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/invalidation-complex-selector.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/invalidation-complex-selector.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/invalidation-part-pseudo.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/invalidation-part-pseudo.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/multiple-parts.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/multiple-parts.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/part-name-idl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/part-name-idl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/part-nested-pseudo-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/part-nested-pseudo-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/part-nested-pseudo.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/part-nested-pseudo.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/precedence-part-vs-part.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/precedence-part-vs-part.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/serialization.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/serialization.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/simple-forward-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/simple-forward-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/simple-forward.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/simple-forward.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/simple-important-important.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/simple-important-important.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/simple-important-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/simple-important-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/simple-important.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/simple-important.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/simple-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/simple-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/simple.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/simple.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-shadow-parts/style-sharing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-shadow-parts/style-sharing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

