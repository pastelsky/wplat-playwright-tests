import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-box/box-chrome-crash-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/box-chrome-crash-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/animation/margin-bottom-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/animation/margin-bottom-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/animation/margin-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/animation/margin-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/animation/margin-left-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/animation/margin-left-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/animation/margin-right-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/animation/margin-right-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/animation/margin-top-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/animation/margin-top-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/animation/padding-bottom-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/animation/padding-bottom-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/animation/padding-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/animation/padding-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/animation/padding-left-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/animation/padding-left-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/animation/padding-right-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/animation/padding-right-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/animation/padding-top-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/animation/padding-top-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/block-container-block-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/block-container-block-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/block-container-block-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/block-container-block-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/block-container-block-end-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/block-container-block-end-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/block-container-block-end-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/block-container-block-end-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/block-container-block-start-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/block-container-block-start-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/block-container-block-start-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/block-container-block-start-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/block-container-non-adjoining-item-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/block-container-non-adjoining-item-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/block-container-non-adjoining-item.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/block-container-non-adjoining-item.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/block-container-replaced-block-end.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/block-container-replaced-block-end.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/block-container-replaced-block-start.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/block-container-replaced-block-start.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/block-container-replaced-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/block-container-replaced-block.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-block-end-trimmed-only-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-block-end-trimmed-only-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-block-end-trimmed-only.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-block-end-trimmed-only.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-block-start-trimmed-only-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-block-start-trimmed-only-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-block-start-trimmed-only.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-block-start-trimmed-only.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-block-trimmed-only-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-block-trimmed-only-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-block-trimmed-only.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-block-trimmed-only.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-column-block-multiline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-column-block-multiline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-column-grow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-column-grow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-column-inline-multiline-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-column-inline-multiline-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-column-inline-multiline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-column-inline-multiline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-column-orthogonal-item.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-column-orthogonal-item.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-column-shrink.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-column-shrink.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-inline-end-trimmed-only-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-inline-end-trimmed-only-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-inline-end-trimmed-only.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-inline-end-trimmed-only.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-inline-start-trimmed-only-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-inline-start-trimmed-only-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-inline-start-trimmed-only.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-inline-start-trimmed-only.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-inline-trimmed-only-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-inline-trimmed-only-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-inline-trimmed-only.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-inline-trimmed-only.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-row-block-multiline-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-row-block-multiline-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-row-block-multiline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-row-block-multiline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-row-grow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-row-grow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-row-inline-multiline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-row-inline-multiline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-row-orthogonal-item.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-row-orthogonal-item.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-row-shrink.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-row-shrink.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-trim-all-margins-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-trim-all-margins-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/flex-trim-all-margins.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/flex-trim-all-margins.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/grid-block-end-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/grid-block-end-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/grid-block-end.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/grid-block-end.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/grid-block-start-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/grid-block-start-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/grid-block-start.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/grid-block-start.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/grid-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/grid-block.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/grid-inline-end-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/grid-inline-end-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/grid-inline-end.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/grid-inline-end.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/grid-inline-start-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/grid-inline-start-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/grid-inline-start.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/grid-inline-start.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/grid-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/grid-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/margin-trim/grid-trim-ignores-collapsed-tracks.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/margin-trim/grid-trim-ignores-collapsed-tracks.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/clear-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/clear-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/clear-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/clear-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/clear-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/clear-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/float-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/float-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/float-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/float-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/float-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/float-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/height-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/height-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/height-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/height-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/margin-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/margin-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/margin-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/margin-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/margin-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/margin-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/margin-trim-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/margin-trim-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/margin-trim.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/margin-trim.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/margin-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/margin-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/max-height-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/max-height-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/max-height-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/max-height-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/max-width-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/max-width-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/max-width-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/max-width-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/overflow-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/overflow-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/overflow-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/overflow-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/padding-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/padding-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/padding-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/padding-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/padding-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/padding-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/padding-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/padding-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/visibility-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/visibility-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/visibility-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/visibility-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/visibility-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/visibility-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/width-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/width-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-box/parsing/width-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-box/parsing/width-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

