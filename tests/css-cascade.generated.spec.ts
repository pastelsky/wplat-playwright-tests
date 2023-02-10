import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-cascade/all-prop-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/all-prop-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/all-prop-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/all-prop-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/all-prop-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/all-prop-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/all-prop-inherit-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/all-prop-inherit-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/all-prop-initial-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/all-prop-initial-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/all-prop-initial-visited-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/all-prop-initial-visited-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/all-prop-initial-visited.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/all-prop-initial-visited.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/all-prop-initial-xml.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/all-prop-initial-xml.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/all-prop-revert-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/all-prop-revert-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/all-prop-revert-layer-noop.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/all-prop-revert-layer-noop.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/all-prop-revert-layer.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/all-prop-revert-layer.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/all-prop-revert-noop.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/all-prop-revert-noop.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/all-prop-revert-visited-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/all-prop-revert-visited-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/all-prop-revert-visited.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/all-prop-revert-visited.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/all-prop-unset-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/all-prop-unset-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/all-prop-unset-visited-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/all-prop-unset-visited-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/all-prop-unset-visited.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/all-prop-unset-visited.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/at-scope-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/at-scope-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/idlharness.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/idlharness.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/import-conditional-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/import-conditional-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/import-conditions.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/import-conditions.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/import-removal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/import-removal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/important-prop-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/important-prop-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/important-prop.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/important-prop.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/important-transition-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/important-transition-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/important-vs-inline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/important-vs-inline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/important-vs-inline-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/important-vs-inline-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/important-vs-inline-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/important-vs-inline-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/inherit-initial.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/inherit-initial.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/initial-background-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/initial-background-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/initial-color-background-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/initial-color-background-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/initial-color-background-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/initial-color-background-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-basic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-basic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-counter-style-override.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-counter-style-override.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-cssom-order-reverse-at-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-cssom-order-reverse-at-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-cssom-order-reverse.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-cssom-order-reverse.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-font-face-override.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-font-face-override.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-import.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-import.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-important.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-important.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-keyframes-override.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-keyframes-override.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-media-query.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-media-query.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-media-toggle.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-media-toggle.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-property-override.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-property-override.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-replaceSync-clears-stale.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-replaceSync-clears-stale.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-rules-cssom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-rules-cssom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-slotted-rule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-slotted-rule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-statement-before-import.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-statement-before-import.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-statement-copy-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-statement-copy-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-stylesheet-sharing-important.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-stylesheet-sharing-important.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-stylesheet-sharing-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-stylesheet-sharing-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-stylesheet-sharing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-stylesheet-sharing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/layer-vs-inline-style.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/layer-vs-inline-style.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/presentational-hints-cascade.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/presentational-hints-cascade.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/presentational-hints-rollback.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/presentational-hints-rollback.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-layer-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-layer-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-layer-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-layer-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-layer-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-layer-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-layer-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-layer-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-layer-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-layer-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-layer-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-layer-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-layer-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-layer-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-layer-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-layer-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-layer-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-layer-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-layer-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-layer-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-layer-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-layer-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-layer-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-layer-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-layer-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-layer-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-layer-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-layer-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-layer-015-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-layer-015-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-layer-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-layer-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-val-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-val-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-val-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-val-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-val-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-val-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-val-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-val-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-val-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-val-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-val-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-val-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-val-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-val-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-val-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-val-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-val-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-val-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-val-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-val-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/revert-val-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/revert-val-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/scope-deep.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/scope-deep.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/scope-evaluation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/scope-evaluation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/scope-implicit-external.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/scope-implicit-external.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/scope-implicit.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/scope-implicit.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/scope-invalidation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/scope-invalidation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/scope-proximity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/scope-proximity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/scope-specificity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/scope-specificity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/unset-val-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/unset-val-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/unset-val-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/unset-val-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/unset-value-storage.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/unset-value-storage.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/parsing/all-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/parsing/all-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/parsing/all-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/parsing/all-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/parsing/layer-import-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/parsing/layer-import-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/parsing/layer.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/parsing/layer.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/reference/all-green.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/reference/all-green.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-cascade/reference/ref-green-text.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-cascade/reference/ref-green-text.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

