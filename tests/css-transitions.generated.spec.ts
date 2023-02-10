import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-transitions/AnimationEffect-getComputedTiming.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/AnimationEffect-getComputedTiming.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/CSSTransition-canceling.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/CSSTransition-canceling.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/CSSTransition-currentTime.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/CSSTransition-currentTime.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/CSSTransition-effect.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/CSSTransition-effect.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/CSSTransition-finished.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/CSSTransition-finished.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/CSSTransition-ready.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/CSSTransition-ready.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/CSSTransition-startTime.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/CSSTransition-startTime.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/CSSTransition-transitionProperty.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/CSSTransition-transitionProperty.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/Document-getAnimations.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/Document-getAnimations.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/Element-getAnimations.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/Element-getAnimations.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/KeyframeEffect-getKeyframes-width-and-height-transition.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/KeyframeEffect-getKeyframes-width-and-height-transition.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/KeyframeEffect-getKeyframes.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/KeyframeEffect-getKeyframes.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/KeyframeEffect-setKeyframes.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/KeyframeEffect-setKeyframes.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/KeyframeEffect-target.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/KeyframeEffect-target.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/before-load-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/before-load-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/changing-while-transition-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/changing-while-transition-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/changing-while-transition-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/changing-while-transition-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/changing-while-transition-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/changing-while-transition-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/changing-while-transition-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/changing-while-transition-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/currentcolor-animation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/currentcolor-animation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/disconnected-element-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/disconnected-element-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/event-dispatch.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/event-dispatch.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/events-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/events-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/events-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/events-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/events-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/events-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/events-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/events-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/events-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/events-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/events-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/events-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/events-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/events-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/historical.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/historical.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/idlharness.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/idlharness.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/inherit-background-color-transition-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/inherit-background-color-transition-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/inherit-background-color-transition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/inherit-background-color-transition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/inherit-height-transition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/inherit-height-transition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/non-rendered-element-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/non-rendered-element-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/non-rendered-element-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/non-rendered-element-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/non-rendered-element-004.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/non-rendered-element-004.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/properties-value-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/properties-value-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/properties-value-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/properties-value-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/properties-value-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/properties-value-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/properties-value-implicit-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/properties-value-implicit-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/properties-value-inherit-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/properties-value-inherit-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/properties-value-inherit-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/properties-value-inherit-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/properties-value-inherit-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/properties-value-inherit-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/pseudo-elements-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/pseudo-elements-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/pseudo-elements-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/pseudo-elements-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/retargetted-transition-with-box-sizing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/retargetted-transition-with-box-sizing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/root-color-transition-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/root-color-transition-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/root-color-transition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/root-color-transition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/starting-of-transitions-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/starting-of-transitions-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-after-animation-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-after-animation-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-background-position-with-edge-offset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-background-position-with-edge-offset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-base-response-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-base-response-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-base-response-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-base-response-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-base-response-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-base-response-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-delay-000-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-delay-000-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-delay-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-delay-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-delay-002-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-delay-002-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-delay-003-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-delay-003-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-duration-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-duration-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-duration-002-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-duration-002-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-duration-003-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-duration-003-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-duration-004-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-duration-004-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-duration-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-duration-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-003-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-003-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-004-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-004-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-005-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-005-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-006-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-006-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-007-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-007-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-008-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-008-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-009-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-009-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-010-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-010-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-011-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-011-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-012-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-012-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-013-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-013-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-014-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-014-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-015-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-015-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-016-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-016-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-017-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-017-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-018-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-018-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-019-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-019-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-020-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-020-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-021-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-021-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-022-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-022-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-023-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-023-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-024-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-024-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-025-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-025-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-026-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-026-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-027-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-027-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-028-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-028-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-029-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-029-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-030-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-030-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-031-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-031-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-032-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-032-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-033-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-033-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-034-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-034-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-035-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-035-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-036-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-036-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-037-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-037-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-038-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-038-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-039-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-039-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-040-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-040-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-041-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-041-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-042-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-042-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-043-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-043-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-044-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-044-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-property-045-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-property-045-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-reparented.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-reparented.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-test.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-test.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-timing-function-002-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-timing-function-002-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-timing-function-003-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-timing-function-003-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-timing-function-004-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-timing-function-004-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-timing-function-005-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-timing-function-005-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-timing-function-006-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-timing-function-006-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transition-timing-function-010-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transition-timing-function-010-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transitioncancel-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transitioncancel-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transitioncancel-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transitioncancel-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/transitionevent-interface.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/transitionevent-interface.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/zero-duration-multiple-transition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/zero-duration-multiple-transition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/animations/change-duration-during-transition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/animations/change-duration-during-transition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/animations/color-transition-premultiplied.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/animations/color-transition-premultiplied.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/animations/move-after-transition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/animations/move-after-transition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/animations/text-shadow-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/animations/text-shadow-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/animations/text-shadow-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/animations/text-shadow-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/animations/transition-end-event-shorthands.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/animations/transition-end-event-shorthands.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/animations/transition-timing-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/animations/transition-timing-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/animations/vertical-align-composition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/animations/vertical-align-composition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/animations/vertical-align-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/animations/vertical-align-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/animations/z-index-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/animations/z-index-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/crashtests/transition-during-style-attr-mutation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/crashtests/transition-during-style-attr-mutation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/crashtests/transition-large-word-spacing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/crashtests/transition-large-word-spacing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/parsing/transition-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/parsing/transition-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/parsing/transition-delay-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/parsing/transition-delay-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/parsing/transition-delay-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/parsing/transition-delay-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/parsing/transition-delay-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/parsing/transition-delay-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/parsing/transition-duration-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/parsing/transition-duration-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/parsing/transition-duration-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/parsing/transition-duration-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/parsing/transition-duration-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/parsing/transition-duration-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/parsing/transition-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/parsing/transition-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/parsing/transition-property-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/parsing/transition-property-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/parsing/transition-property-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/parsing/transition-property-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/parsing/transition-property-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/parsing/transition-property-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/parsing/transition-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/parsing/transition-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/parsing/transition-timing-function-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/parsing/transition-timing-function-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/parsing/transition-timing-function-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/parsing/transition-timing-function-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/parsing/transition-timing-function-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/parsing/transition-timing-function-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/parsing/transition-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/parsing/transition-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/reference/transition-test-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/reference/transition-test-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/render-blocking/no-transition-from-ua-to-blocking-stylesheet-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/render-blocking/no-transition-from-ua-to-blocking-stylesheet-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-transitions/render-blocking/no-transition-from-ua-to-blocking-stylesheet.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-transitions/render-blocking/no-transition-from-ua-to-blocking-stylesheet.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

