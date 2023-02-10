import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-text-decor/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/line-through-vertical.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/line-through-vertical.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/ruby-text-decoration-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/ruby-text-decoration-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-002-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-002-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-003-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-003-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-004-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-004-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-040-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-040-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-040a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-040a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-041-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-041-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-044-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-044-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-045-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-045-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-046a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-046a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-048-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-048-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-048a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-048a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-049-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-049-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-082-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-082-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-085-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-085-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-090-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-090-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-090a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-090a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-091-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-091-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-091a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-091a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-092-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-092-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-092a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-092a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-095a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-095a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-096-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-096-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-096a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-096a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-097-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-097-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-097a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-097a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-color-recalc-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-color-recalc-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-color-recalc-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-color-recalc-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-color-recalc.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-color-recalc.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-color-selection-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-color-selection-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-color-selection-pseudo-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-color-selection-pseudo-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-decorating-box-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-decorating-box-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-dotted-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-dotted-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-dotted-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-dotted-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-002-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-002-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-003-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-003-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-004-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-004-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-040-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-040-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-040a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-040a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-041-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-041-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-044-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-044-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-045-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-045-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-046a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-046a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-048-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-048-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-048a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-048a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-049-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-049-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-082-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-082-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-085-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-085-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-090-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-090-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-090a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-090a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-091-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-091-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-091a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-091a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-092-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-092-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-092a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-092a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-095-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-095-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-095a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-095a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-096-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-096-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-096a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-096a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-097-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-097-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-097a-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-097a-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-grammar-error-color-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-grammar-error-color-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-grammar-error-color-001.optional.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-grammar-error-color-001.optional.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-grammar-error-color-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-grammar-error-color-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-grammar-error-color-002.optional.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-grammar-error-color-002.optional.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-grammar-error-color-dynamic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-grammar-error-color-dynamic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-grammar-error-color-dynamic-001.optional.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-grammar-error-color-dynamic-001.optional.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-recalc.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-recalc.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-spelling-error-001-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-spelling-error-001-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-spelling-error-color-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-spelling-error-color-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-spelling-error-color-001.optional.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-spelling-error-color-001.optional.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-spelling-error-color-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-spelling-error-color-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-spelling-error-color-002.optional.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-spelling-error-color-002.optional.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-spelling-error-color-dynamic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-spelling-error-color-dynamic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-spelling-error-color-dynamic-001.optional.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-spelling-error-color-dynamic-001.optional.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line-through-wavy-covers-whole-line-length-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line-through-wavy-covers-whole-line-length-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-line.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-line.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-lines-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-lines-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-overline-wavy-covers-whole-line-length-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-overline-wavy-covers-whole-line-length-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-propagation-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-propagation-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-propagation-display-contents.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-propagation-display-contents.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-propagation-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-propagation-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-propagation-shadow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-propagation-shadow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-serialization.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-serialization.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-shorthands-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-shorthands-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-shorthands-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-shorthands-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-ink-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-ink-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-ink-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-ink-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-ink-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-ink-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-ink-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-ink-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-ink-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-ink-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-ink-sidewayslr-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-ink-sidewayslr-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-ink-sidewayslr-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-ink-sidewayslr-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-ink-sidewaysrl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-ink-sidewaysrl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-ink-sidewaysrl-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-ink-sidewaysrl-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-ink-upright-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-ink-upright-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-ink-upright-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-ink-upright-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-ink-vertical-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-ink-vertical-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-ink-vertical-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-ink-vertical-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-ink.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-ink.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-spaces-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-spaces-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-spaces-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-spaces-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-spaces-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-spaces-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-skip-spaces-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-skip-spaces-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-style-multiple.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-style-multiple.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-style-recalc.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-style-recalc.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-subelements-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-subelements-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-subelements-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-subelements-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-subelements-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-subelements-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-subelements-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-subelements-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-subelements-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-subelements-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-fixed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-fixed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-from-font-variable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-from-font-variable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-from-zero-sized-font.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-from-zero-sized-font.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-initial.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-initial.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-ink-skip-dilation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-ink-skip-dilation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-length-rounding-down.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-length-rounding-down.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-length-rounding-min-val.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-length-rounding-min-val.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-length-rounding-up.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-length-rounding-up.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-linethrough-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-linethrough-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-nesting-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-nesting-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-overline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-overline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-percent-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-percent-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-scroll-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-scroll-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-single.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-single.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-underline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-underline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-vertical-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-vertical-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-thickness-vertical-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-thickness-vertical-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-underline-position-horizontal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-underline-position-horizontal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-underline-position-vertical-ja.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-underline-position-vertical-ja.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-underline-position-vertical.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-underline-position-vertical.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-decoration-underline-wavy-covers-whole-line-length-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-decoration-underline-wavy-covers-whole-line-length-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-color-property-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-color-property-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-color-property-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-color-property-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-color-property-001a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-color-property-001a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-color-property-001b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-color-property-001b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-color-property-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-color-property-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-color-property-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-color-property-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-line-height-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-line-height-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-line-height-001a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-line-height-001a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-line-height-001b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-line-height-001b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-line-height-001z.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-line-height-001z.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-line-height-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-line-height-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-line-height-002a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-line-height-002a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-line-height-002b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-line-height-002b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-line-height-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-line-height-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-line-height-003a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-line-height-003a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-line-height-003b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-line-height-003b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-line-height-003c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-line-height-003c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-line-height-003d.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-line-height-003d.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-line-height-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-line-height-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-line-height-004a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-line-height-004a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-line-height-004b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-line-height-004b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-line-height-004c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-line-height-004c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-line-height-004d.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-line-height-004d.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-001a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-001a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-001b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-001b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-001c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-001c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-002a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-002a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-002b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-002b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-002c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-002c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-003a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-003a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-003b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-003b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-003c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-003c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-003d.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-003d.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-003e.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-003e.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-003f.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-003f.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-003g.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-003g.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-004a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-004a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-004b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-004b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-004c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-004c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-004d.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-004d.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-004e.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-004e.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-004f.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-004f.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-004g.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-004g.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-005a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-005a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-005b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-005b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-005c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-005c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-005d.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-005d.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-005e.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-005e.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-005f.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-005f.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-005g.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-005g.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-006a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-006a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-006b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-006b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-006c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-006c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-006d.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-006d.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-006e.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-006e.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-006f.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-006f.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-position-property-006g.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-position-property-006g.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-property-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-property-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-property-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-property-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-property-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-property-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-property-003a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-property-003a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-property-003b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-property-003b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-property-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-property-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-property-004a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-property-004a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-ruby-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-ruby-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-ruby-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-ruby-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-ruby-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-ruby-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-ruby-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-ruby-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-ruby-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-ruby-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-ruby-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-ruby-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-ruby-003a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-ruby-003a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-ruby-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-ruby-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-ruby-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-ruby-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-ruby-004a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-ruby-004a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-005a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-005a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-010Cc.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-010Cc.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-010Cf.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-010Cf.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-010Cn.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-010Cn.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-010Zl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-010Zl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-010Zp.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-010Zp.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-010Zs.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-010Zs.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-011a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-011a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-011b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-011b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-012a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-012a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-012b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-012b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-012c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-012c.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-013a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-013a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-013b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-013b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-014a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-014a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-014b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-014b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-015-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-015-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-015a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-015a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-015b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-015b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-016-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-016-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-016a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-016a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-017-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-017-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-017a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-017a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-017b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-017b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-018-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-018-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-018a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-018a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-019-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-019-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-019a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-019a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-020-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-020-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-style-property-020a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-style-property-020a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-emphasis-unrepresentable-characters.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-emphasis-unrepresentable-characters.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-offset-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-offset-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-offset-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-offset-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-offset-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-offset-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-offset-initial.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-offset-initial.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-offset-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-offset-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-offset-negative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-offset-negative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-offset-nesting-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-offset-nesting-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-offset-overline-vertical.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-offset-overline-vertical.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-offset-overline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-offset-overline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-offset-scroll-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-offset-scroll-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-offset-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-offset-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-offset-variable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-offset-variable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-offset-vertical-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-offset-vertical-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-offset-vertical-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-offset-vertical-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-offset-vertical-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-offset-vertical-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-offset-zero-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-offset-zero-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-position-001a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-position-001a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-position-001b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-position-001b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-position-019-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-position-019-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-position-020-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-position-020-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-position-021-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-position-021-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-position-022-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-position-022-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-position-071-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-position-071-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-position-072-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-position-072-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-position-073-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-position-073-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-position-074-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-position-074-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-position-075-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-position-075-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-position-076-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-position-076-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-underline-position-from-font-variable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-underline-position-from-font-variable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/animations/text-underline-offset-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/animations/text-underline-offset-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/crashtests/text-decoration-on-empty-first-line-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/crashtests/text-decoration-on-empty-first-line-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/invalidation/text-decoration-invalidation-dashed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/invalidation/text-decoration-invalidation-dashed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/invalidation/text-decoration-invalidation-double.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/invalidation/text-decoration-invalidation-double.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/invalidation/text-decoration-invalidation-solid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/invalidation/text-decoration-invalidation-solid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/invalidation/text-decoration-invalidation-wavy.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/invalidation/text-decoration-invalidation-wavy.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/invalidation/text-decoration-thickness-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/invalidation/text-decoration-thickness-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/invalidation/text-decoration-thickness.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/invalidation/text-decoration-thickness.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-decoration-color-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-decoration-color-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-decoration-color-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-decoration-color-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-decoration-color-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-decoration-color-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-decoration-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-decoration-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-decoration-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-decoration-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-decoration-line-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-decoration-line-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-decoration-line-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-decoration-line-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-decoration-line-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-decoration-line-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-decoration-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-decoration-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-decoration-skip-ink-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-decoration-skip-ink-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-decoration-skip-ink-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-decoration-skip-ink-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-decoration-skip-ink-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-decoration-skip-ink-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-decoration-style-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-decoration-style-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-decoration-style-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-decoration-style-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-decoration-style-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-decoration-style-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-decoration-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-decoration-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-emphasis-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-emphasis-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-emphasis-position-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-emphasis-position-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-emphasis-style-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-emphasis-style-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-underline-position-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-underline-position-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-underline-position-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-underline-position-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/parsing/text-underline-position-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/parsing/text-underline-position-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/line-through-vertical-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/line-through-vertical-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/ruby-text-decoration-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/ruby-text-decoration-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-color-recalc-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-color-recalc-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-color-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-color-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-color-selection-pseudo-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-color-selection-pseudo-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-decorating-box-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-decorating-box-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-dotted-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-dotted-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-dotted-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-dotted-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-line-recalc-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-line-recalc-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-line-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-line-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-lines-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-lines-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-propagation-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-propagation-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-propagation-display-contents-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-propagation-display-contents-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-propagation-dynamic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-propagation-dynamic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-shorthands-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-shorthands-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-shorthands-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-shorthands-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-skip-ink-001-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-skip-ink-001-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-skip-ink-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-skip-ink-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-skip-ink-003-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-skip-ink-003-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-skip-ink-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-skip-ink-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-skip-ink-004-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-skip-ink-004-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-skip-ink-005-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-skip-ink-005-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-skip-ink-sidewayslr-001-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-skip-ink-sidewayslr-001-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-skip-ink-sidewaysrl-001-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-skip-ink-sidewaysrl-001-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-skip-ink-upright-001-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-skip-ink-upright-001-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-skip-ink-upright-001-offset-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-skip-ink-upright-001-offset-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-skip-ink-upright-002-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-skip-ink-upright-002-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-skip-ink-vertical-001-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-skip-ink-vertical-001-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-skip-ink-vertical-001-offset-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-skip-ink-vertical-001-offset-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-skip-ink-vertical-002-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-skip-ink-vertical-002-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-skip-spaces-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-skip-spaces-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-skip-spaces-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-skip-spaces-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-style-multiple-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-style-multiple-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-style-recalc-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-style-recalc-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-subelements-001-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-subelements-001-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-subelements-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-subelements-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-subelements-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-subelements-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-subelements-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-subelements-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-subelements-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-subelements-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-thickness-001-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-thickness-001-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-thickness-fixed-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-thickness-fixed-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-thickness-from-font-variable-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-thickness-from-font-variable-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-thickness-green-rect-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-thickness-green-rect-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-thickness-ink-skip-dilation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-thickness-ink-skip-dilation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-thickness-length-rounding-min-val-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-thickness-length-rounding-min-val-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-thickness-length-rounding-ref.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-thickness-length-rounding-ref.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-thickness-percent-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-thickness-percent-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-thickness-scroll-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-thickness-scroll-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-thickness-single-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-thickness-single-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-thickness-vertical-green-rect-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-thickness-vertical-green-rect-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-underline-position-horizontal-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-underline-position-horizontal-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-underline-position-vertical-ja-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-underline-position-vertical-ja-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-underline-position-vertical-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-underline-position-vertical-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-underline-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-underline-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-decoration-wavy-covers-whole-line-length-001-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-decoration-wavy-covers-whole-line-length-001-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-emphasis-style-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-emphasis-style-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-emphasis-style-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-emphasis-style-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-emphasis-style-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-emphasis-style-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-emphasis-style-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-emphasis-style-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-emphasis-style-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-emphasis-style-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-emphasis-style-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-emphasis-style-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-emphasis-style-021-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-emphasis-style-021-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-underline-offset-001-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-underline-offset-001-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-underline-offset-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-underline-offset-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-underline-offset-negative-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-underline-offset-negative-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-underline-offset-overline-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-underline-offset-overline-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-underline-offset-overline-vertical-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-underline-offset-overline-vertical-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-underline-offset-scroll-001-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-underline-offset-scroll-001-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-underline-offset-scroll-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-underline-offset-scroll-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-underline-offset-variable-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-underline-offset-variable-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-underline-offset-vertical-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-underline-offset-vertical-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-underline-offset-vertical-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-underline-offset-vertical-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-underline-offset-vertical-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-underline-offset-vertical-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-underline-offset-zero-position-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-underline-offset-zero-position-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-underline-position-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-underline-position-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/reference/text-underline-position-from-font-variable-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/reference/text-underline-position-from-font-variable-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/basic-negcoord-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/basic-negcoord-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/basic-negcoord.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/basic-negcoord.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/basic-opacity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/basic-opacity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/basic-opacity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/basic-opacity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/basic-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/basic-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/basic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/basic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/blur-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/blur-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/blur.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/blur.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/color-inherit-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/color-inherit-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/color-inherit.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/color-inherit.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/color-parserorder-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/color-parserorder-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/color-parserorder.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/color-parserorder.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/currentcolor-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/currentcolor-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/currentcolor.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/currentcolor.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/decorations-multiple-zorder-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/decorations-multiple-zorder-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/decorations-multiple-zorder.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/decorations-multiple-zorder.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/dynamic-blur-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/dynamic-blur-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/dynamic-blur.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/dynamic-blur.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/lineoverflow-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/lineoverflow-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/lineoverflow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/lineoverflow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/multiple-noblur-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/multiple-noblur-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/multiple-noblur.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/multiple-noblur.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/overflow-not-scrollable-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/overflow-not-scrollable-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/overflow-not-scrollable-1-ref2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/overflow-not-scrollable-1-ref2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/overflow-not-scrollable-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/overflow-not-scrollable-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/overflow-not-scrollable-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/overflow-not-scrollable-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/overflow-not-scrollable-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/overflow-not-scrollable-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/padding-decoration-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/padding-decoration-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/padding-decoration.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/padding-decoration.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/quirks-decor-noblur-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/quirks-decor-noblur-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/quirks-decor-noblur.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/quirks-decor-noblur.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/standards-decor-noblur-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/standards-decor-noblur-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/standards-decor-noblur.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/standards-decor-noblur.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/textindent-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/textindent-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/textindent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/textindent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/invalidation/reference/text-decoration-invalidation-dashed-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/invalidation/reference/text-decoration-invalidation-dashed-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/invalidation/reference/text-decoration-invalidation-double-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/invalidation/reference/text-decoration-invalidation-double-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/invalidation/reference/text-decoration-invalidation-solid-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/invalidation/reference/text-decoration-invalidation-solid-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/invalidation/reference/text-decoration-invalidation-wavy-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/invalidation/reference/text-decoration-invalidation-wavy-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/parsing/text-shadow-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/parsing/text-shadow-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/parsing/text-shadow-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/parsing/text-shadow-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text-decor/text-shadow/parsing/text-shadow-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text-decor/text-shadow/parsing/text-shadow-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

