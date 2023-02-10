import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-inline/change-inline-change-abspos-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/change-inline-change-abspos-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/empty-text-node-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/empty-text-node-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/empty-text-node-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/empty-text-node-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/float-becomes-inflow-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/float-becomes-inflow-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/inline-002-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/inline-002-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/inline-crash-chrome-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/inline-crash-chrome-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/inline-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/inline-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/too-big-line-height-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/too-big-line-height-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/baseline-source/baseline-source-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/baseline-source/baseline-source-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/baseline-source/baseline-source-first-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/baseline-source/baseline-source-first-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/baseline-source/baseline-source-first-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/baseline-source/baseline-source-first-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/baseline-source/baseline-source-first-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/baseline-source/baseline-source-first-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/baseline-source/baseline-source-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/baseline-source/baseline-source-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/baseline-source/baseline-source-last-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/baseline-source/baseline-source-last-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/baseline-source/baseline-source-last-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/baseline-source/baseline-source-last-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/baseline-source/baseline-source-last-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/baseline-source/baseline-source-last-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/baseline-source/baseline-source-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/baseline-source/baseline-source-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/baseline-source/baseline-source-vertical-align.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/baseline-source/baseline-source-vertical-align.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/Initial-letter-breaking-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/Initial-letter-breaking-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/Initial-letter-breaking-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/Initial-letter-breaking-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/Initial-letter-breaking-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/Initial-letter-breaking-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/Initial-letter-breaking-vlr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/Initial-letter-breaking-vlr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/Initial-letter-breaking-vlr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/Initial-letter-breaking-vlr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/Initial-letter-breaking-vrl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/Initial-letter-breaking-vrl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/Initial-letter-breaking-vrl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/Initial-letter-breaking-vrl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/Initial-letter-breaking.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/Initial-letter-breaking.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-drop-over-ruby-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-drop-over-ruby-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-drop-over-ruby-tall-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-drop-over-ruby-tall-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-drop-over-ruby-tall.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-drop-over-ruby-tall.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-drop-over-ruby.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-drop-over-ruby.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-drop-under-ruby-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-drop-under-ruby-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-drop-under-ruby-tall-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-drop-under-ruby-tall-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-drop-under-ruby-tall.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-drop-under-ruby-tall.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-drop-under-ruby.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-drop-under-ruby.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-margins-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-margins-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-margins-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-margins-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-margins-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-margins-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-margins-vlr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-margins-vlr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-margins-vlr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-margins-vlr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-margins-vrl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-margins-vrl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-margins-vrl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-margins-vrl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-margins.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-margins.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-raise-over-ruby-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-raise-over-ruby-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-raise-over-ruby-tall-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-raise-over-ruby-tall-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-raise-over-ruby-tall.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-raise-over-ruby-tall.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-raise-over-ruby.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-raise-over-ruby.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-raise-under-ruby-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-raise-under-ruby-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-raise-under-ruby-tall-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-raise-under-ruby-tall-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-raise-under-ruby-tall.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-raise-under-ruby-tall.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-block-position-raise-under-ruby.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-block-position-raise-under-ruby.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-drop-initial-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-drop-initial-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-drop-initial-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-drop-initial-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-drop-initial-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-drop-initial-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-drop-initial-vlr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-drop-initial-vlr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-drop-initial-vlr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-drop-initial-vlr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-drop-initial-vrl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-drop-initial-vrl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-drop-initial-vrl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-drop-initial-vrl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-drop-initial.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-drop-initial.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-float-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-float-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-float-001-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-float-001-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-float-001-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-float-001-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-float-001-vlr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-float-001-vlr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-float-001-vlr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-float-001-vlr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-float-001-vrl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-float-001-vrl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-float-001-vrl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-float-001-vrl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-float-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-float-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-float-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-float-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-float-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-float-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-float-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-float-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-float-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-float-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-float-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-float-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-float-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-float-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-float-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-float-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-float-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-float-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-indentation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-indentation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-indentation-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-indentation-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-indentation-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-indentation-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-indentation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-indentation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-layout-text-decoration-underline-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-layout-text-decoration-underline-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-layout-text-decoration-underline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-layout-text-decoration-underline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-raise-initial-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-raise-initial-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-raise-initial-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-raise-initial-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-raise-initial-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-raise-initial-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-raise-initial-vlr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-raise-initial-vlr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-raise-initial-vlr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-raise-initial-vlr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-raise-initial-vrl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-raise-initial-vrl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-raise-initial-vrl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-raise-initial-vrl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-raise-initial.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-raise-initial.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-raised-sunken-caps-raise-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-raised-sunken-caps-raise-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-raised-sunken-caps-raise.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-raised-sunken-caps-raise.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-raised-sunken-caps-sunken-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-raised-sunken-caps-sunken-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-raised-sunken-caps-sunken.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-raised-sunken-caps-sunken.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-short-para-initial-letter-clears-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-short-para-initial-letter-clears-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-short-para-initial-letter-clears.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-short-para-initial-letter-clears.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-short-para-initial-letter-wraps-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-short-para-initial-letter-wraps-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-short-para-initial-letter-wraps.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-short-para-initial-letter-wraps.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-sunk-initial-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-sunk-initial-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-sunk-initial-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-sunk-initial-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-sunk-initial-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-sunk-initial-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-sunk-initial-vlr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-sunk-initial-vlr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-sunk-initial-vlr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-sunk-initial-vlr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-sunk-initial-vrl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-sunk-initial-vrl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-sunk-initial-vrl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-sunk-initial-vrl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-sunk-initial.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-sunk-initial.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-with-first-line-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-with-first-line-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-with-first-line.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-with-first-line.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-with-tab-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-with-tab-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-with-tab-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-with-tab-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-with-tab-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-with-tab-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/initial-letter/initial-letter-with-tab.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/initial-letter/initial-letter-with-tab.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/parsing/alignment-baseline-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/parsing/alignment-baseline-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/parsing/alignment-baseline-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/parsing/alignment-baseline-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/parsing/alignment-baseline-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/parsing/alignment-baseline-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/parsing/baseline-shift-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/parsing/baseline-shift-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/parsing/baseline-shift-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/parsing/baseline-shift-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/parsing/baseline-shift-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/parsing/baseline-shift-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/parsing/dominant-baseline-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/parsing/dominant-baseline-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/parsing/dominant-baseline-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/parsing/dominant-baseline-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/parsing/dominant-baseline-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/parsing/dominant-baseline-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/parsing/line-height-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/parsing/line-height-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/parsing/line-height-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/parsing/line-height-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/parsing/line-height-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/parsing/line-height-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/parsing/vertical-align-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/parsing/vertical-align-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/parsing/vertical-align-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/parsing/vertical-align-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-inline/parsing/vertical-align-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-inline/parsing/vertical-align-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

