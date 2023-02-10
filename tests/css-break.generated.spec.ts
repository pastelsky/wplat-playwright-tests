import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-break/abspos-in-clipped-overflow-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/abspos-in-clipped-overflow-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/abspos-in-clipped-overflow-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/abspos-in-clipped-overflow-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/abspos-in-offset-relpos.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/abspos-in-offset-relpos.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/abspos-in-opacity-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/abspos-in-opacity-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/abspos-in-opacity-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/abspos-in-opacity-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/abspos-in-opacity-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/abspos-in-opacity-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/abspos-in-opacity-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/abspos-in-opacity-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/abspos-inside-relpos-inside-monolithic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/abspos-inside-relpos-inside-monolithic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/area-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/area-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/area-in-inline-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/area-in-inline-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/auto-overflow-inside-second-abspos-fragment-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/auto-overflow-inside-second-abspos-fragment-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/avoid-border-break.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/avoid-border-break.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/background-image-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/background-image-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/background-image-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/background-image-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/background-image-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/background-image-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/background-image-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/background-image-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/background-image-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/background-image-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/background-image-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/background-image-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-001-wm-vlr-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-001-wm-vlr-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-001-wm-vlr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-001-wm-vlr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-001-wm-vrl-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-001-wm-vrl-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-001-wm-vrl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-001-wm-vrl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-002-wm-vlr-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-002-wm-vlr-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-002-wm-vlr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-002-wm-vlr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-002-wm-vrl-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-002-wm-vrl-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-002-wm-vrl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-002-wm-vrl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-end-aligned-abspos-nested.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-end-aligned-abspos-nested.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-end-aligned-abspos-with-overflow-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-end-aligned-abspos-with-overflow-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-end-aligned-abspos-with-overflow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-end-aligned-abspos-with-overflow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-end-aligned-abspos.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-end-aligned-abspos.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-in-inline-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-in-inline-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-in-inline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-in-inline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-in-inline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-in-inline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-in-inline-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-in-inline-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-in-inline-004-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-in-inline-004-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-in-inline-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-in-inline-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-in-inline-005-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-in-inline-005-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-in-inline-006-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-in-inline-006-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-in-inline-007-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-in-inline-007-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-max-height-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-max-height-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-max-height-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-max-height-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-max-height-001b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-max-height-001b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-max-height-001b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-max-height-001b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-max-height-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-max-height-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-max-height-002b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-max-height-002b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-max-height-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-max-height-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-max-height-003b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-max-height-003b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-min-height-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-min-height-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-min-height-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-min-height-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-min-height-001b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-min-height-001b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/block-min-height-001b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/block-min-height-001b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/borders-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/borders-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/borders-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/borders-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/borders-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/borders-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/borders-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/borders-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/borders-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/borders-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/borders-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/borders-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/borders-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/borders-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/borders-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/borders-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/borders-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/borders-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/borders-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/borders-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/borders-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/borders-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/borders-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/borders-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/borders-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/borders-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/borders-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/borders-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/borders-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/borders-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/borders-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/borders-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/box-decoration-break-clone-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/box-decoration-break-clone-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/box-decoration-break-clone-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/box-decoration-break-clone-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/box-decoration-break-clone-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/box-decoration-break-clone-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/box-decoration-break-clone-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/box-decoration-break-clone-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/box-shadow-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/box-shadow-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/box-shadow-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/box-shadow-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/box-shadow-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/box-shadow-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/box-shadow-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/box-shadow-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/box-shadow-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/box-shadow-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/box-shadow-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/box-shadow-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/box-shadow-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/box-shadow-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/box-shadow-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/box-shadow-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/br-clear-all.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/br-clear-all.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-after-in-parallel-flow-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-after-in-parallel-flow-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-after-oof-before-preceding-pushed-float-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-after-oof-before-preceding-pushed-float-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-at-end-container-edge-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-at-end-container-edge-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-at-end-container-edge-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-at-end-container-edge-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-at-end-container-edge-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-at-end-container-edge-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-at-end-container-edge-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-at-end-container-edge-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-at-end-container-edge-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-at-end-container-edge-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-before-float-after-line-after-floats-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-before-float-after-line-after-floats-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-before-with-no-fragmentation-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-before-with-no-fragmentation-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-avoid-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-avoid-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-avoid-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-avoid-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-avoid-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-avoid-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-avoid-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-avoid-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-avoid-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-avoid-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-avoid-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-avoid-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-avoid-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-avoid-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-avoid-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-avoid-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-avoid-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-avoid-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-avoid-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-avoid-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-avoid-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-avoid-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-avoid-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-avoid-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-avoid-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-avoid-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-avoid-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-avoid-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-avoid-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-avoid-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-force-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-force-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-force-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-force-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-between-force-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-between-force-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-float-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-float-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-float-dynamic-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-float-dynamic-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-inside-avoid-min-block-size-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-inside-avoid-min-block-size-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-inside-avoid-min-block-size-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-inside-avoid-min-block-size-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-inside-avoid-min-block-size-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-inside-avoid-min-block-size-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-inside-avoid-min-block-size-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-inside-avoid-min-block-size-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-nested-float-in-table-001-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-nested-float-in-table-001-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-nested-float-in-table-001-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-nested-float-in-table-001-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/break-overflowed-block-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/break-overflowed-block-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/change-block-background.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/change-block-background.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/change-break-after.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/change-break-after.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/change-break-after2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/change-break-after2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/change-break-before.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/change-break-before.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/change-break-inside.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/change-break-inside.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/change-inline-color-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/change-inline-color-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/change-inline-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/change-inline-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/chrome-bug-1283776-000-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/chrome-bug-1283776-000-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/chrome-bug-1283776-001-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/chrome-bug-1283776-001-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/chrome-bug-1285596-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/chrome-bug-1285596-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/chrome-bug-1287342-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/chrome-bug-1287342-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/chrome-bug-1288769-000-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/chrome-bug-1288769-000-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/chrome-bug-1288769-001-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/chrome-bug-1288769-001-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/chrome-bug-1289999-crash.https.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/chrome-bug-1289999-crash.https.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/chrome-bug-1318455-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/chrome-bug-1318455-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/class-c-breakpoint-after-float-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/class-c-breakpoint-after-float-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/class-c-breakpoint-after-float-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/class-c-breakpoint-after-float-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/class-c-breakpoint-after-float-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/class-c-breakpoint-after-float-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/class-c-breakpoint-after-float-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/class-c-breakpoint-after-float-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/class-c-breakpoint-after-float-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/class-c-breakpoint-after-float-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/clear-br-in-size-containment-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/clear-br-in-size-containment-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/clear-float-in-size-containment-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/clear-float-in-size-containment-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/clear-past-float-with-oof-twice-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/clear-past-float-with-oof-twice-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/clearance-parallel-flow-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/clearance-parallel-flow-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/clearance-parallel-flow-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/clearance-parallel-flow-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/clearance-self-collapsing-past-fragmented-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/clearance-self-collapsing-past-fragmented-float.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/column-balancing-with-oofs-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/column-balancing-with-oofs-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/contain-strict-with-opacity-and-oof-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/contain-strict-with-opacity-and-oof-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/contain-strict-with-opacity-and-oof.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/contain-strict-with-opacity-and-oof.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/empty-fieldset-tall-bottom-padding-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/empty-fieldset-tall-bottom-padding-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/empty-multicol-at-scrollport-edge.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/empty-multicol-at-scrollport-edge.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fieldset-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fieldset-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fieldset-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fieldset-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fieldset-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fieldset-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fieldset-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fieldset-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fieldset-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fieldset-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fieldset-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fieldset-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fieldset-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fieldset-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fieldset-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fieldset-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fieldset-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fieldset-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fieldset-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fieldset-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fieldset-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fieldset-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fieldset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fieldset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/firefox-bug1693616-001-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/firefox-bug1693616-001-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/firefox-bug1693616-002-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/firefox-bug1693616-002-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-001-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-001-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-001-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-001-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-002-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-002-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-002-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-002-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-003-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-003-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-003-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-003-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-004-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-004-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-004-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-004-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-005-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-005-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-005-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-005-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-006-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-006-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-006-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-006-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-007-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-007-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-007-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-007-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-008-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-008-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-008-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-008-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-with-link-with-inline-child-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-with-link-with-inline-child-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fixedpos-with-link-with-inline-child-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fixedpos-with-link-with-inline-child-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-011-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-011-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-after-self-collapsing-block-in-inline-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-after-self-collapsing-block-in-inline-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-in-self-collapsing-block-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-in-self-collapsing-block-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-in-self-collapsing-block-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-in-self-collapsing-block-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-inside-small-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-inside-small-block.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-stretching-bfc-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-stretching-bfc-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-stretching-bfc-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-stretching-bfc-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-with-large-margin-bottom-cross-page-001-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-with-large-margin-bottom-cross-page-001-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-with-large-margin-bottom-cross-page-001-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-with-large-margin-bottom-cross-page-001-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-with-large-margin-bottom-cross-page-002-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-with-large-margin-bottom-cross-page-002-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/float-with-large-margin-bottom-cross-page-002-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/float-with-large-margin-bottom-cross-page-002-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/floated-multicol-in-multicol-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/floated-multicol-in-multicol-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/floats-and-text-narrow-and-short-dynamic-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/floats-and-text-narrow-and-short-dynamic-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/floats-and-text-narrow-and-short-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/floats-and-text-narrow-and-short-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/forced-break-at-fragmentainer-start-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/forced-break-at-fragmentainer-start-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/forced-break-at-fragmentainer-start-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/forced-break-at-fragmentainer-start-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/form-control.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/form-control.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fragmentainer-1px-clamping-000-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fragmentainer-1px-clamping-000-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fragmentainer-1px-clamping-001-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fragmentainer-1px-clamping-001-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fragmented-autowidth-fc-root-beside-floats-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fragmented-autowidth-fc-root-beside-floats-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fragmented-autowidth-fc-root-beside-floats.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fragmented-autowidth-fc-root-beside-floats.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fragmented-empty-contenteditable-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fragmented-empty-contenteditable-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fragmented-float-in-inline-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fragmented-float-in-inline-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fragmented-float-overflowing-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fragmented-float-overflowing-container.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/fragmented-oof-in-inline-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/fragmented-oof-in-inline-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/hit-test-hidden-overflow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/hit-test-hidden-overflow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/hit-test-inline-fragmentation-with-border-radius.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/hit-test-inline-fragmentation-with-border-radius.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/hit-test-transformed-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/hit-test-transformed-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/hit-test-transformed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/hit-test-transformed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/iframe-in-repeated-table-header-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/iframe-in-repeated-table-header-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/increase-fragmentainer-size-tall-border.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/increase-fragmentainer-size-tall-border.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/ink-overflow-001-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/ink-overflow-001-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/ink-overflow-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/ink-overflow-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/large-text-node-oof-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/large-text-node-oof-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/line-after-unbreakable-float-after-padding-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/line-after-unbreakable-float-after-padding-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/line-after-unbreakable-float-after-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/line-after-unbreakable-float-after-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/line-and-fragmentainer-break-before-float-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/line-and-fragmentainer-break-before-float-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/line-pushed-by-float-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/line-pushed-by-float-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/line-pushed-by-float-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/line-pushed-by-float-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/margin-after-overflowed-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/margin-after-overflowed-block.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/max-height-with-margin-pushed-below-fragmentation-line-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/max-height-with-margin-pushed-below-fragmentation-line-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/monolithic-content-with-forced-break-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/monolithic-content-with-forced-break-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/monolithic-content-with-forced-break-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/monolithic-content-with-forced-break-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/monolithic-content-with-forced-break-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/monolithic-content-with-forced-break-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/monolithic-with-overflow-lr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/monolithic-with-overflow-lr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/monolithic-with-overflow-rl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/monolithic-with-overflow-rl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/monolithic-with-overflow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/monolithic-with-overflow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/nested-fixedpos-in-inline-crash-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/nested-fixedpos-in-inline-crash-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/nested-fixedpos-in-inline-crash-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/nested-fixedpos-in-inline-crash-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/nested-fixedpos-in-inline-crash-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/nested-fixedpos-in-inline-crash-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/nested-float-in-multicol-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/nested-float-in-multicol-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/nested-multicol-with-spanner-and-oof-crash-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/nested-multicol-with-spanner-and-oof-crash-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/nested-multicol-with-spanner-and-oof-crash-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/nested-multicol-with-spanner-and-oof-crash-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/nested-multicol-with-spanner-and-oof-crash-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/nested-multicol-with-spanner-and-oof-crash-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/nested-multicol-with-spanner-and-oof-crash-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/nested-multicol-with-spanner-and-oof-crash-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/nested-multicol-with-spanner-and-oof-crash-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/nested-multicol-with-spanner-and-oof-crash-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/nested-multicol-with-spanner-and-oof-crash-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/nested-multicol-with-spanner-and-oof-crash-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/nested-multicol-with-spanner-and-oof-crash-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/nested-multicol-with-spanner-and-oof-crash-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/nested-multicol-with-spanner-and-oof-crash-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/nested-multicol-with-spanner-and-oof-crash-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/nested-multicol-with-spanners-and-oofs-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/nested-multicol-with-spanners-and-oofs-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/nested-oof-in-multicol-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/nested-oof-in-multicol-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/no-room-for-line-in-first-fragmentainer-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/no-room-for-line-in-first-fragmentainer-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/offset-top-block-in-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/offset-top-block-in-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/orphans-in-parallel-flow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/orphans-in-parallel-flow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-inline-with-negative-offset-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-inline-with-negative-offset-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-019-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-019-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-042.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-042.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-043.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-043.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-044.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-044.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-045.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-045.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-046.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-046.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-047.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-047.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-048.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-048.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-049.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-049.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-050.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-050.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-051.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-051.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-052.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-052.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-053.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-053.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-054.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-054.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-055.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-055.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-056.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-056.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-057.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-057.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-058.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-058.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-059.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-059.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-060.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-060.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-061.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-061.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-062.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-062.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-063.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-063.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-064.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-064.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-065.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-065.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-066.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-066.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-067.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-067.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-068.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-068.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-069.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-069.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-070.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-070.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-071.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-071.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-072.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-072.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-073.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-073.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-074.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-074.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-075.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-075.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-076.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-076.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-077.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-077.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-078.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-078.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-079.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-079.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-080.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-080.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-081.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-081.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-082.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-082.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-083.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-083.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-084.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-084.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-085.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-085.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-086.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-086.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-087.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-087.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-088.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-088.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-089.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-089.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-090.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-090.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-091.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-091.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-092.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-092.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-093-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-093-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-093.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-093.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-094.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-094.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-095.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-095.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-096.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-096.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-097.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-097.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-098.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-098.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-099.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-099.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-100.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-100.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-101.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-101.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-102.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-102.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-103.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-103.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-104.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-104.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-105-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-105-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-105.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-105.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-106-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-106-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-106.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-106.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-107.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-107.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-108.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-108.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-109.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-109.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-110.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-110.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-111.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-111.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-112.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-112.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-113.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-113.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-114.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-114.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-115.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-115.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-multicolumn-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-multicolumn-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-nested-spanner-multicol-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-nested-spanner-multicol-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-in-new-column-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-in-new-column-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/out-of-flow-with-negative-offset-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/out-of-flow-with-negative-offset-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflow-auto-height-with-bottom-padding-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflow-auto-height-with-bottom-padding-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflow-clip-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflow-clip-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflow-clip-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflow-clip-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflow-clip-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflow-clip-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflow-clip-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflow-clip-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflow-clip-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflow-clip-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflow-clip-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflow-clip-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflow-clip-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflow-clip-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflow-clip-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflow-clip-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflow-clip-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflow-clip-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflow-clip-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflow-clip-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflow-clip-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflow-clip-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflow-clip-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflow-clip-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflow-clip-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflow-clip-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflow-clip-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflow-clip-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflowed-abs-pos-with-percentage-height-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflowed-abs-pos-with-percentage-height-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflowed-abs-pos-with-percentage-height-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflowed-abs-pos-with-percentage-height-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflowed-block-with-no-room-after-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflowed-block-with-no-room-after-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflowed-block-with-no-room-after-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflowed-block-with-no-room-after-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflowed-block-with-room-after-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflowed-block-with-room-after-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflowed-block-with-room-after-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflowed-block-with-room-after-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflowed-block-with-room-after-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflowed-block-with-room-after-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflowed-block-with-room-after-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflowed-block-with-room-after-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflowed-block-with-room-after-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflowed-block-with-room-after-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflowing-block-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflowing-block-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/overflowing-block-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/overflowing-block-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/page-break-legacy-shorthands.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/page-break-legacy-shorthands.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parallel-flow-trailing-margin-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parallel-flow-trailing-margin-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parallel-flow-trailing-margin-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parallel-flow-trailing-margin-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parallel-flow-trailing-margin-003-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parallel-flow-trailing-margin-003-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/relpos-inline-hit-testing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/relpos-inline-hit-testing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/relpos-inline-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/relpos-inline-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/relpos-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/relpos-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/remove-inline-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/remove-inline-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/resumed-float-and-inline-block-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/resumed-float-and-inline-block-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/ruby-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/ruby-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/ruby-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/ruby-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/ruby-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/ruby-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/ruby-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/ruby-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/svg-with-transform.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/svg-with-transform.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/tall-break-inside-avoid-at-start.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/tall-break-inside-avoid-at-start.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/tall-content-inside-constrained-block-000.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/tall-content-inside-constrained-block-000.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/tall-content-inside-constrained-block-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/tall-content-inside-constrained-block-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/tall-content-inside-constrained-block-002.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/tall-content-inside-constrained-block-002.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/tall-content-inside-constrained-block-003.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/tall-content-inside-constrained-block-003.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/tall-content-inside-constrained-block-004.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/tall-content-inside-constrained-block-004.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/tall-content-inside-constrained-block-005.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/tall-content-inside-constrained-block-005.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/tall-content-inside-constrained-block-006.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/tall-content-inside-constrained-block-006.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/tall-float-pushed-to-next-fragmentainer-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/tall-float-pushed-to-next-fragmentainer-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/tall-float-pushed-to-next-fragmentainer-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/tall-float-pushed-to-next-fragmentainer-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/tall-float-pushed-to-next-fragmentainer-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/tall-float-pushed-to-next-fragmentainer-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/tall-float-pushed-to-next-fragmentainer-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/tall-float-pushed-to-next-fragmentainer-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/tall-line-in-short-fragmentainer-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/tall-line-in-short-fragmentainer-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/tall-line-in-short-fragmentainer-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/tall-line-in-short-fragmentainer-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/tall-line-in-short-fragmentainer-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/tall-line-in-short-fragmentainer-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/trailing-child-margin-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/trailing-child-margin-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/trailing-child-margin-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/trailing-child-margin-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/trailing-child-margin-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/trailing-child-margin-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/transform-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/transform-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/transform-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/transform-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/transform-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/transform-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/transform-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/transform-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/transform-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/transform-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/transform-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/transform-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/transform-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/transform-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/transform-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/transform-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/transform-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/transform-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/transform-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/transform-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/transform-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/transform-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/transform-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/transform-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/transform-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/transform-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/transform-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/transform-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/transform-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/transform-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/truncated-margin-at-fragmentainer-end-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/truncated-margin-at-fragmentainer-end-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/truncated-margin-at-fragmentainer-end-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/truncated-margin-at-fragmentainer-end-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/uncontained-oof-in-inline-after-break-000-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/uncontained-oof-in-inline-after-break-000-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/uncontained-oof-in-inline-after-break-001-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/uncontained-oof-in-inline-after-break-001-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/underflow-from-next-page-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/underflow-from-next-page-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/underflow-from-next-page-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/underflow-from-next-page-print.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/wide-line-after-floats-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/wide-line-after-floats-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-block-in-inline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-block-in-inline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/widows-orphans-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/widows-orphans-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/will-change-filter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/will-change-filter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/animation/orphans-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/animation/orphans-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/animation/widows-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/animation/widows-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/button-in-multicol-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/button-in-multicol-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/fixed-flex-item-inside-abs-flex-in-multicol-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/fixed-flex-item-inside-abs-flex-in-multicol-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/flex-container-fragmentation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/flex-container-fragmentation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/flex-container-fragmentation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/flex-container-fragmentation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/flex-container-fragmentation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/flex-container-fragmentation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/flex-container-fragmentation-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/flex-container-fragmentation-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/flex-container-fragmentation-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/flex-container-fragmentation-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/flex-container-fragmentation-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/flex-container-fragmentation-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/flex-container-fragmentation-007.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/flex-container-fragmentation-007.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/flex-container-fragmentation-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/flex-container-fragmentation-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/flex-container-fragmentation-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/flex-container-fragmentation-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/flex-container-fragmentation-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/flex-container-fragmentation-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/flex-container-fragmentation-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/flex-container-fragmentation-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/flex-fragmented-with-float-descendant-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/flex-fragmented-with-float-descendant-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/flex-fragmented-with-float-descendant-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/flex-fragmented-with-float-descendant-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/flexbox-fragmentation-layout-001-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/flexbox-fragmentation-layout-001-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/float-in-webkit-box-in-multicol-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/float-in-webkit-box-in-multicol-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/image-in-fragmented-flexbox-crash-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/image-in-fragmented-flexbox-crash-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/image-in-fragmented-flexbox-crash-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/image-in-fragmented-flexbox-crash-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/increase-fragmentainer-size-flex-item-trailing-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/increase-fragmentainer-size-flex-item-trailing-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/monolithic-item-in-fragmented-flexbox-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/monolithic-item-in-fragmented-flexbox-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-036.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-036.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-041-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-041-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-042-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-042-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-042.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-042.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-043-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-043-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-043.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-043.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-044-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-044-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-044.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-044.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-045.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-045.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-046.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-046.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-047.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-047.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-048.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-048.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-049.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-049.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-050.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-050.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-051.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-051.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-052.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-052.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-column-flex-fragmentation-053.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-column-flex-fragmentation-053.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-041.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-041.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-042.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-042.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-043.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-043.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-044.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-044.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-045.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-045.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-046.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-046.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-047-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-047-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-047.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-047.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-048-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-048-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-048.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-048.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-049-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-049-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-049.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-049.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-050-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-050-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-050.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-050.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-051.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-051.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-052.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-052.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-053.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-053.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-054.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-054.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-055.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-055.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-056.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-056.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-057.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-057.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-058.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-058.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-059.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-059.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-060.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-060.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-061.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-061.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/multi-line-row-flex-fragmentation-062.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/multi-line-row-flex-fragmentation-062.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/nested-flex-item-expansion-in-mulicol.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/nested-flex-item-expansion-in-mulicol.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/quirks-flex-in-multicol-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/quirks-flex-in-multicol-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-040-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-040-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-042.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-042.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-043.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-043.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-044.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-044.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-045.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-045.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-046.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-046.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-047.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-047.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-048.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-048.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-049.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-049.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-050.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-050.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-051.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-051.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-052.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-052.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-053.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-053.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-054.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-054.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-055.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-055.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-056.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-056.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-057.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-057.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-058.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-058.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-column-flex-fragmentation-059.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-column-flex-fragmentation-059.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-027-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-027-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/single-line-row-flex-fragmentation-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/single-line-row-flex-fragmentation-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/flexbox/slider-in-multicol-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/flexbox/slider-in-multicol-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-container-fragmentation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-container-fragmentation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-container-fragmentation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-container-fragmentation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-container-fragmentation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-container-fragmentation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-container-fragmentation-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-container-fragmentation-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-container-fragmentation-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-container-fragmentation-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-container-fragmentation-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-container-fragmentation-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-container-fragmentation-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-container-fragmentation-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-container-fragmentation-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-container-fragmentation-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-container-fragmentation-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-container-fragmentation-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-container-fragmentation-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-container-fragmentation-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-container-fragmentation-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-container-fragmentation-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-027.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-027.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-042.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-042.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-043.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-043.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-044.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-044.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-045.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-045.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-046.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-046.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-047.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-047.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-fragmentation-048.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-fragmentation-048.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-infinite-expansion.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-infinite-expansion.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-oof-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-oof-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-oof-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-oof-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-oof-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-oof-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-oof-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-oof-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-oof-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-oof-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-oof-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-oof-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-oof-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-oof-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-oof-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-oof-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-oof-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-oof-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-oof-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-oof-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-oof-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-oof-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-oof-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-oof-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-placement-crash-multiple.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-placement-crash-multiple.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-item-placement-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-item-placement-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-large-end-border-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-large-end-border-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/grid/grid-nested-columns-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/grid/grid-nested-columns-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/box-decoration-break-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/box-decoration-break-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/box-decoration-break-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/box-decoration-break-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/box-decoration-break-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/box-decoration-break-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/break-after-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/break-after-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/break-after-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/break-after-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/break-after-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/break-after-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/break-before-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/break-before-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/break-before-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/break-before-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/break-before-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/break-before-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/break-inside-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/break-inside-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/break-inside-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/break-inside-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/break-inside-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/break-inside-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/orphans-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/orphans-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/orphans-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/orphans-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/orphans-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/orphans-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/widows-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/widows-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/widows-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/widows-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/parsing/widows-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/parsing/widows-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/reference/widows-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/reference/widows-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/reference/widows-block-in-inline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/reference/widows-block-in-inline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/reference/widows-orphans-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/reference/widows-orphans-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/reference/widows-orphans-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/reference/widows-orphans-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/reference/widows-orphans-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/reference/widows-orphans-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/reference/widows-orphans-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/reference/widows-orphans-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/reference/widows-orphans-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/reference/widows-orphans-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/reference/widows-orphans-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/reference/widows-orphans-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/reference/widows-orphans-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/reference/widows-orphans-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/reference/widows-orphans-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/reference/widows-orphans-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/reference/widows-orphans-016-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/reference/widows-orphans-016-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/reference/widows-orphans-017-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/reference/widows-orphans-017-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/border-spacing-at-breaks.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/border-spacing-at-breaks.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/border-spacing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/border-spacing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/bottom-padding-repeated-header-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/bottom-padding-repeated-header-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-after-table-cell-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-after-table-cell-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-after-table-cell.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-after-table-cell.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-avoidance-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-avoidance-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-avoidance-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-avoidance-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-avoidance-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-avoidance-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-avoidance-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-avoidance-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-avoidance-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-avoidance-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-avoidance-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-avoidance-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-avoidance-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-avoidance-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-avoidance-in-table-in-grid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-avoidance-in-table-in-grid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-before-expansion-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-before-expansion-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-before-expansion-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-before-expansion-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-before-repeated-footer-instead-of-border-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-before-repeated-footer-instead-of-border-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-before-second-row.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-before-second-row.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-before-table-cell-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-before-table-cell-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-before-table-cell.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-before-table-cell.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-inside-cell-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-inside-cell-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/break-inside-cell-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/break-inside-cell-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/caption-bottom-margin-at-boundary-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/caption-bottom-margin-at-boundary-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/caption-margin-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/caption-margin-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/caption-margin-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/caption-margin-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/caption-margin-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/caption-margin-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/caption-margin-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/caption-margin-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/dynamic-caption-child-change-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/dynamic-caption-child-change-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/dynamic-caption-child-change-002-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/dynamic-caption-child-change-002-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/final-border-spacing-at-fragmentainer-boundary.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/final-border-spacing-at-fragmentainer-boundary.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/inside-flex-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/inside-flex-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/oof-in-cell-with-alignment-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/oof-in-cell-with-alignment-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/oof-in-cell-with-alignment-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/oof-in-cell-with-alignment-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/oof-in-cell-with-alignment-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/oof-in-cell-with-alignment-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/oof-in-cell-with-alignment-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/oof-in-cell-with-alignment-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/overflow-scroll-row.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/overflow-scroll-row.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/overflow-scroll-section.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/overflow-scroll-section.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/section-with-overflow-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/section-with-overflow-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/section-with-overflow-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/section-with-overflow-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/section-with-overflow-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/section-with-overflow-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/sections-and-captions-mixed-order-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/sections-and-captions-mixed-order-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/sections-and-captions-mixed-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/sections-and-captions-mixed-order.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/specified-block-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/specified-block-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/specified-block-size-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/specified-block-size-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/specified-block-size-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/specified-block-size-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/specified-block-size-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/specified-block-size-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/specified-block-size-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/specified-block-size-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/specified-block-size-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/specified-block-size-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/specified-block-size-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/specified-block-size-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/specified-block-size-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/specified-block-size-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/specified-block-size-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/specified-block-size-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-border-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-border-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-border-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-border-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-border-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-border-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-border-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-border-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-border-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-border-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-border-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-border-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-border-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-border-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-border-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-border-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-border-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-border-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-border-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-border-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-border-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-border-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-caption-and-cells-fixed-width-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-caption-and-cells-fixed-width-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-caption-and-cells-fixed-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-caption-and-cells-fixed-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-caption-and-cells-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-caption-and-cells-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-caption-and-cells.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-caption-and-cells.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-caption-with-block-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-caption-with-block-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-caption-with-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-caption-with-block.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-cell-expansion-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-cell-expansion-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-cell-expansion-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-cell-expansion-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-cell-expansion-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-cell-expansion-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-cell-expansion-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-cell-expansion-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-cell-expansion-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-cell-expansion-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-cell-expansion-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-cell-expansion-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-cell-expansion-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-cell-expansion-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-cell-expansion-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-cell-expansion-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-cell-expansion-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-cell-expansion-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-cell-expansion-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-cell-expansion-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-col-paint-htb-ltr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-col-paint-htb-ltr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-col-paint-htb-ltr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-col-paint-htb-ltr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-col-paint-vlr-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-col-paint-vlr-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-col-paint-vlr-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-col-paint-vlr-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-col-paint-vrl-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-col-paint-vrl-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-col-paint-vrl-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-col-paint-vrl-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-collapsed-borders-paint-at-boundary-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-collapsed-borders-paint-at-boundary-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-collapsed-borders-paint-at-boundary.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-collapsed-borders-paint-at-boundary.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-collapsed-borders-paint-htb-ltr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-collapsed-borders-paint-htb-ltr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-collapsed-borders-paint-htb-ltr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-collapsed-borders-paint-htb-ltr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-collapsed-borders-paint-vlr-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-collapsed-borders-paint-vlr-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-collapsed-borders-paint-vlr-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-collapsed-borders-paint-vlr-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-collapsed-borders-paint-vrl-ltr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-collapsed-borders-paint-vrl-ltr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-collapsed-borders-paint-vrl-ltr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-collapsed-borders-paint-vrl-ltr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-grid-paint-htb-ltr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-grid-paint-htb-ltr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-grid-paint-htb-ltr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-grid-paint-htb-ltr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-grid-paint-vlr-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-grid-paint-vlr-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-grid-paint-vlr-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-grid-paint-vlr-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-grid-paint-vrl-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-grid-paint-vrl-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-grid-paint-vrl-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-grid-paint-vrl-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-in-abspos-multicol-with-nested-meter-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-in-abspos-multicol-with-nested-meter-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-parts-offsetheight.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-parts-offsetheight.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-row-end-border-1-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-row-end-border-1-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-row-end-border-2-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-row-end-border-2-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-row-end-padding-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-row-end-padding-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-row-paint-htb-ltr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-row-paint-htb-ltr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-row-paint-htb-ltr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-row-paint-htb-ltr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-row-paint-vlr-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-row-paint-vlr-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-row-paint-vlr-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-row-paint-vlr-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-row-paint-vrl-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-row-paint-vrl-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-row-paint-vrl-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-row-paint-vrl-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-rowspan-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-rowspan-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-section-paint-htb-ltr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-section-paint-htb-ltr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-section-paint-htb-ltr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-section-paint-htb-ltr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-section-paint-vlr-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-section-paint-vlr-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-section-paint-vlr-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-section-paint-vlr-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-section-paint-vrl-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-section-paint-vrl-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/table-section-paint-vrl-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/table-section-paint-vrl-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/tall-bottom-aligned-cell-with-bottom-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/tall-bottom-aligned-cell-with-bottom-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/tall-padding-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/tall-padding-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/truncated-border-spacing-at-fragmentainer-end.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/truncated-border-spacing-at-fragmentainer-end.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/zero-height-repeated-footer-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/zero-height-repeated-footer-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/abspos-in-monolithic.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/abspos-in-monolithic.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/abspos-uncontained-text-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/abspos-uncontained-text-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/abspos-uncontained-text.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/abspos-uncontained-text.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/abspos-uncontained.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/abspos-uncontained.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/abspos.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/abspos.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/balanced-inner-multicol-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/balanced-inner-multicol-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/balanced-inner-multicol.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/balanced-inner-multicol.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/block-in-inline.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/block-in-inline.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/border-spacing-taller-than-fragmentainer-001-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/border-spacing-taller-than-fragmentainer-001-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/border-spacing-taller-than-fragmentainer-002-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/border-spacing-taller-than-fragmentainer-002-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/border-spacing-taller-than-fragmentainer-003-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/border-spacing-taller-than-fragmentainer-003-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/break-avoidance-in-bottom-caption.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/break-avoidance-in-bottom-caption.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/captions.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/captions.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/footer.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/footer.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/header-after-break.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/header-after-break.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/header-footer.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/header-footer.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/header.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/header.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/hit-test-relative-in-transform.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/hit-test-relative-in-transform.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/hit-test-relative.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/hit-test-relative.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/hit-test.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/hit-test.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/image.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/image.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/inline-block.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/inline-block.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/multicol.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/multicol.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/multiple-row-groups.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/multiple-row-groups.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/nested-repeated-header-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/nested-repeated-header-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/repeated-header-border-spacing.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/repeated-header-border-spacing.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/repeated-section-in-clipped-overflow-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/repeated-section-in-clipped-overflow-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/repeated-section-in-clipped-overflow-002.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/repeated-section-in-clipped-overflow-002.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/repeated-section-in-clipped-overflow-003.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/repeated-section-in-clipped-overflow-003.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/special-elements-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/special-elements-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/tall-monolithic-after-repeated-header.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/tall-monolithic-after-repeated-header.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/variable-fragmentainer-size-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/variable-fragmentainer-size-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/variable-fragmentainer-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/variable-fragmentainer-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/variable-fragmentainer-size-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/variable-fragmentainer-size-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/variable-fragmentainer-size-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/variable-fragmentainer-size-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/variable-fragmentainer-size-003-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/variable-fragmentainer-size-003-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/variable-fragmentainer-size-004-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/variable-fragmentainer-size-004-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/variable-fragmentainer-size-005-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/variable-fragmentainer-size-005-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-break/table/repeated-section/variable-fragmentainer-size-006-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-break/table/repeated-section/variable-fragmentainer-size-006-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

