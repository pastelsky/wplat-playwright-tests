import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-syntax/anb-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/anb-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/anb-serialization.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/anb-serialization.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/at-rule-in-declaration-list.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/at-rule-in-declaration-list.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/cdc-vs-ident-tokens.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/cdc-vs-ident-tokens.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset-is-not-a-rule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset-is-not-a-rule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/decimal-points-in-numbers.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/decimal-points-in-numbers.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/declarations-trim-whitespace.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/declarations-trim-whitespace.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/escaped-eof.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/escaped-eof.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/ident-three-code-points.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/ident-three-code-points.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/inclusive-ranges.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/inclusive-ranges.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/input-preprocessing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/input-preprocessing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/serialize-consecutive-tokens.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/serialize-consecutive-tokens.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/unclosed-constructs.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/unclosed-constructs.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/unclosed-url-at-eof.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/unclosed-url-at-eof.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/unicode-range-selector.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/unicode-range-selector.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/urange-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/urange-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/url-whitespace-consumption.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/url-whitespace-consumption.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/whitespace.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/whitespace.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-utf16-css-bomless-utf16.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-utf16-css-bomless-utf16.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-utf16-css-bomless-utf16be.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-utf16-css-bomless-utf16be.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-utf16-css-no-decl-ascii-only.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-utf16-css-no-decl-ascii-only.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-utf16-css-no-decl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-utf16-css-no-decl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-windows-1251-charset-attribute-bogus.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-windows-1251-charset-attribute-bogus.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-windows-1251-css-at-charset-1250-charset-attribute-windows-1253.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-windows-1251-css-at-charset-1250-charset-attribute-windows-1253.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-windows-1251-css-at-charset-bogus-charset-attribute-windows-1250.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-windows-1251-css-at-charset-bogus-charset-attribute-windows-1250.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-windows-1251-css-at-charset-bogus.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-windows-1251-css-at-charset-bogus.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-windows-1251-css-at-charset-utf16-ascii-only.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-windows-1251-css-at-charset-utf16-ascii-only.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-windows-1251-css-at-charset-utf16.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-windows-1251-css-at-charset-utf16.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-windows-1251-css-at-charset-utf16be.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-windows-1251-css-at-charset-utf16be.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-windows-1251-css-at-charset-windows-1250-in-utf16.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-windows-1251-css-at-charset-windows-1250-in-utf16.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-windows-1251-css-at-charset-windows-1250-in-utf16be.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-windows-1251-css-at-charset-windows-1250-in-utf16be.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-windows-1251-css-http-bogus-at-charset-windows-1250.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-windows-1251-css-http-bogus-at-charset-windows-1250.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-windows-1251-css-http-bogus.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-windows-1251-css-http-bogus.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-windows-1251-css-http-windows-1250-at-charset-windows-1253.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-windows-1251-css-http-windows-1250-at-charset-windows-1253.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-windows-1251-css-no-decl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-windows-1251-css-no-decl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-windows-1251-css-utf8-bom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-windows-1251-css-utf8-bom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-syntax/charset/page-windows-1252-http-windows-1251-css-utf8-bom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-syntax/charset/page-windows-1252-http-windows-1251-css-utf8-bom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

