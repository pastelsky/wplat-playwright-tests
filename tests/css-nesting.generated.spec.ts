import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-nesting/conditional-properties-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/conditional-properties-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/conditional-properties.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/conditional-properties.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/conditional-rules-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/conditional-rules-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/conditional-rules.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/conditional-rules.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/cssom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/cssom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/delete-other-rule-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/delete-other-rule-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/implicit-nesting-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/implicit-nesting-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/implicit-nesting.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/implicit-nesting.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/implicit-parent-insertion-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/implicit-parent-insertion-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/invalid-inner-rules.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/invalid-inner-rules.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/invalidation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/invalidation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/invalidation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/invalidation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/invalidation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/invalidation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/invalidation-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/invalidation-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/nest-containing-forgiving-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/nest-containing-forgiving-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/nest-containing-forgiving.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/nest-containing-forgiving.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/nesting-basic-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/nesting-basic-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/nesting-basic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/nesting-basic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/pseudo-part-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/pseudo-part-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/serialize-group-rules-with-decls.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/serialize-group-rules-with-decls.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-nesting/top-level-is-scope.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-nesting/top-level-is-scope.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

