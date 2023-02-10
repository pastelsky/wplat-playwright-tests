import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-animations/AnimationEffect-getComputedTiming.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/AnimationEffect-getComputedTiming.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/AnimationEffect-updateTiming.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/AnimationEffect-updateTiming.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/CSSAnimation-animationName.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/CSSAnimation-animationName.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/CSSAnimation-canceling.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/CSSAnimation-canceling.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/CSSAnimation-compositeOrder.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/CSSAnimation-compositeOrder.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/CSSAnimation-effect.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/CSSAnimation-effect.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/CSSAnimation-finished.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/CSSAnimation-finished.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/CSSAnimation-getCurrentTime.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/CSSAnimation-getCurrentTime.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/CSSAnimation-getKeyframes-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/CSSAnimation-getKeyframes-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/CSSAnimation-id.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/CSSAnimation-id.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/CSSAnimation-pausing.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/CSSAnimation-pausing.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/CSSAnimation-playState.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/CSSAnimation-playState.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/CSSAnimation-ready.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/CSSAnimation-ready.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/CSSAnimation-startTime.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/CSSAnimation-startTime.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/Document-getAnimations.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/Document-getAnimations.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/Element-getAnimations-dynamic-changes.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/Element-getAnimations-dynamic-changes.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/Element-getAnimations.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/Element-getAnimations.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/KeyframeEffect-getKeyframes.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/KeyframeEffect-getKeyframes.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/KeyframeEffect-setKeyframes.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/KeyframeEffect-setKeyframes.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/KeyframeEffect-target.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/KeyframeEffect-target.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-base-response-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-base-response-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-base-response-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-base-response-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-base-response-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-base-response-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-base-response-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-base-response-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-before-initial-box-construction-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-before-initial-box-construction-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-change-underlying-value-changed-in-flight.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-change-underlying-value-changed-in-flight.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-common-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-common-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-composition-keyframes.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-composition-keyframes.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-css-variable-in-keyframe-adjusted.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-css-variable-in-keyframe-adjusted.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-delay-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-delay-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-delay-002-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-delay-002-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-delay-003-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-delay-003-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-delay-004-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-delay-004-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-delay-005-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-delay-005-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-delay-006-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-delay-006-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-delay-007-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-delay-007-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-delay-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-delay-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-delay-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-delay-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-delay-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-delay-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-delay-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-delay-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-direction-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-direction-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-direction-002-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-direction-002-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-direction-003-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-direction-003-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-direction-004-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-direction-004-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-direction-005-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-direction-005-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-direction-006-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-direction-006-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-display-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-display-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-duration-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-duration-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-duration-002-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-duration-002-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-duration-003-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-duration-003-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-duration-004-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-duration-004-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-duration-005-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-duration-005-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-duration-006-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-duration-006-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-duration-007-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-duration-007-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-duration-008-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-duration-008-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-fill-mode-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-fill-mode-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-fill-mode-002-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-fill-mode-002-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-fill-mode-003-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-fill-mode-003-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-fill-mode-004-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-fill-mode-004-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-fill-mode-005-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-fill-mode-005-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-fill-mode-006-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-fill-mode-006-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-important-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-important-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-important-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-important-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-important-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-important-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-iteration-count-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-iteration-count-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-iteration-count-002-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-iteration-count-002-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-iteration-count-003-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-iteration-count-003-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-iteration-count-004-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-iteration-count-004-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-iteration-count-005-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-iteration-count-005-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-iteration-count-006-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-iteration-count-006-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-iteration-count-007-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-iteration-count-007-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-iteration-count-008-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-iteration-count-008-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-iteration-count-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-iteration-count-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-iteration-count-calc.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-iteration-count-calc.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-iteration-event-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-iteration-event-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-keyframes-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-keyframes-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-keyframes-002-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-keyframes-002-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-keyframes-003-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-keyframes-003-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-multiple-from-to-keyframes-with-only-timing-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-multiple-from-to-keyframes-with-only-timing-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-name-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-name-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-name-002-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-name-002-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-name-003-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-name-003-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-name-004-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-name-004-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-name-005-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-name-005-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-name-006-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-name-006-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-opacity-pause-and-set-time-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-opacity-pause-and-set-time-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-opacity-pause-and-set-time.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-opacity-pause-and-set-time.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-play-state-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-play-state-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-play-state-002-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-play-state-002-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-play-state-003-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-play-state-003-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-play-state-004-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-play-state-004-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-play-state-005.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-play-state-005.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-pseudo-dynamic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-pseudo-dynamic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-pseudo-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-pseudo-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-shorthand-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-shorthand-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-shorthand-002-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-shorthand-002-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-shorthand-003-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-shorthand-003-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-style-element-replaced-with-keyframes-rule-of-same-name.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-style-element-replaced-with-keyframes-rule-of-same-name.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-timing-function-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-timing-function-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-timing-function-002-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-timing-function-002-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-timing-function-003-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-timing-function-003-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-timing-function-004-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-timing-function-004-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-timing-function-005-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-timing-function-005-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-timing-function-006-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-timing-function-006-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-timing-function-007-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-timing-function-007-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-timing-function-008-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-timing-function-008-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-timing-function-009-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-timing-function-009-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-timing-function-010-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-timing-function-010-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-timing-function-011-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-timing-function-011-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-timing-function-012-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-timing-function-012-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-transform-pause-and-set-time-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-transform-pause-and-set-time-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animation-transform-pause-and-set-time.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animation-transform-pause-and-set-time.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animationevent-interface.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animationevent-interface.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animationevent-marker-pseudoelement.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animationevent-marker-pseudoelement.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animationevent-pseudoelement.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animationevent-pseudoelement.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animationevent-types.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animationevent-types.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/animationstart-and-animationend-events-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/animationstart-and-animationend-events-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/cancel-animation-shadow-slot-invalidation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/cancel-animation-shadow-slot-invalidation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/computed-style-animation-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/computed-style-animation-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/dialog-animation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/dialog-animation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/dialog-backdrop-animation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/dialog-backdrop-animation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/event-dispatch.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/event-dispatch.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/event-order.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/event-order.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/flip-running-animation-via-variable-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/flip-running-animation-via-variable-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/flip-running-animation-via-variable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/flip-running-animation-via-variable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/historical.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/historical.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/idlharness.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/idlharness.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/inheritance-pseudo-element-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/inheritance-pseudo-element-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/inheritance-pseudo-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/inheritance-pseudo-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/keyframes-remove-documentElement-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/keyframes-remove-documentElement-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/keyframes-unrelated-custom-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/keyframes-unrelated-custom-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/keyframes-zero-angle-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/keyframes-zero-angle-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/missing-values-first-keyframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/missing-values-first-keyframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/missing-values-last-keyframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/missing-values-last-keyframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/nested-scale-animations-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/nested-scale-animations-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/nested-scale-animations.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/nested-scale-animations.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/pending-style-changes-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/pending-style-changes-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/simultaneous-animations-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/simultaneous-animations-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/style-animation-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/style-animation-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/svg-transform-animation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/svg-transform-animation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/svg-transform-animation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/svg-transform-animation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/transform-animation-under-large-scale-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/transform-animation-under-large-scale-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/transform-animation-under-large-scale.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/transform-animation-under-large-scale.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/translation-animation-on-important-property-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/translation-animation-on-important-property-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/translation-animation-on-important-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/translation-animation-on-important-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/translation-animation-subpixel-offset-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/translation-animation-subpixel-offset-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/translation-animation-subpixel-offset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/translation-animation-subpixel-offset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/webkit-writing-mode-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/webkit-writing-mode-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/crashtests/replace-keyframes-animating-filter-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/crashtests/replace-keyframes-animating-filter-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-composition-computed.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-composition-computed.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-composition-invalid.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-composition-invalid.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-composition-valid.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-composition-valid.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-delay-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-delay-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-delay-end-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-delay-end-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-delay-end-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-delay-end-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-delay-end-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-delay-end-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-delay-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-delay-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-delay-shorthand-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-delay-shorthand-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-delay-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-delay-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-delay-start-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-delay-start-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-delay-start-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-delay-start-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-delay-start-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-delay-start-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-delay-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-delay-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-direction-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-direction-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-direction-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-direction-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-direction-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-direction-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-duration-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-duration-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-duration-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-duration-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-duration-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-duration-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-fill-mode-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-fill-mode-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-fill-mode-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-fill-mode-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-fill-mode-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-fill-mode-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-iteration-count-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-iteration-count-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-iteration-count-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-iteration-count-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-iteration-count-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-iteration-count-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-name-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-name-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-name-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-name-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-name-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-name-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-play-state-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-play-state-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-play-state-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-play-state-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-play-state-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-play-state-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-range-end-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-range-end-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-range-end-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-range-end-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-range-end-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-range-end-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-range-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-range-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-range-start-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-range-start-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-range-start-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-range-start-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-range-start-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-range-start-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-shorthand.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-shorthand.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/animation-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/animation-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/keyframes-allowed-properties.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/keyframes-allowed-properties.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/keyframes-name-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/keyframes-name-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/parsing/keyframes-name-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/parsing/keyframes-name-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/responsive/column-rule-color-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/responsive/column-rule-color-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/responsive/column-width-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/responsive/column-width-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-animations/responsive/line-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-animations/responsive/line-height.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

