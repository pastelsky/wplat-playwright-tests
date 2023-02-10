import { test, expect } from "@playwright/test"; 

 
   test('snapshot compositing/Blending_in_a_group_with_filter-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/Blending_in_a_group_with_filter-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/Blending_in_a_group_with_filter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/Blending_in_a_group_with_filter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/Blending_in_a_group_with_opacity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/Blending_in_a_group_with_opacity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/Blending_in_a_group_with_opacity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/Blending_in_a_group_with_opacity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/Text_with_SVG_background-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/Text_with_SVG_background-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/Text_with_SVG_background.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/Text_with_SVG_background.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/compositing_simple_div-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/compositing_simple_div-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/compositing_simple_div.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/compositing_simple_div.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/line-with-svg-background-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/line-with-svg-background-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/line-with-svg-background.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/line-with-svg-background.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/opacity-and-transform-animation-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/opacity-and-transform-animation-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/root-element-background-transparency-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/root-element-background-transparency-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/root-element-background-transparency.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/root-element-background-transparency.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/root-element-blend-mode-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/root-element-blend-mode-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/root-element-blend-mode.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/root-element-blend-mode.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/root-element-filter-background-clip-text-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/root-element-filter-background-clip-text-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/root-element-filter-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/root-element-filter-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/root-element-filter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/root-element-filter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/root-element-opacity-change-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/root-element-opacity-change-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/root-element-opacity-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/root-element-opacity-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/root-element-opacity-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/root-element-opacity-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/root-element-opacity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/root-element-opacity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/text-with-svg-background-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/text-with-svg-background-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/text-with-svg-background.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/text-with-svg-background.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/background-blending/background-blend-mode-gradient-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/background-blending/background-blend-mode-gradient-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/background-blending/background-blend-mode-plus-lighter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/background-blending/background-blend-mode-plus-lighter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/isolation/blend-isolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/isolation/blend-isolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-animation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-animation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-blended-element-interposed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-blended-element-interposed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-blended-element-overflow-hidden-and-border-radius.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-blended-element-overflow-hidden-and-border-radius.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-blended-element-overflow-scroll.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-blended-element-overflow-scroll.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-blended-element-with-transparent-pixels.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-blended-element-with-transparent-pixels.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-blended-with-3D-transform.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-blended-with-3D-transform.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-blended-with-transform-and-perspective.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-blended-with-transform-and-perspective.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-blending-with-sibling.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-blending-with-sibling.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-border-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-border-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-both-parent-and-blended-with-3D-transform.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-both-parent-and-blended-with-3D-transform.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-canvas-parent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-canvas-parent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-canvas-sibling.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-canvas-sibling.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-creates-stacking-context.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-creates-stacking-context.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-filter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-filter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-iframe-parent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-iframe-parent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-iframe-sibling.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-iframe-sibling.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-intermediate-element-overflow-hidden-and-border-radius.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-intermediate-element-overflow-hidden-and-border-radius.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-mask.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-mask.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-overflowing-child-of-blended-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-overflowing-child-of-blended-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-overflowing-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-overflowing-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-paragraph-background-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-paragraph-background-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-paragraph.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-paragraph.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-parent-element-overflow-hidden-and-border-radius.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-parent-element-overflow-hidden-and-border-radius.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-parent-element-overflow-scroll-blended-position-fixed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-parent-element-overflow-scroll-blended-position-fixed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-parent-element-overflow-scroll.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-parent-element-overflow-scroll.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-parent-with-3D-transform-and-transition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-parent-with-3D-transform-and-transition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-parent-with-3D-transform.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-parent-with-3D-transform.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-parent-with-border-radius.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-parent-with-border-radius.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-parent-with-text.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-parent-with-text.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-plus-lighter-basic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-plus-lighter-basic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-plus-lighter-svg-basic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-plus-lighter-svg-basic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-plus-lighter-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-plus-lighter-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-plus-lighter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-plus-lighter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-rotated-clip.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-rotated-clip.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-script.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-script.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-sibling-with-3D-transform-and-transition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-sibling-with-3D-transform-and-transition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-sibling-with-3D-transform.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-sibling-with-3D-transform.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-simple.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-simple.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-stacking-context-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-stacking-context-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-stacking-context-creates-isolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-stacking-context-creates-isolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-video-sibling.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-video-sibling.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-video.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-video.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/mix-blend-mode-with-transform-and-preserve-3D.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/mix-blend-mode-with-transform-and-preserve-3D.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/parsing/background-blend-mode-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/parsing/background-blend-mode-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/parsing/background-blend-mode-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/parsing/background-blend-mode-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/parsing/background-blend-mode-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/parsing/background-blend-mode-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/parsing/isolation-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/parsing/isolation-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/parsing/isolation-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/parsing/isolation-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/parsing/isolation-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/parsing/isolation-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/parsing/mix-blend-mode-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/parsing/mix-blend-mode-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/parsing/mix-blend-mode-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/parsing/mix-blend-mode-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/parsing/mix-blend-mode-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/parsing/mix-blend-mode-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/svg/mix-blend-mode-in-svg-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/svg/mix-blend-mode-in-svg-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/svg/mix-blend-mode-svg-rectangle.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/svg/mix-blend-mode-svg-rectangle.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/test-plan/css-blending-test-plan-proposal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/test-plan/css-blending-test-plan-proposal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/test-plan/test-plan.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/test-plan/test-plan.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/test-plan/test-plan.src.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/test-plan/test-plan.src.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/background-blending/reference/background-blend-mode-gradient-image-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/background-blending/reference/background-blend-mode-gradient-image-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/background-blending/reference/background-blend-mode-plus-lighter-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/background-blending/reference/background-blend-mode-plus-lighter-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/green-square.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/green-square.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-animation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-animation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-blended-element-overflow-hidden-and-border-radius-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-blended-element-overflow-hidden-and-border-radius-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-blended-element-overflow-scroll-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-blended-element-overflow-scroll-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-blended-element-with-transparent-pixels-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-blended-element-with-transparent-pixels-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-blended-with-3D-transform-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-blended-with-3D-transform-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-blended-with-transform-and-perspective-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-blended-with-transform-and-perspective-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-border-image-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-border-image-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-both-parent-and-blended-with-3D-transform-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-both-parent-and-blended-with-3D-transform-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-canvas-parent-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-canvas-parent-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-canvas-sibling-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-canvas-sibling-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-filter-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-filter-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-iframe-parent-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-iframe-parent-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-iframe-sibling-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-iframe-sibling-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-image-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-image-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-intermediate-element-overflow-hidden-and-border-radius-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-intermediate-element-overflow-hidden-and-border-radius-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-mask-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-mask-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-overflowing-child-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-overflowing-child-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-paragraph-background-image-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-paragraph-background-image-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-paragraph-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-paragraph-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-parent-element-overflow-hidden-and-border-radius-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-parent-element-overflow-hidden-and-border-radius-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-parent-element-overflow-scroll-blended-position-fixed-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-parent-element-overflow-scroll-blended-position-fixed-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-parent-element-overflow-scroll-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-parent-element-overflow-scroll-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-parent-with-3D-transform-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-parent-with-3D-transform-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-parent-with-border-radius-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-parent-with-border-radius-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-parent-with-text-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-parent-with-text-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-plus-lighter-basic-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-plus-lighter-basic-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-plus-lighter-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-plus-lighter-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-plus-lighter-svg-basic-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-plus-lighter-svg-basic-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-plus-lighter-svg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-plus-lighter-svg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-rotated-clip-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-rotated-clip-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-script-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-script-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-sibling-with-3D-transform-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-sibling-with-3D-transform-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-stacking-context-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-stacking-context-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-stacking-context-creates-isolation-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-stacking-context-creates-isolation-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-svg-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-svg-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-video-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-video-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-video-sibling-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-video-sibling-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/reference/mix-blend-mode-with-transform-and-preserve-3D-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/reference/mix-blend-mode-with-transform-and-preserve-3D-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/mix-blend-mode/support/red_square.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/mix-blend-mode/support/red_square.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/svg/reference/mix-blend-mode-in-svg-image-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/svg/reference/mix-blend-mode-in-svg-image-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot compositing/svg/reference/mix-blend-mode-svg-rectangle-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/compositing/svg/reference/mix-blend-mode-svg-rectangle-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

