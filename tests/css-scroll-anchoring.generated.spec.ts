import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-scroll-anchoring/abspos-containing-block-outside-scroller.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/abspos-containing-block-outside-scroller.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/abspos-contributes-to-static-parent-bounds.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/abspos-contributes-to-static-parent-bounds.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/abspos-in-multicol-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/abspos-in-multicol-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/abspos-in-multicol-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/abspos-in-multicol-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/abspos-in-multicol-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/abspos-in-multicol-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/ancestor-change-heuristic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/ancestor-change-heuristic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/anchor-inside-iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/anchor-inside-iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/anchor-updates-after-explicit-scroll.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/anchor-updates-after-explicit-scroll.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/anchoring-with-bounds-clamping-div.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/anchoring-with-bounds-clamping-div.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/anchoring-with-bounds-clamping.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/anchoring-with-bounds-clamping.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/anonymous-block-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/anonymous-block-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/basic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/basic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/clamp-negative-overflow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/clamp-negative-overflow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/clipped-scrollers-skipped.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/clipped-scrollers-skipped.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/contain-paint-offscreen-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/contain-paint-offscreen-container.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/descend-into-container-with-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/descend-into-container-with-float.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/descend-into-container-with-overflow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/descend-into-container-with-overflow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/device-pixel-adjustment.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/device-pixel-adjustment.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/dirty-contents-reselect-anchor.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/dirty-contents-reselect-anchor.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/exclude-fixed-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/exclude-fixed-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/exclude-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/exclude-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/exclude-sticky.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/exclude-sticky.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/focus-prioritized.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/focus-prioritized.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/fragment-scrolling-anchors.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/fragment-scrolling-anchors.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/fullscreen-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/fullscreen-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/heuristic-with-offset-update-from-scroll-event-listener.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/heuristic-with-offset-update-from-scroll-event-listener.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/heuristic-with-offset-update.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/heuristic-with-offset-update.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/history-restore-anchors.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/history-restore-anchors.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/image-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/image-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/infinite-scroll-event.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/infinite-scroll-event.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/inline-block-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/inline-block-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/inline-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/inline-block.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/multicol-fragmented-anchor.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/multicol-fragmented-anchor.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/negative-layout-overflow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/negative-layout-overflow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/nested-overflow-subtree-layout-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/nested-overflow-subtree-layout-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/nested-overflow-subtree-layout-vertical-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/nested-overflow-subtree-layout-vertical-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/nested-overflow-subtree-layout-vertical.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/nested-overflow-subtree-layout-vertical.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/nested-overflow-subtree-layout.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/nested-overflow-subtree-layout.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/opt-out-dynamic-scroller.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/opt-out-dynamic-scroller.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/opt-out-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/opt-out-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/opt-out-inner-table.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/opt-out-inner-table.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/opt-out-table.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/opt-out-table.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/opt-out.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/opt-out.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/position-change-heuristic-display-none-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/position-change-heuristic-display-none-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/position-change-heuristic-display-none-to-abspos-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/position-change-heuristic-display-none-to-abspos-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/position-change-heuristic-ib-split.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/position-change-heuristic-ib-split.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/position-change-heuristic-in-nested-scroll-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/position-change-heuristic-in-nested-scroll-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/position-change-heuristic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/position-change-heuristic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/reading-scroll-forces-anchoring.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/reading-scroll-forces-anchoring.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/scroll-padding-affects-anchoring.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/scroll-padding-affects-anchoring.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/start-edge-in-block-layout-direction.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/start-edge-in-block-layout-direction.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/subtree-exclusion.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/subtree-exclusion.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/table-collapsed-borders-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/table-collapsed-borders-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/text-anchor-in-vertical-rl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/text-anchor-in-vertical-rl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/vertical-rl-viewport-size-change-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/vertical-rl-viewport-size-change-000.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/vertical-rl-viewport-size-change-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/vertical-rl-viewport-size-change-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/wrapped-text.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/wrapped-text.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/zero-scroll-offset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/zero-scroll-offset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/parsing/overflow-anchor-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/parsing/overflow-anchor-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/parsing/overflow-anchor-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/parsing/overflow-anchor-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/parsing/overflow-anchor-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/parsing/overflow-anchor-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/support/flexbox-scrolling-vertical-rl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/support/flexbox-scrolling-vertical-rl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/support/history-restore-anchors-new-window.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/support/history-restore-anchors-new-window.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-scroll-anchoring/support/scrolling-vertical-rl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-scroll-anchoring/support/scrolling-vertical-rl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

