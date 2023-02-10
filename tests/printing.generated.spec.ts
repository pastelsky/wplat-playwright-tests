import { test, expect } from "@playwright/test"; 

 
   test('snapshot printing/animated-image-print-image-orientation-none.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/animated-image-print-image-orientation-none.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/animated-image-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/animated-image-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/animations-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/animations-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/animations-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/animations-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/animations-shadow-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/animations-shadow-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/animations-shadow-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/animations-shadow-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/background-image-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/background-image-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/background-image-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/background-image-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/emoji-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/emoji-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/existing-transition-in-media-print.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/existing-transition-in-media-print.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/fragmented-inline-block-001-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/fragmented-inline-block-001-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/fragmented-inline-block-002-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/fragmented-inline-block-002-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/fragmented-inline-block-002-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/fragmented-inline-block-002-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/input-file-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/input-file-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/input-file-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/input-file-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/page-overflow-crash-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/page-overflow-crash-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/paused-animations-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/paused-animations-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/paused-animations-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/paused-animations-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/pseudo-animations-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/pseudo-animations-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/pseudo-animations-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/pseudo-animations-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/transition-in-media-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/transition-in-media-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot printing/transition-in-media-print.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/printing/transition-in-media-print.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

