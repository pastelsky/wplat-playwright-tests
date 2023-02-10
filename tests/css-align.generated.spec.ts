import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-align/baseline-of-scrollable-1a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/baseline-of-scrollable-1a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/baseline-of-scrollable-1b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/baseline-of-scrollable-1b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/baseline-of-scrollable-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/baseline-of-scrollable-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/ttwf-reftest-alignContent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/ttwf-reftest-alignContent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/animation/column-gap-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/animation/column-gap-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/animation/column-gap-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/animation/column-gap-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/animation/row-gap-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/animation/row-gap-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/animation/row-gap-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/animation/row-gap-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/baseline-rules/grid-item-input-type-number-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/baseline-rules/grid-item-input-type-number-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/baseline-rules/grid-item-input-type-number.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/baseline-rules/grid-item-input-type-number.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/baseline-rules/grid-item-input-type-text-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/baseline-rules/grid-item-input-type-text-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/baseline-rules/grid-item-input-type-text.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/baseline-rules/grid-item-input-type-text.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/baseline-rules/inline-table-inline-block-baseline-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/baseline-rules/inline-table-inline-block-baseline-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/baseline-rules/inline-table-inline-block-baseline-vert-rl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/baseline-rules/inline-table-inline-block-baseline-vert-rl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/baseline-rules/inline-table-inline-block-baseline-vert-rl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/baseline-rules/inline-table-inline-block-baseline-vert-rl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/baseline-rules/inline-table-inline-block-baseline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/baseline-rules/inline-table-inline-block-baseline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/baseline-rules/synthesized-baseline-flexbox-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/baseline-rules/synthesized-baseline-flexbox-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/baseline-rules/synthesized-baseline-grid-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/baseline-rules/synthesized-baseline-grid-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/baseline-rules/synthesized-baseline-inline-block-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/baseline-rules/synthesized-baseline-inline-block-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/baseline-rules/synthesized-baseline-table-cell-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/baseline-rules/synthesized-baseline-table-cell-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/baseline-rules/synthesized-baseline-table-cell-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/baseline-rules/synthesized-baseline-table-cell-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/parse-align-content-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/parse-align-content-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/parse-align-content-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/parse-align-content-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/parse-align-content-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/parse-align-content-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/parse-align-content-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/parse-align-content-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/parse-align-content-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/parse-align-content-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/parse-justify-content-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/parse-justify-content-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/parse-justify-content-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/parse-justify-content-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/parse-justify-content-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/parse-justify-content-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/parse-justify-content-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/parse-justify-content-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/parse-justify-content-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/parse-justify-content-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/place-content-shorthand-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/place-content-shorthand-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/place-content-shorthand-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/place-content-shorthand-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/place-content-shorthand-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/place-content-shorthand-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/place-content-shorthand-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/place-content-shorthand-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/place-content-shorthand-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/place-content-shorthand-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/place-content-shorthand-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/place-content-shorthand-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/place-content-shorthand-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/place-content-shorthand-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/content-distribution/place-content-shorthand-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/content-distribution/place-content-shorthand-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/justify-items-legacy-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/justify-items-legacy-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/parse-align-items-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/parse-align-items-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/parse-align-items-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/parse-align-items-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/parse-align-items-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/parse-align-items-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/parse-align-items-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/parse-align-items-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/parse-align-items-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/parse-align-items-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/parse-justify-items-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/parse-justify-items-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/parse-justify-items-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/parse-justify-items-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/parse-justify-items-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/parse-justify-items-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/parse-justify-items-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/parse-justify-items-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/parse-justify-items-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/parse-justify-items-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/parse-justify-items-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/parse-justify-items-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/place-items-shorthand-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/place-items-shorthand-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/place-items-shorthand-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/place-items-shorthand-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/place-items-shorthand-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/place-items-shorthand-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/place-items-shorthand-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/place-items-shorthand-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/place-items-shorthand-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/place-items-shorthand-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/place-items-shorthand-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/place-items-shorthand-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/default-alignment/shorthand-serialization-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/default-alignment/shorthand-serialization-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/distribution-values/space-evenly-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/distribution-values/space-evenly-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/column-gap-animation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/column-gap-animation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/column-gap-animation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/column-gap-animation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/column-gap-animation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/column-gap-animation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/column-gap-parsing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/column-gap-parsing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/gap-animation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/gap-animation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/gap-animation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/gap-animation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/gap-animation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/gap-animation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/gap-animation-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/gap-animation-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/gap-normal-computed-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/gap-normal-computed-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/gap-normal-used-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/gap-normal-used-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/gap-normal-used-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/gap-normal-used-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/gap-parsing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/gap-parsing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/grid-column-gap-parsing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/grid-column-gap-parsing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/grid-gap-parsing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/grid-gap-parsing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/grid-row-gap-parsing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/grid-row-gap-parsing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/row-gap-animation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/row-gap-animation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/row-gap-animation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/row-gap-animation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/row-gap-animation-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/row-gap-animation-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/gaps/row-gap-parsing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/gaps/row-gap-parsing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/align-content-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/align-content-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/align-content-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/align-content-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/align-content-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/align-content-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/align-items-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/align-items-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/align-items-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/align-items-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/align-items-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/align-items-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/align-self-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/align-self-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/align-self-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/align-self-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/align-self-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/align-self-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/align-tracks-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/align-tracks-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/align-tracks-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/align-tracks-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/align-tracks-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/align-tracks-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/column-gap-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/column-gap-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/column-gap-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/column-gap-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/column-gap-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/column-gap-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/gap-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/gap-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/gap-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/gap-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/gap-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/gap-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/gap-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/gap-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/justify-content-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/justify-content-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/justify-content-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/justify-content-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/justify-content-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/justify-content-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/justify-items-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/justify-items-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/justify-items-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/justify-items-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/justify-items-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/justify-items-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/justify-self-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/justify-self-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/justify-self-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/justify-self-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/justify-self-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/justify-self-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/justify-tracks-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/justify-tracks-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/justify-tracks-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/justify-tracks-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/justify-tracks-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/justify-tracks-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/place-content-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/place-content-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/place-content-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/place-content-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/place-content-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/place-content-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/place-content-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/place-content-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/place-items-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/place-items-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/place-items-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/place-items-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/place-items-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/place-items-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/place-items-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/place-items-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/place-self-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/place-self-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/place-self-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/place-self-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/place-self-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/place-self-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/place-self-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/place-self-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/row-gap-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/row-gap-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/row-gap-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/row-gap-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/parsing/row-gap-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/parsing/row-gap-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/reference/baseline-of-scrollable-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/reference/baseline-of-scrollable-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/reference/baseline-of-scrollable-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/reference/baseline-of-scrollable-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/reference/ttwf-reftest-alignContent-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/reference/ttwf-reftest-alignContent-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/parse-align-self-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/parse-align-self-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/parse-align-self-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/parse-align-self-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/parse-align-self-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/parse-align-self-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/parse-align-self-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/parse-align-self-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/parse-align-self-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/parse-align-self-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/parse-justify-self-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/parse-justify-self-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/parse-justify-self-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/parse-justify-self-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/parse-justify-self-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/parse-justify-self-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/parse-justify-self-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/parse-justify-self-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/parse-justify-self-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/parse-justify-self-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/place-self-shorthand-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/place-self-shorthand-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/place-self-shorthand-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/place-self-shorthand-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/place-self-shorthand-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/place-self-shorthand-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/place-self-shorthand-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/place-self-shorthand-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/place-self-shorthand-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/place-self-shorthand-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/place-self-shorthand-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/place-self-shorthand-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/self-align-safe-unsafe-flex-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/self-align-safe-unsafe-flex-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/self-align-safe-unsafe-flex-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/self-align-safe-unsafe-flex-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/self-align-safe-unsafe-flex-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/self-align-safe-unsafe-flex-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/self-align-safe-unsafe-flex-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/self-align-safe-unsafe-flex-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/self-align-safe-unsafe-flex-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/self-align-safe-unsafe-flex-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/self-align-safe-unsafe-flex-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/self-align-safe-unsafe-flex-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/self-align-safe-unsafe-grid-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/self-align-safe-unsafe-grid-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/self-align-safe-unsafe-grid-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/self-align-safe-unsafe-grid-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/self-align-safe-unsafe-grid-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/self-align-safe-unsafe-grid-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/self-align-safe-unsafe-grid-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/self-align-safe-unsafe-grid-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/self-align-safe-unsafe-grid-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/self-align-safe-unsafe-grid-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-align/self-alignment/self-align-safe-unsafe-grid-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-align/self-alignment/self-align-safe-unsafe-grid-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

