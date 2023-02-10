import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-text/altering-dom-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/altering-dom-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/ellisize-rtl-text-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/ellisize-rtl-text-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/removing-collapsible-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/removing-collapsible-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/removing-collapsible-spaces-before-float-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/removing-collapsible-spaces-before-float-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/whitespace-followed-by-cham-symbol-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/whitespace-followed-by-cham-symbol-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/animations/letter-spacing-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/animations/letter-spacing-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/animations/letter-spacing-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/animations/letter-spacing-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/animations/tab-size-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/animations/tab-size-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/animations/text-indent-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/animations/text-indent-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/animations/text-indent-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/animations/text-indent-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/animations/word-spacing-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/animations/word-spacing-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/animations/word-spacing-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/animations/word-spacing-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/bidi/bidi-lines-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/bidi/bidi-lines-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/bidi/bidi-lines-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/bidi/bidi-lines-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/bidi/bidi-tab-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/bidi/bidi-tab-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/boundary-shaping-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/boundary-shaping-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/boundary-shaping-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/boundary-shaping-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/boundary-shaping-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/boundary-shaping-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/boundary-shaping-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/boundary-shaping-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/boundary-shaping-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/boundary-shaping-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/boundary-shaping-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/boundary-shaping-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/boundary-shaping-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/boundary-shaping-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/boundary-shaping-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/boundary-shaping-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/boundary-shaping-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/boundary-shaping-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/boundary-shaping-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/boundary-shaping-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/crashtests/line-break-float-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/crashtests/line-break-float-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/crashtests/rendering-rtl-bidi-override-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/crashtests/rendering-rtl-bidi-override-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/crashtests/rendering-table-caption-with-list-item-and-svg-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/crashtests/rendering-table-caption-with-list-item-and-svg-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/crashtests/rendering-table-caption-with-negative-margins-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/crashtests/rendering-table-caption-with-negative-margins-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/crashtests/trailing-space-with-cr-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/crashtests/trailing-space-with-cr-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/crashtests/white-space-pre-wrap-chash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/crashtests/white-space-pre-wrap-chash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/crashtests/word-spacing-large-value.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/crashtests/word-spacing-large-value.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hanging-punctuation/hanging-punctuation-block-bound-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hanging-punctuation/hanging-punctuation-block-bound-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hanging-punctuation/hanging-punctuation-inline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hanging-punctuation/hanging-punctuation-inline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hanging-punctuation/hanging-punctuation-inline-bound-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hanging-punctuation/hanging-punctuation-inline-bound-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hanging-punctuation/hanging-scrollable-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hanging-punctuation/hanging-scrollable-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphenate-character-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphenate-character-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphenate-character-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphenate-character-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphenate-character-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphenate-character-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphenate-character-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphenate-character-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphenate-character-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphenate-character-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphenate-limit-chars-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphenate-limit-chars-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-auto-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-auto-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-auto-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-auto-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-auto-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-auto-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-auto-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-auto-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-auto-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-auto-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-auto-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-auto-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-auto-and-contenteditable-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-auto-and-contenteditable-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-auto-control-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-auto-control-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-auto-control.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-auto-control.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-auto-inline-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-auto-inline-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-auto-last-word-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-auto-last-word-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-auto-min-content-ref-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-auto-min-content-ref-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-auto-min-content-ref-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-auto-min-content-ref-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-auto-min-content.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-auto-min-content.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-character.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-character.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-manual-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-manual-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-manual-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-manual-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-manual-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-manual-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-manual-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-manual-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-manual-inline-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-manual-inline-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-manual-inline-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-manual-inline-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-manual-inline-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-manual-inline-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-none-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-none-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-none-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-none-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-none-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-none-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-none-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-none-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-none-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-none-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-out-of-flow-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-out-of-flow-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-out-of-flow-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-out-of-flow-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-overflow-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-overflow-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-punctuation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-punctuation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-shaping-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-shaping-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-shaping-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-shaping-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-span-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-span-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-span-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-span-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-vertical-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-vertical-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-vertical-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-vertical-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-vertical-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-vertical-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/hyphens-vertical-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/hyphens-vertical-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/shy-styling-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/shy-styling-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-042.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-042.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-043.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-043.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-044.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-044.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-045.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-045.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-046.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-046.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-047.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-047.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-048.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-048.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-049.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-049.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-050.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-050.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-051.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-051.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-052.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-052.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-060.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-060.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-061.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-061.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-062.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-062.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-063.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-063.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-064.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-064.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-065.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-065.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-066.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-066.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-067.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-067.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-068.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-068.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-069.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-069.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-070.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-070.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-071.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-071.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-072.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-072.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-073.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-073.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-074.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-074.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-075.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-075.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-076.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-076.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-077.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-077.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-078.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-078.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-080.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-080.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-081.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-081.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-082.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-082.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-083.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-083.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-084.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-084.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-085.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-085.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-086.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-086.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-090.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-090.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-091.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-091.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-092.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-092.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-093.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-093.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-095.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-095.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-096.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-096.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-097.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-097.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-098.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-098.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-099.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-099.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-100.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-100.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-101.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-101.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-102.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-102.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-103.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-103.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-104.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-104.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-105.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-105.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-106.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-106.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-107.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-107.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-108.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-108.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-109.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-109.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-110.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-110.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-111.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-111.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-112.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-112.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-113.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-113.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-114.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-114.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-115.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-115.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-116.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-116.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-117.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-117.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-118.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-118.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-120.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-120.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-121.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-121.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-122.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-122.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-123.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-123.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-124.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-124.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-125.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-125.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-126.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-126.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-127.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-127.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-128.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-128.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-130.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-130.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-baspglwj-131.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-baspglwj-131.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-042.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-042.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-043.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-043.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-044.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-044.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-045.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-045.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-046.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-046.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-047.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-047.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-049.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-049.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-050.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-050.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-051.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-051.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-052.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-052.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-053.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-053.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-054.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-054.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-055.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-055.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-056.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-056.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-057.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-057.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-058.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-058.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-059.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-059.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-060.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-060.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-061.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-061.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-062.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-062.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-063.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-063.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-064.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-064.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-065.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-065.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-100.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-100.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-101.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-101.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-102.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-102.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-103.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-103.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-104.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-104.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-105.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-105.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-106.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-106.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-107.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-107.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-108.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-108.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-109.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-109.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-110.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-110.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-111.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-111.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-112.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-112.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-113.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-113.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-114.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-114.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-115.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-115.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-116.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-116.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-117.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-117.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-119.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-119.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-120.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-120.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-121.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-121.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-122.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-122.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-123.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-123.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-124.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-124.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-125.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-125.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-126.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-126.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-127.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-127.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-128.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-128.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-129.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-129.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-130.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-130.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-131.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-131.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-132.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-132.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-133.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-133.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-134.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-134.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-135.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-135.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-136.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-136.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-137.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-137.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-138.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-138.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-139.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-139.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-140.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-140.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-141.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-141.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-142.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-142.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-143.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-143.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-144.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-144.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-145.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-145.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-146.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-146.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-147.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-147.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-148.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-148.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-149.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-149.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-150.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-150.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-151.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-151.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-152.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-152.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-153.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-153.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-155.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-155.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-156.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-156.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-157.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-157.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-158.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-158.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-159.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-159.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-160.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-160.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-161.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-161.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-162.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-162.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-163.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-163.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-164.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-164.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-165.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-165.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-166.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-166.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-167.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-167.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-168.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-168.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-169.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-169.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-170.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-170.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-171.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-171.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-200.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-200.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-201.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-201.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-202.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-202.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-203.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-203.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-204.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-204.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-205.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-205.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-206.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-206.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-207.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-207.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-208.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-208.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-209.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-209.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-210.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-210.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-211.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-211.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-212.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-212.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-213.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-213.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-214.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-214.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-215.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-215.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-217.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-217.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-218.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-218.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-219.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-219.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-220.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-220.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-221.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-221.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-222.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-222.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-223.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-223.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-225.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-225.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/css3-text-line-break-opclns-226.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/css3-text-line-break-opclns-226.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-200.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-200.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-201.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-201.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-202.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-202.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-203.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-203.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-204.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-204.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-205.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-205.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-206.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-206.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-211.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-211.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-212.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-212.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-bengali-yaphala-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-bengali-yaphala-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-bidi-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-bidi-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-bidi-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-bidi-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-control-chars-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-control-chars-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-end-of-line-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-end-of-line-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-ligatures-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-ligatures-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-ligatures-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-ligatures-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-ligatures-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-ligatures-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-ligatures-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-ligatures-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-nesting-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-nesting-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/letter-spacing-nesting-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/letter-spacing-nesting-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-and-white-space-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-and-white-space-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-and-white-space-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-and-white-space-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-and-white-space-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-and-white-space-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-and-white-space-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-and-white-space-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-and-white-space-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-and-white-space-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-and-white-space-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-and-white-space-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-and-white-space-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-and-white-space-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-and-white-space-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-and-white-space-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-and-white-space-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-and-white-space-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-overrides-uax-behavior-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-overrides-uax-behavior-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-overrides-uax-behavior-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-overrides-uax-behavior-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-overrides-uax-behavior-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-overrides-uax-behavior-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-overrides-uax-behavior-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-overrides-uax-behavior-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-overrides-uax-behavior-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-overrides-uax-behavior-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-overrides-uax-behavior-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-overrides-uax-behavior-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-overrides-uax-behavior-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-overrides-uax-behavior-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-overrides-uax-behavior-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-overrides-uax-behavior-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-overrides-uax-behavior-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-overrides-uax-behavior-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-overrides-uax-behavior-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-overrides-uax-behavior-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-overrides-uax-behavior-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-overrides-uax-behavior-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-overrides-uax-behavior-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-overrides-uax-behavior-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-overrides-uax-behavior-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-overrides-uax-behavior-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-overrides-uax-behavior-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-overrides-uax-behavior-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-overrides-uax-behavior-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-overrides-uax-behavior-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-anywhere-overrides-uax-behavior-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-anywhere-overrides-uax-behavior-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-loose-hyphens-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-loose-hyphens-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-loose-hyphens-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-loose-hyphens-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-loose-hyphens-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-loose-hyphens-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-normal-hyphens-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-normal-hyphens-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-normal-hyphens-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-normal-hyphens-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-normal-hyphens-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-normal-hyphens-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-shaping-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-shaping-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-strict-hyphens-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-strict-hyphens-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-strict-hyphens-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-strict-hyphens-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/line-break-strict-hyphens-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/line-break-strict-hyphens-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-atomic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-atomic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-atomic-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-atomic-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-atomic-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-atomic-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-atomic-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-atomic-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-atomic-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-atomic-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-atomic-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-atomic-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-atomic-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-atomic-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-atomic-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-atomic-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-atomic-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-atomic-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-atomic-nowrap-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-atomic-nowrap-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-ic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-ic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-ic-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-ic-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-ic-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-ic-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-replaced-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-replaced-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-replaced-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-replaced-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-replaced-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-replaced-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-replaced-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-replaced-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-replaced-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-replaced-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/line-breaking-replaced-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/line-breaking-replaced-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-removable-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-removable-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-removable-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-removable-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-removable-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-removable-3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-removable-4.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-removable-4.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-removable-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-removable-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-015-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-015-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-016-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-016-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-017-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-017-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-018-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-018-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-019-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-019-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-020-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-020-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-021-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-021-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-022-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-022-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-023-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-023-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-024-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-024-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-025-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-025-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-026-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-026-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-027-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-027-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-028-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-028-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-029-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-029-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-030-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-030-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-031-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-031-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-032-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-032-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-033-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-033-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-034-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-034-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-035-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-035-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-036-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-036-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-037-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-037-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-037.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-037.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-038-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-038-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-039-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-039-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-040-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-040-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-041-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-041-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-042-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-042-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-042.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-042.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-043-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-043-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-043.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-043.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-044-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-044-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-044.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-044.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-045-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-045-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-045.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-045.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-046-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-046-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-046.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-046.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-047-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-047-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-047.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-047.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-048-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-048-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-048.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-048.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-049-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-049-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-rules-049.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-rules-049.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-unremovable-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-unremovable-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-unremovable-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-unremovable-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-unremovable-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-unremovable-3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-unremovable-4.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-unremovable-4.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/segment-break-transformation-unremovable-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/segment-break-transformation-unremovable-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-fit-content-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-fit-content-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-inline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-inline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-inline-002.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-inline-002.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-inline-003.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-inline-003.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-inline-004.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-inline-004.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-span-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-span-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-anywhere-span-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-anywhere-span-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-break-word-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-break-word-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-break-word-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-break-word-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-break-word-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-break-word-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-break-word-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-break-word-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-break-word-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-break-word-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-break-word-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-break-word-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-break-word-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-break-word-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-break-word-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-break-word-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-break-word-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-break-word-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-break-word-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-break-word-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-break-word-fit-content-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-break-word-fit-content-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-break-word-keep-all-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-break-word-keep-all-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-break-word-long-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-break-word-long-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-break-word-span-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-break-word-span-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-break-word-span-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-break-word-span-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-break-word-white-space-crash-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-break-word-white-space-crash-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-break-word-white-space-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-break-word-white-space-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-cluster-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-cluster-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-cluster-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-cluster-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-min-content-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-min-content-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-min-content-size-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-min-content-size-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-min-content-size-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-min-content-size-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-min-content-size-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-min-content-size-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-min-content-size-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-min-content-size-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-min-content-size-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-min-content-size-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-min-content-size-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-min-content-size-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-min-content-size-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-min-content-size-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-min-content-size-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-min-content-size-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-normal-keep-all-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-normal-keep-all-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-shaping-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-shaping-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/overflow-wrap-shaping-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/overflow-wrap-shaping-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/word-wrap-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/word-wrap-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/word-wrap-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/word-wrap-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/word-wrap-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/word-wrap-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/word-wrap-alias.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/word-wrap-alias.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/hanging-punctuation-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/hanging-punctuation-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/hanging-punctuation-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/hanging-punctuation-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/hyphenate-character-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/hyphenate-character-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/hyphenate-character-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/hyphenate-character-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/hyphenate-character-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/hyphenate-character-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/hyphenate-limit-chars-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/hyphenate-limit-chars-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/hyphenate-limit-chars-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/hyphenate-limit-chars-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/hyphenate-limit-chars-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/hyphenate-limit-chars-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/hyphens-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/hyphens-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/hyphens-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/hyphens-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/hyphens-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/hyphens-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/letter-spacing-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/letter-spacing-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/letter-spacing-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/letter-spacing-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/letter-spacing-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/letter-spacing-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/line-break-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/line-break-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/line-break-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/line-break-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/line-break-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/line-break-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/overflow-wrap-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/overflow-wrap-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/overflow-wrap-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/overflow-wrap-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/overflow-wrap-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/overflow-wrap-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/tab-size-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/tab-size-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/tab-size-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/tab-size-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/tab-size-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/tab-size-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-align-all-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-align-all-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-align-all-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-align-all-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-align-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-align-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-align-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-align-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-align-last-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-align-last-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-align-last-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-align-last-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-align-last-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-align-last-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-align-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-align-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-group-align-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-group-align-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-group-align-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-group-align-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-indent-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-indent-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-indent-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-indent-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-indent-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-indent-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-justify-computed-legacy.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-justify-computed-legacy.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-justify-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-justify-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-justify-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-justify-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-justify-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-justify-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-transform-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-transform-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-transform-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-transform-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-transform-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-transform-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-wrap-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-wrap-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/text-wrap-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/text-wrap-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/white-space-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/white-space-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/white-space-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/white-space-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/white-space-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/white-space-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/word-boundary-detection-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/word-boundary-detection-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/word-boundary-detection-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/word-boundary-detection-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/word-boundary-detection-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/word-boundary-detection-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/word-boundary-expansion-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/word-boundary-expansion-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/word-boundary-expansion-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/word-boundary-expansion-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/word-boundary-expansion-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/word-boundary-expansion-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/word-break-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/word-break-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/word-break-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/word-break-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/word-break-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/word-break-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/word-spacing-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/word-spacing-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/word-spacing-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/word-spacing-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/word-spacing-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/word-spacing-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/word-wrap-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/word-wrap-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/word-wrap-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/word-wrap-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/parsing/word-wrap-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/parsing/word-wrap-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-arabic-diacritics-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-arabic-diacritics-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping-arabic-diacritics-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping-arabic-diacritics-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping_lig-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping_lig-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/shaping_lig-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/shaping_lig-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-min-rendered-width-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-min-rendered-width-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-min-rendered-width-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-min-rendered-width-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-block-ancestor-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-block-ancestor-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-block-ancestor.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-block-ancestor.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-computed-value-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-computed-value-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-inheritance-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-inheritance-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-inheritance-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-inheritance-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-inline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-inline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-inline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-inline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-inline-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-inline-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-inline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-inline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-integer-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-integer-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-integer-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-integer-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-integer-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-integer-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-integer-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-integer-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-integer-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-integer-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-integer-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-integer-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-length-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-length-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-length-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-length-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-length-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-length-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-percent-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-percent-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-spacing-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-spacing-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-spacing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-spacing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-spacing-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-spacing-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-spacing-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-spacing-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-spacing-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-spacing-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size-spacing-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size-spacing-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/tab-size/tab-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/tab-size/tab-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-center-last-center.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-center-last-center.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-center-last-default.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-center-last-default.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-center-last-end.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-center-last-end.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-center-last-justify.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-center-last-justify.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-center-last-start.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-center-last-start.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-default-last-default.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-default-last-default.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-last-center.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-last-center.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-last-default.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-last-default.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-last-end.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-last-end.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-last-justify.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-last-justify.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-end-last-start.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-end-last-start.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-inline-end-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-inline-end-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justify-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justify-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justify-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justify-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justify-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justify-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justify-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justify-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justify-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justify-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justify-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justify-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justify-last-center.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justify-last-center.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justify-last-default.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justify-last-default.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justify-last-end.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justify-last-end.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justify-last-justify.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justify-last-justify.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justify-last-start.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justify-last-start.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justify-shy-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justify-shy-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justifyall-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justifyall-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justifyall-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justifyall-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justifyall-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justifyall-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justifyall-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justifyall-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justifyall-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justifyall-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-justifyall-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-justifyall-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-center-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-center-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-center.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-center.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-empty-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-empty-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-end-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-end-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-end.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-end.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-justify-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-justify-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-justify-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-justify-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-justify-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-justify-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-justify.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-justify.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-simple-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-simple-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-simple.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-simple.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-start-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-start-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-start.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-start.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-last-wins-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-last-wins-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-match-parent-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-match-parent-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-match-parent-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-match-parent-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-match-parent-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-match-parent-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-match-parent-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-match-parent-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-match-parent-03.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-match-parent-03.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-match-parent-04.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-match-parent-04.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-match-parent-05-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-match-parent-05-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-match-parent-05.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-match-parent-05.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-match-parent-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-match-parent-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-match-parent-root-logical.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-match-parent-root-logical.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-match-parent-root-ltr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-match-parent-root-ltr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-match-parent-root-ltr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-match-parent-root-ltr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-match-parent-root-rtl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-match-parent-root-rtl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-match-parent-root-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-match-parent-root-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-last-center.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-last-center.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-last-default.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-last-default.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-last-end.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-last-end.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-last-justify.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-last-justify.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-start-last-start.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-start-last-start.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/text-align-webkit-match-parent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/text-align-webkit-match-parent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-encoding/shaping-join-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-encoding/shaping-join-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-encoding/shaping-join-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-encoding/shaping-join-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-encoding/shaping-join-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-encoding/shaping-join-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-encoding/shaping-no-join-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-encoding/shaping-no-join-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-encoding/shaping-no-join-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-encoding/shaping-no-join-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-encoding/shaping-no-join-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-encoding/shaping-no-join-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-encoding/shaping-tatweel-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-encoding/shaping-tatweel-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-encoding/shaping-tatweel-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-encoding/shaping-tatweel-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-encoding/shaping-tatweel-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-encoding/shaping-tatweel-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-center-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-center-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-center-vlr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-center-vlr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-center-vlr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-center-vlr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-center.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-center.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-end-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-end-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-end-vlr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-end-vlr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-end-vlr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-end-vlr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-end.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-end.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-left-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-left-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-left-vlr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-left-vlr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-left-vlr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-left-vlr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-left.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-left.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-right-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-right-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-right-vlr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-right-vlr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-right-vlr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-right-vlr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-right.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-right.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-start-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-start-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-start-vlr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-start-vlr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-start-vlr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-start-vlr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-group-align/text-group-align-start.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-group-align/text-group-align-start.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-indent/anonymous-flex-item-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-indent/anonymous-flex-item-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-indent/anonymous-grid-item-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-indent/anonymous-grid-item-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-indent/percentage-value-intrinsic-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-indent/percentage-value-intrinsic-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-indent/text-indent-each-line-hanging.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-indent/text-indent-each-line-hanging.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-indent/text-indent-long-line-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-indent/text-indent-long-line-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-indent/text-indent-percentage-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-indent/text-indent-percentage-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-indent/text-indent-percentage-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-indent/text-indent-percentage-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-indent/text-indent-percentage-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-indent/text-indent-percentage-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-indent/text-indent-tab-positions-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-indent/text-indent-tab-positions-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-indent/text-indent-with-absolute-pos-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-indent/text-indent-with-absolute-pos-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/distribute-alias.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/distribute-alias.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-and-trailing-spaces-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-and-trailing-spaces-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-and-trailing-spaces-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-and-trailing-spaces-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-and-trailing-spaces-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-and-trailing-spaces-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-and-trailing-spaces-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-and-trailing-spaces-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-and-trailing-spaces-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-and-trailing-spaces-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-and-trailing-spaces-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-and-trailing-spaces-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-distribute-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-distribute-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-inter-character-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-inter-character-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-inter-character-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-inter-character-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-inter-word-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-inter-word-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-inter-word-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-inter-word-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-none-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-none-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/text-justify-none-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/text-justify-none-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-033-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-033-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-capitalize-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-capitalize-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-copy-paste-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-copy-paste-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-full-size-kana-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-full-size-kana-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-full-size-kana-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-full-size-kana-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-full-size-kana-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-full-size-kana-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-full-size-kana-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-full-size-kana-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-full-size-kana-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-full-size-kana-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-full-size-kana-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-full-size-kana-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-full-size-kana-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-full-size-kana-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-fullwidth-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-fullwidth-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-fullwidth-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-fullwidth-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-fullwidth-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-fullwidth-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-fullwidth-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-fullwidth-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-multiple-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-multiple-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-shaping-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-shaping-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-shaping-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-shaping-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-shaping-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-shaping-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-tailoring-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-tailoring-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-tailoring-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-tailoring-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-tailoring-002a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-tailoring-002a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-tailoring-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-tailoring-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-tailoring-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-tailoring-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-tailoring-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-tailoring-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-033.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-033.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-038.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-038.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-039.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-039.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-040.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-040.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-042.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-042.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-043.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-043.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-044.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-044.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-101.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-101.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-102.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-102.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-103.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-103.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-104.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-104.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/text-transform-upperlower-105.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/text-transform-upperlower-105.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/append-whitespace-only-node-crash-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/append-whitespace-only-node-crash-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-051.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-051.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-052.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-052.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-char-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-char-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-before-first-ideographic-char-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-before-first-ideographic-char-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-newline-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-newline-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-newline-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-newline-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-newline-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-newline-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-newline-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-newline-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-newline-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-newline-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-newline-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-newline-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-tab-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-tab-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-tab-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-tab-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-tab-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-tab-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-tab-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-tab-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-tab-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-tab-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-tab-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-tab-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-ideographic-space-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-ideographic-space-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-ideographic-space-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-ideographic-space-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-ideographic-space-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-ideographic-space-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-ideographic-space-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-ideographic-space-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-ideographic-space-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-ideographic-space-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-ideographic-space-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-ideographic-space-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-ideographic-space-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-ideographic-space-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-ideographic-space-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-ideographic-space-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-ideographic-space-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-ideographic-space-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-ideographic-space-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-ideographic-space-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-overflow-wrap-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-overflow-wrap-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-overflow-wrap-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-overflow-wrap-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-overflow-wrap-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-overflow-wrap-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-overflow-wrap-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-overflow-wrap-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-overflow-wrap-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-overflow-wrap-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-overflow-wrap-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-overflow-wrap-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-overflow-wrap-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-overflow-wrap-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-overflow-wrap-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-overflow-wrap-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-overflow-wrap-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-overflow-wrap-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/break-spaces-with-overflow-wrap-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/break-spaces-with-overflow-wrap-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-00B.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-00B.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-00C.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-00C.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-00D.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-00D.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-00E.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-00E.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-00F.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-00F.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-01A.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-01A.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-01B.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-01B.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-01C.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-01C.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-01D.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-01D.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-01E.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-01E.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-01F.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-01F.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-07F.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-07F.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-080.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-080.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-081.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-081.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-082.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-082.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-083.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-083.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-084.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-084.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-085.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-085.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-086.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-086.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-087.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-087.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-088.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-088.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-089.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-089.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-08A.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-08A.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-08B.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-08B.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-08C.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-08C.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-08D.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-08D.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-08E.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-08E.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-08F.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-08F.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-090.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-090.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-091.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-091.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-092.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-092.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-093.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-093.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-094.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-094.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-095.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-095.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-096.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-096.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-097.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-097.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-098.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-098.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-099.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-099.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-09A.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-09A.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-09B.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-09B.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-09C.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-09C.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-09D.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-09D.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-09E.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-09E.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/control-chars-09F.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/control-chars-09F.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/display-contents-remove-whitespace-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/display-contents-remove-whitespace-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/eol-spaces-bidi-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/eol-spaces-bidi-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/eol-spaces-bidi-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/eol-spaces-bidi-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/eol-spaces-bidi-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/eol-spaces-bidi-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/full-width-leading-spaces-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/full-width-leading-spaces-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/full-width-leading-spaces-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/full-width-leading-spaces-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/full-width-leading-spaces-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/full-width-leading-spaces-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/full-width-leading-spaces-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/full-width-leading-spaces-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/full-width-leading-spaces-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/full-width-leading-spaces-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/line-edge-white-space-collapse-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/line-edge-white-space-collapse-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/line-edge-white-space-collapse-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/line-edge-white-space-collapse-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/lone-cr-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/lone-cr-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/lone-cr-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/lone-cr-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/nowrap-wbr-and-space-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/nowrap-wbr-and-space-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-float-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-float-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-line-051.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-line-051.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-line-052.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-line-052.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-line-br-with-whitespace-child-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-line-br-with-whitespace-child-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-line-with-space-and-newline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-line-with-space-and-newline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-with-whitespace-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-with-whitespace-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-051.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-051.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-052.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-052.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-float-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-float-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-leading-spaces-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-leading-spaces-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-leading-spaces-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-leading-spaces-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-leading-spaces-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-leading-spaces-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-leading-spaces-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-leading-spaces-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-leading-spaces-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-leading-spaces-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-leading-spaces-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-leading-spaces-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-leading-spaces-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-leading-spaces-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-leading-spaces-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-leading-spaces-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-leading-spaces-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-leading-spaces-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-leading-spaces-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-leading-spaces-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-leading-spaces-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-leading-spaces-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-leading-spaces-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-leading-spaces-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-leading-spaces-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-leading-spaces-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-leading-spaces-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-leading-spaces-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-leading-spaces-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-leading-spaces-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-leading-spaces-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-leading-spaces-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-leading-spaces-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-leading-spaces-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-tab-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-tab-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-tab-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-tab-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-tab-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-tab-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-tab-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-tab-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-tab-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-tab-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/pre-wrap-tab-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/pre-wrap-tab-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/remove-slotted-with-whitespace-sibling.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/remove-slotted-with-whitespace-sibling.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-000.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-000.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-002.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-002.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-003.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-003.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-004.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-004.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-005.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-005.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-006.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-006.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-007.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-007.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-008.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-008.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-009.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-009.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-010.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-010.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-011.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-011.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-012.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-012.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-014.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-014.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-015.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-015.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-016.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-016.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-017.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-017.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-018.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-018.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/seg-break-transformation-019.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/seg-break-transformation-019.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/tab-bidi-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/tab-bidi-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/tab-stop-threshold-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/tab-stop-threshold-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/tab-stop-threshold-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/tab-stop-threshold-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/tab-stop-threshold-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/tab-stop-threshold-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/tab-stop-threshold-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/tab-stop-threshold-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/tab-stop-threshold-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/tab-stop-threshold-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/tab-stop-threshold-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/tab-stop-threshold-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/textarea-break-spaces-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/textarea-break-spaces-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/textarea-break-spaces-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/textarea-break-spaces-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/textarea-pre-wrap-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/textarea-pre-wrap-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/textarea-pre-wrap-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/textarea-pre-wrap-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/textarea-pre-wrap-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/textarea-pre-wrap-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/textarea-pre-wrap-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/textarea-pre-wrap-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/textarea-pre-wrap-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/textarea-pre-wrap-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/textarea-pre-wrap-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/textarea-pre-wrap-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/textarea-pre-wrap-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/textarea-pre-wrap-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/textarea-pre-wrap-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/textarea-pre-wrap-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/textarea-pre-wrap-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/textarea-pre-wrap-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/textarea-pre-wrap-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/textarea-pre-wrap-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/textarea-pre-wrap-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/textarea-pre-wrap-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-break-spaces-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-break-spaces-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-break-spaces-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-break-spaces-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-break-spaces-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-break-spaces-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-break-spaces-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-break-spaces-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-break-spaces-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-break-spaces-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-break-spaces-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-break-spaces-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-break-spaces-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-break-spaces-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ideographic-space-break-spaces-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ideographic-space-break-spaces-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ogham-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ogham-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ogham-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ogham-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-ogham-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-ogham-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-break-spaces-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-break-spaces-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-break-spaces-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-break-spaces-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-break-spaces-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-break-spaces-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-break-spaces-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-break-spaces-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-break-spaces-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-break-spaces-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-break-spaces-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-break-spaces-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-break-spaces-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-break-spaces-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-break-spaces-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-break-spaces-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-break-spaces-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-break-spaces-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-break-spaces-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-break-spaces-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-break-spaces-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-break-spaces-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-break-spaces-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-break-spaces-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-break-spaces-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-break-spaces-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-break-spaces-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-break-spaces-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-other-space-separators-break-spaces-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-other-space-separators-break-spaces-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-space-align-start.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-space-align-start.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-space-and-text-alignment-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-space-and-text-alignment-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-space-and-text-alignment-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-space-and-text-alignment-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-space-and-text-alignment-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-space-and-text-alignment-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-space-and-text-alignment-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-space-and-text-alignment-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-space-and-text-alignment-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-space-and-text-alignment-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-space-and-text-alignment-rtl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-space-and-text-alignment-rtl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-space-and-text-alignment-rtl-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-space-and-text-alignment-rtl-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-space-and-text-alignment-rtl-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-space-and-text-alignment-rtl-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-space-and-text-alignment-rtl-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-space-and-text-alignment-rtl-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-space-and-text-alignment-rtl-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-space-and-text-alignment-rtl-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-space-before-br-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-space-before-br-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-space-in-inline-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-space-in-inline-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-space-position-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-space-position-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/trailing-space-rtl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/trailing-space-rtl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-applies-to-text-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-applies-to-text-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-collapse-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-collapse-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-collapse-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-collapse-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-collapse-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-collapse-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-empty-text-sibling.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-empty-text-sibling.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-intrinsic-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-intrinsic-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-intrinsic-size-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-intrinsic-size-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-intrinsic-size-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-intrinsic-size-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-intrinsic-size-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-intrinsic-size-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-intrinsic-size-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-intrinsic-size-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-intrinsic-size-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-intrinsic-size-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-intrinsic-size-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-intrinsic-size-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-intrinsic-size-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-intrinsic-size-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-intrinsic-size-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-intrinsic-size-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-intrinsic-size-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-intrinsic-size-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-intrinsic-size-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-intrinsic-size-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-intrinsic-size-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-intrinsic-size-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-intrinsic-size-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-intrinsic-size-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-intrinsic-size-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-intrinsic-size-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-letter-spacing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-letter-spacing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-normal-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-normal-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-nowrap-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-nowrap-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-051.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-051.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-052.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-052.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-wrap-trailing-spaces-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-wrap-trailing-spaces-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-wrap-trailing-spaces-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-wrap-trailing-spaces-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-wrap-trailing-spaces-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-wrap-trailing-spaces-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-wrap-trailing-spaces-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-wrap-trailing-spaces-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-wrap-trailing-spaces-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-wrap-trailing-spaces-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-wrap-trailing-spaces-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-wrap-trailing-spaces-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-wrap-trailing-spaces-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-wrap-trailing-spaces-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-wrap-trailing-spaces-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-wrap-trailing-spaces-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-wrap-trailing-spaces-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-wrap-trailing-spaces-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-wrap-trailing-spaces-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-wrap-trailing-spaces-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-wrap-trailing-spaces-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-wrap-trailing-spaces-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-wrap-trailing-spaces-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-wrap-trailing-spaces-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-wrap-trailing-spaces-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-wrap-trailing-spaces-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-wrap-trailing-spaces-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-wrap-trailing-spaces-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-wrap-trailing-spaces-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-wrap-trailing-spaces-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-wrap-trailing-spaces-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-wrap-trailing-spaces-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-pre-wrap-trailing-spaces-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-pre-wrap-trailing-spaces-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-wrap-after-nowrap-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-wrap-after-nowrap-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-zero-fontsize-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-zero-fontsize-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/white-space-zero-fontsize-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/white-space-zero-fontsize-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/ws-break-spaces-applies-to-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/ws-break-spaces-applies-to-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/ws-break-spaces-applies-to-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/ws-break-spaces-applies-to-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/ws-break-spaces-applies-to-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/ws-break-spaces-applies-to-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/ws-break-spaces-applies-to-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/ws-break-spaces-applies-to-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/ws-break-spaces-applies-to-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/ws-break-spaces-applies-to-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/ws-break-spaces-applies-to-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/ws-break-spaces-applies-to-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/ws-break-spaces-applies-to-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/ws-break-spaces-applies-to-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/ws-break-spaces-applies-to-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/ws-break-spaces-applies-to-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/ws-break-spaces-applies-to-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/ws-break-spaces-applies-to-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/ws-break-spaces-applies-to-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/ws-break-spaces-applies-to-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/ws-break-spaces-applies-to-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/ws-break-spaces-applies-to-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/ws-break-spaces-applies-to-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/ws-break-spaces-applies-to-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/ws-break-spaces-applies-to-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/ws-break-spaces-applies-to-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/ws-break-spaces-applies-to-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/ws-break-spaces-applies-to-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-015-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-015-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-101.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-101.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-102.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-102.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-103.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-103.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-104.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-104.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-105.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-105.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-106.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-106.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-107.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-107.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-108.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-108.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-109.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-109.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-110.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-110.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-111.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-111.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-112.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-112.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-113.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-113.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-114.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-114.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-115.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-115.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-116.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-116.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-117.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-117.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-118.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-118.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-119.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-119.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-120.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-120.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-121.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-121.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-122.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-122.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-123.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-123.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-124.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-124.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-125.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-125.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-126.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-126.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-127.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-127.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-128.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-128.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/word-boundary-129.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/word-boundary-129.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/break-boundary-2-chars-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/break-boundary-2-chars-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/break-boundary-2-chars-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/break-boundary-2-chars-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-062.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-062.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-ethiopic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-ethiopic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-inline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-inline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-inline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-inline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-inline-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-inline-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-inline-004.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-inline-004.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-inline-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-inline-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-inline-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-inline-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-inline-007.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-inline-007.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-inline-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-inline-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-inline-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-inline-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-all-inline-010.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-all-inline-010.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-word-crash-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-word-crash-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-word-overflow-wrap-interactions-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-word-overflow-wrap-interactions-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-break-word-overflow-wrap-interactions.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-break-word-overflow-wrap-interactions.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-keep-all-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-keep-all-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-keep-all-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-keep-all-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-keep-all-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-keep-all-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-keep-all-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-keep-all-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-keep-all-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-keep-all-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-keep-all-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-keep-all-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-keep-all-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-keep-all-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-keep-all-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-keep-all-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-keep-all-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-keep-all-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-keep-all-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-keep-all-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-keep-all-063.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-keep-all-063.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-min-content-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-min-content-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-min-content-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-min-content-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-min-content-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-min-content-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-min-content-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-min-content-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-min-content-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-min-content-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-min-content-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-min-content-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-min-content-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-min-content-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-normal-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-normal-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-normal-ar-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-normal-ar-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-normal-bo-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-normal-bo-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-normal-en-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-normal-en-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-normal-ethiopic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-normal-ethiopic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-normal-hi-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-normal-hi-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-normal-ja-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-normal-ja-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-normal-ja-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-normal-ja-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-normal-ja-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-normal-ja-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-normal-ja-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-normal-ja-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-normal-km-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-normal-km-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-normal-ko-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-normal-ko-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-normal-lo-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-normal-lo-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-normal-my-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-normal-my-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-normal-tdd-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-normal-tdd-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-normal-th-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-normal-th-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/word-break-normal-zh-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/word-break-normal-zh-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-spacing/word-spacing-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-spacing/word-spacing-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-spacing/word-spacing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-spacing/word-spacing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-spacing/word-spacing-computed-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-spacing/word-spacing-computed-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-spacing/word-spacing-negative-value-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-spacing/word-spacing-negative-value-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/writing-system/writing-system-font-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/writing-system/writing-system-font-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/writing-system/writing-system-line-break-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/writing-system/writing-system-line-break-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/writing-system/writing-system-line-break-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/writing-system/writing-system-line-break-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/writing-system/writing-system-segment-break-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/writing-system/writing-system-segment-break-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/writing-system/writing-system-text-transform-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/writing-system/writing-system-text-transform-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/bidi/reference/bidi-lines-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/bidi/reference/bidi-lines-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/bidi/reference/bidi-lines-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/bidi/reference/bidi-lines-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/bidi/reference/bidi-tab-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/bidi/reference/bidi-tab-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/reference/boundary-shaping-001.ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/reference/boundary-shaping-001.ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/reference/boundary-shaping-002.ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/reference/boundary-shaping-002.ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/reference/boundary-shaping-003.ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/reference/boundary-shaping-003.ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/reference/boundary-shaping-004.ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/reference/boundary-shaping-004.ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/reference/boundary-shaping-005.ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/reference/boundary-shaping-005.ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/reference/boundary-shaping-006.ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/reference/boundary-shaping-006.ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/reference/boundary-shaping-007.ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/reference/boundary-shaping-007.ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/reference/boundary-shaping-008.ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/reference/boundary-shaping-008.ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/reference/boundary-shaping-009.ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/reference/boundary-shaping-009.ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/boundary-shaping/reference/boundary-shaping-010.ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/boundary-shaping/reference/boundary-shaping-010.ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hanging-punctuation/reference/hanging-punctuation-block-bound-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hanging-punctuation/reference/hanging-punctuation-block-bound-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hanging-punctuation/reference/hanging-punctuation-inline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hanging-punctuation/reference/hanging-punctuation-inline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hanging-punctuation/reference/hanging-punctuation-inline-bound-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hanging-punctuation/reference/hanging-punctuation-inline-bound-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hanging-punctuation/reference/hanging-scrollable-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hanging-punctuation/reference/hanging-scrollable-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/hyphens-i18n-auto-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/hyphens-i18n-auto-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/hyphens-i18n-auto-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/hyphens-i18n-auto-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/hyphens-i18n-auto-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/hyphens-i18n-auto-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/hyphens-i18n-auto-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/hyphens-i18n-auto-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/hyphens-i18n-auto-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/hyphens-i18n-auto-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/hyphens-i18n-manual-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/hyphens-i18n-manual-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/hyphens-i18n-manual-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/hyphens-i18n-manual-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/hyphens-i18n-manual-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/hyphens-i18n-manual-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/hyphens-i18n-manual-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/hyphens-i18n-manual-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/hyphens-i18n-manual-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/hyphens-i18n-manual-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphenate-character-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphenate-character-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphenate-character-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphenate-character-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphenate-character-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphenate-character-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphenate-character-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphenate-character-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphenate-limit-chars-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphenate-limit-chars-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-auto-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-auto-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-auto-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-auto-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-auto-004H-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-auto-004H-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-auto-004M-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-auto-004M-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-auto-005H-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-auto-005H-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-auto-005M-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-auto-005M-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-auto-010H-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-auto-010H-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-auto-010M-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-auto-010M-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-auto-inline-010H-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-auto-inline-010H-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-auto-inline-010M-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-auto-inline-010M-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-auto-last-word-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-auto-last-word-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-auto-last-word-001-ref2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-auto-last-word-001-ref2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-character-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-character-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-manual-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-manual-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-manual-011H-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-manual-011H-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-manual-011M-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-manual-011M-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-manual-013H-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-manual-013H-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-manual-013M-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-manual-013M-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-manual-inline-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-manual-inline-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-manual-inline-011H-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-manual-inline-011H-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-manual-inline-011M-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-manual-inline-011M-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-manual-inline-012H-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-manual-inline-012H-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-manual-inline-012M-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-manual-inline-012M-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-out-of-flow-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-out-of-flow-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-overflow-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-overflow-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-punctuation-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-punctuation-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-shaping-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-shaping-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-shaping-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-shaping-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-span-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-span-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-span-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-span-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-vertical-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-vertical-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-vertical-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-vertical-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-vertical-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-vertical-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/hyphens-vertical-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/hyphens-vertical-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/shy-styling-001-alt-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/shy-styling-001-alt-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/reference/shy-styling-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/reference/shy-styling-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-cj-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-cj-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-cj-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-cj-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-cj-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-cj-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-cpm-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-cpm-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-cpm-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-cpm-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-cpm-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-cpm-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-hyphens-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-hyphens-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-hyphens-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-hyphens-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-hyphens-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-hyphens-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-in-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-in-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-in-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-in-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-in-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-in-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-iteration-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-iteration-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-iteration-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-iteration-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-iteration-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-iteration-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-po-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-po-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-po-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-po-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-po-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-po-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-pr-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-pr-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-pr-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-pr-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/ja/css-text-line-break-ja-pr-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/ja/css-text-line-break-ja-pr-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-cj-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-cj-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-cj-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-cj-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-cj-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-cj-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-cpm-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-cpm-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-cpm-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-cpm-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-cpm-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-cpm-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-hyphens-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-hyphens-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-hyphens-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-hyphens-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-hyphens-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-hyphens-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-in-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-in-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-in-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-in-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-in-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-in-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-iteration-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-iteration-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-iteration-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-iteration-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-iteration-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-iteration-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-po-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-po-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-po-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-po-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-po-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-po-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-pr-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-pr-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-pr-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-pr-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/other-lang/css-text-line-break-de-pr-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/other-lang/css-text-line-break-de-pr-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-015-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-015-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-016-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-016-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-017-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-017-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-018-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-018-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-019-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-019-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-020-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-020-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-021-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-021-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-022-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-022-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-023-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-023-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-024-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-024-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-025-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-025-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-026-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-026-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-027-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-027-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-028-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-028-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-029-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-029-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-030-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-030-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-031-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-031-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-032-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-032-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-033-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-033-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-034-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-034-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-035-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-035-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-036-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-036-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-037-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-037-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-038-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-038-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-039-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-039-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-040-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-040-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-041-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-041-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-042-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-042-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-043-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-043-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-044-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-044-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-045-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-045-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-046-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-046-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-047-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-047-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-049-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-049-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-050-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-050-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-051-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-051-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-052-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-052-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-053-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-053-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-054-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-054-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-055-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-055-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-056-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-056-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-057-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-057-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-058-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-058-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-059-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-059-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-060-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-060-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-061-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-061-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-062-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-062-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-063-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-063-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-064-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-064-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-065-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-065-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-100-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-100-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-101-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-101-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-102-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-102-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-103-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-103-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-104-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-104-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-105-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-105-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-106-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-106-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-107-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-107-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-108-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-108-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-109-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-109-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-110-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-110-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-111-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-111-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-112-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-112-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-113-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-113-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-114-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-114-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-115-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-115-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-116-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-116-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-117-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-117-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-119-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-119-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-120-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-120-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-121-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-121-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-122-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-122-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-123-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-123-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-124-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-124-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-125-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-125-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-126-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-126-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-127-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-127-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-128-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-128-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-129-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-129-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-130-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-130-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-131-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-131-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-132-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-132-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-133-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-133-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-134-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-134-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-135-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-135-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-136-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-136-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-137-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-137-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-138-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-138-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-139-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-139-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-140-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-140-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-141-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-141-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-142-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-142-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-143-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-143-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-144-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-144-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-145-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-145-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-146-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-146-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-147-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-147-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-148-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-148-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-149-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-149-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-150-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-150-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-151-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-151-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-152-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-152-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-153-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-153-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-155-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-155-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-156-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-156-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-157-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-157-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-158-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-158-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-159-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-159-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-160-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-160-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-161-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-161-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-162-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-162-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-163-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-163-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-164-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-164-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-165-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-165-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-166-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-166-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-167-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-167-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-168-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-168-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-169-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-169-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-170-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-170-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-171-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-171-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-200-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-200-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-201-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-201-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-202-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-202-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-203-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-203-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-204-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-204-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-205-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-205-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-206-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-206-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-207-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-207-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-208-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-208-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-209-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-209-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-210-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-210-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-211-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-211-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-212-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-212-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-213-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-213-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-214-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-214-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-215-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-215-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-217-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-217-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-218-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-218-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-219-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-219-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-220-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-220-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-221-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-221-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-222-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-222-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-223-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-223-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-225-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-225-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-226-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-226-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-250-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-250-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-251-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-251-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-252-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-252-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-253-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-253-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-254-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-254-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-255-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-255-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-256-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-256-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-257-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-257-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-258-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-258-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-259-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-259-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-260-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-260-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-261-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-261-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-262-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-262-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-263-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-263-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-264-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-264-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-265-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-265-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-266-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-266-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-267-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-267-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-268-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-268-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/reference/css3-text-line-break-opclns-269-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/reference/css3-text-line-break-opclns-269-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-cj-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-cj-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-cj-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-cj-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-cj-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-cj-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-cpm-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-cpm-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-cpm-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-cpm-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-cpm-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-cpm-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-hyphens-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-hyphens-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-hyphens-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-hyphens-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-hyphens-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-hyphens-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-in-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-in-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-in-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-in-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-in-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-in-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-iteration-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-iteration-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-iteration-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-iteration-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-iteration-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-iteration-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-po-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-po-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-po-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-po-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-po-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-po-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-pr-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-pr-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-pr-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-pr-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/unknown-lang/css-text-line-break-pr-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/unknown-lang/css-text-line-break-pr-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-cj-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-cj-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-cj-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-cj-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-cj-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-cj-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-cpm-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-cpm-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-cpm-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-cpm-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-cpm-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-cpm-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-hyphens-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-hyphens-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-hyphens-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-hyphens-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-hyphens-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-hyphens-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-in-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-in-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-in-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-in-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-in-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-in-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-iteration-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-iteration-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-iteration-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-iteration-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-iteration-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-iteration-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-po-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-po-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-po-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-po-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-po-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-po-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-pr-loose.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-pr-loose.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-pr-normal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-pr-normal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/i18n/zh/css-text-line-break-zh-pr-strict.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/i18n/zh/css-text-line-break-zh-pr-strict.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-200-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-200-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-201-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-201-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-202-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-202-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-203-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-203-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-204-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-204-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-205-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-205-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-206-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-206-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-211-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-211-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-212-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-212-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-bengali-yaphala-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-bengali-yaphala-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-bidi-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-bidi-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-bidi-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-bidi-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-control-chars-001.ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-control-chars-001.ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-end-of-line-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-end-of-line-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-ligatures-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-ligatures-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-ligatures-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-ligatures-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-ligatures-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-ligatures-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-ligatures-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-ligatures-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-nesting-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-nesting-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/letter-spacing/reference/letter-spacing-nesting-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/letter-spacing/reference/letter-spacing-nesting-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/reference/line-break-anywhere-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/reference/line-break-anywhere-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/reference/line-break-anywhere-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/reference/line-break-anywhere-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/reference/line-break-anywhere-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/reference/line-break-anywhere-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/reference/line-break-loose-hyphens-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/reference/line-break-loose-hyphens-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/reference/line-break-loose-hyphens-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/reference/line-break-loose-hyphens-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/reference/line-break-loose-hyphens-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/reference/line-break-loose-hyphens-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/reference/line-break-normal-hyphens-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/reference/line-break-normal-hyphens-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/reference/line-break-normal-hyphens-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/reference/line-break-normal-hyphens-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-break/reference/line-break-shaping-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-break/reference/line-break-shaping-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-015-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-015-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-016-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-016-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-017-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-017-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-018-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-018-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-019-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-019-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-021-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-021-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-023-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-023-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-024-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-024-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-025-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-025-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-026-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-026-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-027-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-027-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-atomic-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-atomic-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-atomic-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-atomic-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-atomic-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-atomic-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-atomic-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-atomic-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-atomic-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-atomic-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-ic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-ic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-replaced-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-replaced-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-replaced-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-replaced-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-replaced-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-replaced-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-replaced-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-replaced-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-breaking-replaced-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-breaking-replaced-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/line-breaking/reference/line-reabking-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/line-breaking/reference/line-reabking-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/reference/overflow-wrap-break-word-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/reference/overflow-wrap-break-word-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/reference/overflow-wrap-break-word-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/reference/overflow-wrap-break-word-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/reference/overflow-wrap-break-word-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/reference/overflow-wrap-break-word-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/reference/overflow-wrap-break-word-fit-content-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/reference/overflow-wrap-break-word-fit-content-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/reference/overflow-wrap-break-word-span-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/reference/overflow-wrap-break-word-span-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/reference/overflow-wrap-cluster-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/reference/overflow-wrap-cluster-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/reference/overflow-wrap-min-content-size-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/reference/overflow-wrap-min-content-size-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/reference/overflow-wrap-min-content-size-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/reference/overflow-wrap-min-content-size-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/reference/overflow-wrap-min-content-size-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/reference/overflow-wrap-min-content-size-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/reference/overflow-wrap-min-content-size-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/reference/overflow-wrap-min-content-size-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/reference/overflow-wrap-min-content-size-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/reference/overflow-wrap-min-content-size-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/reference/overflow-wrap-normal-keep-all-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/reference/overflow-wrap-normal-keep-all-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/overflow-wrap/reference/overflow-wrap-shaping-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/overflow-wrap/reference/overflow-wrap-shaping-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-000-sanity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-000-sanity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-001-sanity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-001-sanity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-002-sanity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-002-sanity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-003-sanity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-003-sanity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-008-sanity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-008-sanity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-009-sanity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-009-sanity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-010-sanity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-010-sanity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-011-sanity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-011-sanity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-012-sanity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-012-sanity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-014-sanity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-014-sanity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-016-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-016-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-016-sanity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-016-sanity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-020-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-020-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-020-sanity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-020-sanity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-021-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-021-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-021-sanity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-021-sanity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-022-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-022-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-022-sanity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-022-sanity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-023-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-023-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-023-sanity-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-023-sanity-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-023-sanity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-023-sanity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-024-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-024-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-024-sanity-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-024-sanity-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-024-sanity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-024-sanity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-025-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-025-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-025-sanity-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-025-sanity-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-025-sanity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-025-sanity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-arabic-diacritics-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-arabic-diacritics-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping-arabic-diacritics-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping-arabic-diacritics-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping_lig-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping_lig-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/shaping/reference/shaping_lig-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/shaping/reference/shaping_lig-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-end-ref-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-end-ref-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-end-ref-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-end-ref-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-end-ref-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-end-ref-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-end-ref-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-end-ref-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-end-ref-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-end-ref-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-end-ref-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-end-ref-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-end-ref-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-end-ref-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-end-ref-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-end-ref-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-end-ref-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-end-ref-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-end-ref-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-end-ref-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-end-ref-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-end-ref-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-end-ref-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-end-ref-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-end-ref-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-end-ref-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-end-ref-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-end-ref-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-justify-ref-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-justify-ref-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-justify-ref-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-justify-ref-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-justify-ref-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-justify-ref-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-justify-ref-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-justify-ref-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-justify-ref-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-justify-ref-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-justify-ref-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-justify-ref-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-justify-shy-ref-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-justify-shy-ref-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-justifyall-ref-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-justifyall-ref-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-justifyall-ref-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-justifyall-ref-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-last-wins-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-last-wins-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-start-ref-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-start-ref-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-start-ref-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-start-ref-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-start-ref-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-start-ref-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-start-ref-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-start-ref-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-start-ref-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-start-ref-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-start-ref-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-start-ref-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-start-ref-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-start-ref-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-start-ref-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-start-ref-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-start-ref-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-start-ref-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-start-ref-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-start-ref-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-start-ref-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-start-ref-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-start-ref-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-start-ref-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-start-ref-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-start-ref-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-align/reference/text-align-start-ref-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-align/reference/text-align-start-ref-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-encoding/reference/shaping-join-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-encoding/reference/shaping-join-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-encoding/reference/shaping-no-join-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-encoding/reference/shaping-no-join-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-encoding/reference/shaping-tatweel-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-encoding/reference/shaping-tatweel-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-encoding/reference/shaping-tatweel-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-encoding/reference/shaping-tatweel-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-indent/reference/anonymous-flex-grid-item-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-indent/reference/anonymous-flex-grid-item-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-indent/reference/text-indent-each-line-hanging-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-indent/reference/text-indent-each-line-hanging-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-indent/reference/text-indent-percentage-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-indent/reference/text-indent-percentage-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-indent/reference/text-indent-tab-positions-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-indent/reference/text-indent-tab-positions-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-indent/reference/text-indent-with-absolute-pos-child-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-indent/reference/text-indent-with-absolute-pos-child-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/reference/text-justify-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/reference/text-justify-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/reference/text-justify-and-trailing-spaces-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/reference/text-justify-and-trailing-spaces-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/reference/text-justify-and-trailing-spaces-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/reference/text-justify-and-trailing-spaces-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/reference/text-justify-and-trailing-spaces-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/reference/text-justify-and-trailing-spaces-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/reference/text-justify-and-trailing-spaces-alt-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/reference/text-justify-and-trailing-spaces-alt-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/reference/text-justify-and-trailing-spaces-alt-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/reference/text-justify-and-trailing-spaces-alt-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/reference/text-justify-and-trailing-spaces-alt-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/reference/text-justify-and-trailing-spaces-alt-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-justify/reference/text-justify-ref-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-justify/reference/text-justify-ref-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-auto-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-auto-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-auto-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-auto-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-auto-002.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-auto-002.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-auto-002.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-auto-002.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-bold-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-bold-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-bold-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-bold-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-bold-fraktur-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-bold-fraktur-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-bold-fraktur-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-bold-fraktur-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-bold-italic-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-bold-italic-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-bold-italic-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-bold-italic-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-bold-sans-serif-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-bold-sans-serif-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-bold-sans-serif-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-bold-sans-serif-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-bold-script-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-bold-script-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-bold-script-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-bold-script-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-double-struck-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-double-struck-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-double-struck-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-double-struck-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-fraktur-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-fraktur-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-fraktur-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-fraktur-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-initial-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-initial-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-initial-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-initial-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-italic-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-italic-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-italic-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-italic-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-looped-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-looped-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-looped-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-looped-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-monospace-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-monospace-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-monospace-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-monospace-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-sans-serif-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-sans-serif-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-sans-serif-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-sans-serif-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-sans-serif-bold-italic-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-sans-serif-bold-italic-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-sans-serif-bold-italic-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-sans-serif-bold-italic-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-sans-serif-italic-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-sans-serif-italic-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-sans-serif-italic-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-sans-serif-italic-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-script-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-script-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-script-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-script-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-stretched-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-stretched-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-stretched-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-stretched-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-tailed-001.tentative-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-tailed-001.tentative-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/math/text-transform-math-tailed-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/math/text-transform-math-tailed-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-capitalize-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-capitalize-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-capitalize-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-capitalize-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-capitalize-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-capitalize-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-capitalize-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-capitalize-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-capitalize-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-capitalize-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-capitalize-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-capitalize-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-capitalize-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-capitalize-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-capitalize-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-capitalize-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-capitalize-016-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-capitalize-016-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-capitalize-018-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-capitalize-018-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-capitalize-020-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-capitalize-020-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-capitalize-022-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-capitalize-022-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-capitalize-024-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-capitalize-024-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-capitalize-026-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-capitalize-026-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-capitalize-028-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-capitalize-028-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-capitalize-030-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-capitalize-030-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-capitalize-031-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-capitalize-031-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-full-size-kana-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-full-size-kana-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-full-size-kana-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-full-size-kana-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-full-size-kana-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-full-size-kana-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-full-size-kana-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-full-size-kana-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-full-size-kana-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-full-size-kana-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-full-size-kana-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-full-size-kana-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-full-size-kana-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-full-size-kana-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-fullwidth-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-fullwidth-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-fullwidth-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-fullwidth-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-fullwidth-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-fullwidth-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-fullwidth-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-fullwidth-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-multiple-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-multiple-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-shaping-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-shaping-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-tailoring-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-tailoring-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-tailoring-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-tailoring-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-tailoring-002a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-tailoring-002a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-tailoring-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-tailoring-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-tailoring-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-tailoring-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-tailoring-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-tailoring-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-015-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-015-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-016-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-016-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-017-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-017-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-018-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-018-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-019-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-019-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-020-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-020-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-021-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-021-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-022-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-022-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-023-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-023-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-024-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-024-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-025-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-025-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-026-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-026-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-027-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-027-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-028-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-028-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-029-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-029-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-030-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-030-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-031-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-031-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-032-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-032-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-033-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-033-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-034-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-034-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-035-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-035-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-038-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-038-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-039-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-039-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-040-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-040-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-041-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-041-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-042-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-042-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-043-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-043-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-044-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-044-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-101-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-101-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-102-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-102-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-103-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-103-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-104-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-104-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/text-transform/reference/text-transform-upperlower-105-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/text-transform/reference/text-transform-upperlower-105-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/break-spaces-tab-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/break-spaces-tab-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/break-spaces-tab-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/break-spaces-tab-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/control-chars-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/control-chars-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/control-chars-00D-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/control-chars-00D-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/eol-spaces-bidi-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/eol-spaces-bidi-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/eol-spaces-bidi-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/eol-spaces-bidi-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/eol-spaces-bidi-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/eol-spaces-bidi-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/eol-spaces-bidi-alt-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/eol-spaces-bidi-alt-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/full-width-leading-spaces-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/full-width-leading-spaces-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/line-edge-white-space-collapse-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/line-edge-white-space-collapse-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/line-edge-white-space-collapse-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/line-edge-white-space-collapse-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/pre-float-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/pre-float-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/pre-wrap-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/pre-wrap-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/pre-wrap-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/pre-wrap-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/pre-wrap-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/pre-wrap-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/pre-wrap-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/pre-wrap-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/pre-wrap-018-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/pre-wrap-018-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/pre-wrap-019-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/pre-wrap-019-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/pre-wrap-020-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/pre-wrap-020-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/pre-wrap-float-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/pre-wrap-float-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/tab-bidi-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/tab-bidi-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/tab-stop-threshold-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/tab-stop-threshold-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/tab-stop-threshold-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/tab-stop-threshold-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/textarea-pre-wrap-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/textarea-pre-wrap-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/textarea-pre-wrap-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/textarea-pre-wrap-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-ideographic-space-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-ideographic-space-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-ideographic-space-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-ideographic-space-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-ideographic-space-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-ideographic-space-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-ideographic-space-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-ideographic-space-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-ideographic-space-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-ideographic-space-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-ideographic-space-alt-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-ideographic-space-alt-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-ideographic-space-alt-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-ideographic-space-alt-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-ideographic-space-break-spaces-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-ideographic-space-break-spaces-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-ogham-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-ogham-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-other-space-separators-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-other-space-separators-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-other-space-separators-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-other-space-separators-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-other-space-separators-break-spaces-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-other-space-separators-break-spaces-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-other-space-separators-break-spaces-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-other-space-separators-break-spaces-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-other-space-separators-break-spaces-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-other-space-separators-break-spaces-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-other-space-separators-break-spaces-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-other-space-separators-break-spaces-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-space-align-start-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-space-align-start-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-space-and-text-alignment-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-space-and-text-alignment-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-space-and-text-alignment-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-space-and-text-alignment-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-space-and-text-alignment-rtl-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-space-and-text-alignment-rtl-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-space-and-text-alignment-rtl-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-space-and-text-alignment-rtl-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-space-and-text-alignment-rtl-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-space-and-text-alignment-rtl-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/trailing-space-rtl-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/trailing-space-rtl-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-applies-to-text-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-applies-to-text-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-break-spaces-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-break-spaces-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-intrinsic-size-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-intrinsic-size-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-intrinsic-size-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-intrinsic-size-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-intrinsic-size-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-intrinsic-size-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-intrinsic-size-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-intrinsic-size-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-letter-spacing-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-letter-spacing-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-normal-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-normal-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-nowrap-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-nowrap-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-pre-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-pre-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-pre-031-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-pre-031-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-pre-034-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-pre-034-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-015-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-015-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-021-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-021-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-alt-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-alt-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-alt-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-alt-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-alt-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-alt-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-alt-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-alt-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-alt-015-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-pre-wrap-trailing-spaces-alt-015-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-wrap-after-nowrap-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-wrap-after-nowrap-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-zero-fontsize-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-zero-fontsize-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/white-space-zero-fontsize-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/white-space-zero-fontsize-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/ws-break-spaces-applies-to-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/ws-break-spaces-applies-to-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/ws-break-spaces-applies-to-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/ws-break-spaces-applies-to-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/ws-break-spaces-applies-to-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/ws-break-spaces-applies-to-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/white-space/reference/ws-break-spaces-applies-to-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/white-space/reference/ws-break-spaces-applies-to-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-101-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-101-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-102-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-102-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-103-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-103-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-104-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-104-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-105-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-105-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-106-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-106-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-107-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-107-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-108-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-108-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-109-a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-109-a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-109-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-109-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-110-a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-110-a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-110-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-110-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-111-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-111-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-112-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-112-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-113-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-113-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-114-a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-114-a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-114-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-114-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-115-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-115-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-116-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-116-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-117-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-117-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-119-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-119-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-120-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-120-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-121-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-121-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-122-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-122-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-123-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-123-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-124-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-124-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-125-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-125-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-126-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-126-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-127-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-127-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-128-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-128-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-boundary/reference/word-boundary-129-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-boundary/reference/word-boundary-129-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/break-boundary-2-chars-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/break-boundary-2-chars-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/break-boundary-2-chars-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/break-boundary-2-chars-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-020-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-020-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-062-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-062-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-ethiopic-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-ethiopic-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-inline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-inline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-inline-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-inline-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-inline-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-inline-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-inline-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-inline-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-inline-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-inline-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-inline-006-a-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-inline-006-a-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-inline-006-b-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-inline-006-b-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-inline-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-inline-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-ref-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-ref-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-ref-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-ref-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-ref-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-ref-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-ref-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-ref-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-ref-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-ref-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-ref-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-ref-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-ref-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-ref-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-ref-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-ref-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-ref-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-ref-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-ref-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-ref-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-break-all-ref-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-break-all-ref-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-keep-all-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-keep-all-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-keep-all-063-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-keep-all-063-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-keep-all-ref-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-keep-all-ref-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-keep-all-ref-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-keep-all-ref-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-keep-all-ref-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-keep-all-ref-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-keep-all-ref-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-keep-all-ref-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-keep-all-ref-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-keep-all-ref-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-keep-all-ref-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-keep-all-ref-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-normal-ar-ref-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-normal-ar-ref-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-normal-bo-ref-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-normal-bo-ref-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-normal-en-ref-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-normal-en-ref-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-normal-ethiopic-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-normal-ethiopic-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-normal-hi-ref-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-normal-hi-ref-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-normal-ja-ref-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-normal-ja-ref-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-normal-ja-ref-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-normal-ja-ref-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-normal-ja-ref-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-normal-ja-ref-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-normal-ja-ref-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-normal-ja-ref-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-normal-km-ref-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-normal-km-ref-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-normal-ko-ref-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-normal-ko-ref-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-normal-lo-ref-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-normal-lo-ref-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-normal-my-ref-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-normal-my-ref-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-normal-ref-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-normal-ref-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-normal-tdd-ref-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-normal-tdd-ref-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-normal-th-ref-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-normal-th-ref-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/word-break/reference/word-break-normal-zh-ref-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/word-break/reference/word-break-normal-zh-ref-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/writing-system/reference/writing-system-font-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/writing-system/reference/writing-system-font-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/writing-system/reference/writing-system-line-break-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/writing-system/reference/writing-system-line-break-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/writing-system/reference/writing-system-line-break-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/writing-system/reference/writing-system-line-break-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/writing-system/reference/writing-system-segment-break-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/writing-system/reference/writing-system-segment-break-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/writing-system/reference/writing-system-text-transform-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/writing-system/reference/writing-system-text-transform-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/reference/hyphens-i18n-auto-001-alt-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/reference/hyphens-i18n-auto-001-alt-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/reference/hyphens-i18n-auto-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/reference/hyphens-i18n-auto-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/reference/hyphens-i18n-auto-002-alt-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/reference/hyphens-i18n-auto-002-alt-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/reference/hyphens-i18n-auto-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/reference/hyphens-i18n-auto-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/reference/hyphens-i18n-auto-003-alt-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/reference/hyphens-i18n-auto-003-alt-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/reference/hyphens-i18n-auto-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/reference/hyphens-i18n-auto-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/reference/hyphens-i18n-auto-004-alt-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/reference/hyphens-i18n-auto-004-alt-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/reference/hyphens-i18n-auto-004-alt-3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/reference/hyphens-i18n-auto-004-alt-3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/reference/hyphens-i18n-auto-004-alt-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/reference/hyphens-i18n-auto-004-alt-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/reference/hyphens-i18n-auto-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/reference/hyphens-i18n-auto-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-text/hyphens/i18n/reference/hyphens-i18n-auto-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-text/hyphens/i18n/reference/hyphens-i18n-auto-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

