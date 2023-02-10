import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-scrollbars/auto-scrollbar-inline-children.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/auto-scrollbar-inline-children.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/multicol-in-orthogonal-writing-mode-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/multicol-in-orthogonal-writing-mode-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbar-width-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbar-width-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbar-width-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbar-width-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbar-width-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbar-width-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbar-width-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbar-width-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbar-width-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbar-width-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbar-width-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbar-width-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbar-width-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbar-width-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbar-width-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbar-width-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbar-width-keywords.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbar-width-keywords.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbar-width-paint-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbar-width-paint-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbar-width-paint-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbar-width-paint-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbar-width-paint-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbar-width-paint-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbar-width-paint-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbar-width-paint-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbar-width-paint-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbar-width-paint-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbar-width-paint-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbar-width-paint-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbar-width-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbar-width-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbars-chrome-bug-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbars-chrome-bug-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/scrollbars-chrome-bug-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/scrollbars-chrome-bug-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/textarea-scrollbar-width-none-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/textarea-scrollbar-width-none-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/textarea-scrollbar-width-none.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/textarea-scrollbar-width-none.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/transparent-on-root-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/transparent-on-root-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/transparent-on-root.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/transparent-on-root.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/viewport-scrollbar-body-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/viewport-scrollbar-body-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/viewport-scrollbar-body.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/viewport-scrollbar-body.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/viewport-scrollbar-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/viewport-scrollbar-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/viewport-scrollbar.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/viewport-scrollbar.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/support/viewport-scrollbar-body-frame.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/support/viewport-scrollbar-body-frame.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scrollbars/support/viewport-scrollbar-frame.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scrollbars/support/viewport-scrollbar-frame.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

