import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-scoping/css-scoping-shadow-assigned-node-with-before-after.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-assigned-node-with-before-after.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-assigned-node-with-rules.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-assigned-node-with-rules.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-dynamic-remove-style-detached.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-dynamic-remove-style-detached.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-host-functional-rule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-host-functional-rule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-host-namespace.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-host-namespace.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-host-rule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-host-rule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-host-with-before-after.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-host-with-before-after.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-invisible-slot.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-invisible-slot.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-nested-slot-display-override.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-nested-slot-display-override.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-root-hides-children.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-root-hides-children.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-slot-display-override.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-slot-display-override.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-slot-fallback.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-slot-fallback.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-slot-style.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-slot-style.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-slot.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-slot.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-slotted-nested.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-slotted-nested.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-slotted-rule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-slotted-rule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-with-outside-rules.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-with-outside-rules.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-with-rules-no-style-leak.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-with-rules-no-style-leak.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/css-scoping-shadow-with-rules.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/css-scoping-shadow-with-rules.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/host-context-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/host-context-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/host-context-specificity-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/host-context-specificity-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/host-context-specificity-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/host-context-specificity-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/host-context-specificity-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/host-context-specificity-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/host-descendant-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/host-descendant-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/host-descendant-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/host-descendant-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/host-descendant-invalidation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/host-descendant-invalidation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/host-dom-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/host-dom-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/host-functional-descendant-invalidation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/host-functional-descendant-invalidation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/host-multiple-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/host-multiple-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/host-nested-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/host-nested-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/host-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/host-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/host-slotted-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/host-slotted-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/host-specificity-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/host-specificity-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/host-specificity-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/host-specificity-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/host-specificity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/host-specificity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/host-with-default-namespace-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/host-with-default-namespace-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/keyframes-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/keyframes-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/keyframes-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/keyframes-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/keyframes-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/keyframes-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/keyframes-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/keyframes-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/keyframes-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/keyframes-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/keyframes-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/keyframes-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/reslot-text-inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/reslot-text-inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/scoped-reference-animation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/scoped-reference-animation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/scoped-reference-animation-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/scoped-reference-animation-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/scoped-reference-animation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/scoped-reference-animation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-assign-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-assign-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-at-import.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-at-import.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-cascade-order-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-cascade-order-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-directionality-001.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-directionality-001.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-directionality-002.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-directionality-002.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-disabled-sheet-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-disabled-sheet-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-fallback-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-fallback-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-fallback-dynamic-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-fallback-dynamic-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-fallback-dynamic-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-fallback-dynamic-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-fallback-dynamic-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-fallback-dynamic-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-fallback-dynamic-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-fallback-dynamic-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-host-removal-invalidation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-host-removal-invalidation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-host-with-before-after.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-host-with-before-after.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-link-rel-stylesheet-no-style-leak.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-link-rel-stylesheet-no-style-leak.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-link-rel-stylesheet.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-link-rel-stylesheet.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-multiple-links.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-multiple-links.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-reassign-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-reassign-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-reassign-dynamic-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-reassign-dynamic-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-reassign-dynamic-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-reassign-dynamic-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-reassign-dynamic-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-reassign-dynamic-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-root-insert-into-document.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-root-insert-into-document.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/shadow-shared-style-cache-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/shadow-shared-style-cache-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/slot-non-html-display-value.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/slot-non-html-display-value.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/slotted-invalidation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/slotted-invalidation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/slotted-link.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/slotted-link.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/slotted-matches.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/slotted-matches.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/slotted-nested.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/slotted-nested.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/slotted-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/slotted-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/slotted-placeholder-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/slotted-placeholder-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/slotted-placeholder.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/slotted-placeholder.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/slotted-slot.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/slotted-slot.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/slotted-specificity-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/slotted-specificity-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/slotted-specificity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/slotted-specificity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/slotted-with-pseudo-element-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/slotted-with-pseudo-element-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/slotted-with-pseudo-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/slotted-with-pseudo-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/stylesheet-title-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/stylesheet-title-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/stylesheet-title-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/stylesheet-title-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/whitespace-crash-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/whitespace-crash-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/reference/green-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/reference/green-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scoping/reference/green-text.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scoping/reference/green-text.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

