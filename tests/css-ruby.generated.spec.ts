import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-ruby/abs-in-ruby-base-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/abs-in-ruby-base-container.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/abs-in-ruby-base-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/abs-in-ruby-base-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/abs-in-ruby-base.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/abs-in-ruby-base.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/abs-in-ruby-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/abs-in-ruby-container.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/block-ruby-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/block-ruby-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/block-ruby-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/block-ruby-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/block-ruby-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/block-ruby-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/block-ruby-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/block-ruby-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/block-ruby-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/block-ruby-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/block-ruby-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/block-ruby-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/block-ruby-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/block-ruby-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/block-ruby-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/block-ruby-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/block-ruby-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/block-ruby-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/block-ruby-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/block-ruby-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/br-clear-all-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/br-clear-all-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/br-clear-all-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/br-clear-all-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/br-clear-all-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/br-clear-all-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/empty-ruby-base-container-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/empty-ruby-base-container-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/empty-ruby-base-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/empty-ruby-base-container.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/empty-ruby-text-container-abs.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/empty-ruby-text-container-abs.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/empty-ruby-text-container-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/empty-ruby-text-container-float.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/empty-ruby-text-container-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/empty-ruby-text-container-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/empty-ruby-text-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/empty-ruby-text-container.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/improperly-contained-annotation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/improperly-contained-annotation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/intra-base-white-space-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/intra-base-white-space-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/line-break-around-ruby-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/line-break-around-ruby-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/line-spacing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/line-spacing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/nested-ruby-pairing-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/nested-ruby-pairing-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/nested-ruby-pairing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/nested-ruby-pairing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/rb-display-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/rb-display-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/rbc-rtc-basic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/rbc-rtc-basic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/rt-display-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/rt-display-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-align-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-align-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-align-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-align-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-align-001a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-align-001a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-align-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-align-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-align-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-align-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-align-002a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-align-002a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-annotation-pairing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-annotation-pairing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-autohide-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-autohide-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-autohide-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-autohide-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-autohide-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-autohide-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-autohide-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-autohide-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-autohide-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-autohide-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-autohide-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-autohide-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-autohide-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-autohide-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-base-container-abs.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-base-container-abs.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-base-container-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-base-container-float.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-base-different-size-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-base-different-size-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-base-different-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-base-different-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-bidi-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-bidi-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-bidi-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-bidi-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-bidi-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-bidi-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-bidi-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-bidi-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-bidi-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-bidi-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-bidi-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-bidi-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-box-generation-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-box-generation-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-box-generation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-box-generation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-box-generation-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-box-generation-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-box-generation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-box-generation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-box-generation-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-box-generation-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-box-generation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-box-generation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-box-generation-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-box-generation-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-box-generation-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-box-generation-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-box-generation-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-box-generation-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-box-generation-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-box-generation-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-box-model-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-box-model-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-box-model-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-box-model-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-dynamic-insertion-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-dynamic-insertion-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-dynamic-insertion-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-dynamic-insertion-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-dynamic-insertion-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-dynamic-insertion-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-dynamic-insertion-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-dynamic-insertion-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-dynamic-insertion-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-dynamic-insertion-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-dynamic-insertion-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-dynamic-insertion-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-dynamic-insertion-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-dynamic-insertion-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-dynamic-insertion-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-dynamic-insertion-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-dynamic-insertion-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-dynamic-insertion-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-dynamic-insertion-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-dynamic-insertion-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-dynamic-removal-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-dynamic-removal-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-dynamic-removal-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-dynamic-removal-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-dynamic-removal-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-dynamic-removal-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-dynamic-removal-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-dynamic-removal-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-dynamic-removal-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-dynamic-removal-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-dynamic-removal-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-dynamic-removal-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-float-handling-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-float-handling-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-float-handling-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-float-handling-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-inlinize-blocks-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-inlinize-blocks-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-inlinize-blocks-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-inlinize-blocks-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-inlinize-blocks-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-inlinize-blocks-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-inlinize-blocks-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-inlinize-blocks-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-inlinize-blocks-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-inlinize-blocks-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-inlinize-blocks-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-inlinize-blocks-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-inlinize-blocks-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-inlinize-blocks-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-inlinize-blocks-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-inlinize-blocks-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-inlinize-blocks-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-inlinize-blocks-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-inlinize-blocks-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-inlinize-blocks-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-intra-level-whitespace-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-intra-level-whitespace-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-intra-level-whitespace-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-intra-level-whitespace-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-intra-level-whitespace-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-intra-level-whitespace-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-intra-level-whitespace-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-intra-level-whitespace-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-intra-level-whitespace-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-intra-level-whitespace-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-intra-level-whitespace-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-intra-level-whitespace-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-intrinsic-isize-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-intrinsic-isize-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-intrinsic-isize-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-intrinsic-isize-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-intrinsic-isize-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-intrinsic-isize-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-intrinsic-isize-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-intrinsic-isize-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-intrinsic-isize-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-intrinsic-isize-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-intrinsic-isize-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-intrinsic-isize-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-justification-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-justification-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-justification-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-justification-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-justification-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-justification-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-justification-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-justification-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-lang-specific-style-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-lang-specific-style-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-lang-specific-style-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-lang-specific-style-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-layout-internal-boxes-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-layout-internal-boxes-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-layout-internal-boxes.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-layout-internal-boxes.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-line-break-suppression-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-line-break-suppression-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-line-break-suppression-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-line-break-suppression-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-line-break-suppression-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-line-break-suppression-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-line-break-suppression-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-line-break-suppression-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-line-break-suppression-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-line-break-suppression-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-line-break-suppression-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-line-break-suppression-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-line-break-suppression-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-line-break-suppression-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-line-break-suppression-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-line-break-suppression-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-line-break-suppression-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-line-break-suppression-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-line-break-suppression-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-line-break-suppression-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-line-breaking-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-line-breaking-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-line-breaking-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-line-breaking-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-line-breaking-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-line-breaking-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-line-breaking-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-line-breaking-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-line-breaking-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-line-breaking-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-line-breaking-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-line-breaking-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-no-transform-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-no-transform-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-no-transform.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-no-transform.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-position-alternate.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-position-alternate.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-reflow-001-noruby.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-reflow-001-noruby.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-reflow-001-opaqueruby.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-reflow-001-opaqueruby.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-reflow-001-transparentruby.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-reflow-001-transparentruby.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-span-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-span-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-span-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-span-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-text-collapse-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-text-collapse-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-text-collapse.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-text-collapse.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-text-combine-upright-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-text-combine-upright-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-text-combine-upright-001a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-text-combine-upright-001a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-text-combine-upright-001b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-text-combine-upright-001b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-text-combine-upright-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-text-combine-upright-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-text-combine-upright-002a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-text-combine-upright-002a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-text-combine-upright-002b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-text-combine-upright-002b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-whitespace-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-whitespace-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-whitespace-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-whitespace-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-whitespace-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-whitespace-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-whitespace-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-whitespace-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-with-floats-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-with-floats-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-with-floats-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-with-floats-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-with-floats-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-with-floats-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-with-floats-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-with-floats-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-with-floats-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-with-floats-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/ruby-with-floats-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/ruby-with-floats-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/parsing/ruby-align-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/parsing/ruby-align-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/parsing/ruby-align-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/parsing/ruby-align-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/parsing/ruby-merge-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/parsing/ruby-merge-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/parsing/ruby-merge-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/parsing/ruby-merge-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/parsing/ruby-position-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/parsing/ruby-position-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/parsing/ruby-position-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/parsing/ruby-position-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/reference/improperly-contained-annotation-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/reference/improperly-contained-annotation-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/reference/intra-base-white-space-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/reference/intra-base-white-space-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/reference/rb-display-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/reference/rb-display-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/reference/rbc-rtc-basic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/reference/rbc-rtc-basic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-ruby/reference/ruby-annotation-pairing-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-ruby/reference/ruby-annotation-pairing-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

