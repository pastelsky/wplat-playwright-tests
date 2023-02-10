import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-variables/css-variable-change-style-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/css-variable-change-style-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/css-variable-change-style-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/css-variable-change-style-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/css-vars-custom-property-case-sensitive-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/css-vars-custom-property-case-sensitive-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/css-vars-custom-property-inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/css-vars-custom-property-inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/revert-in-fallback.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/revert-in-fallback.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/revert-layer-in-fallback.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/revert-layer-in-fallback.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/test_variable_legal_values.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/test_variable_legal_values.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-animation-from-to.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-animation-from-to.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-animation-over-transition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-animation-over-transition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-animation-substitute-into-keyframe-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-animation-substitute-into-keyframe-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-animation-substitute-into-keyframe-transform.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-animation-substitute-into-keyframe-transform.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-animation-substitute-into-keyframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-animation-substitute-into-keyframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-animation-substitute-within-keyframe-fallback.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-animation-substitute-within-keyframe-fallback.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-animation-substitute-within-keyframe-multiple.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-animation-substitute-within-keyframe-multiple.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-animation-substitute-within-keyframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-animation-substitute-within-keyframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-animation-to-only.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-animation-to-only.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-created-document.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-created-document.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-created-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-created-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-cssText.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-cssText.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-cycles.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-cycles.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-03.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-03.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-04.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-04.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-05.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-05.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-06.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-06.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-07.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-07.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-08.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-08.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-09.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-09.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-10.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-10.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-11.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-11.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-12.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-12.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-13.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-13.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-14.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-14.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-15-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-15-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-15.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-15.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-16-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-16-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-16.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-16.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-17-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-17-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-17.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-17.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-18-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-18-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-18.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-18.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-19.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-19.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-20.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-20.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-21.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-21.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-22.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-22.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-23.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-23.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-24.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-24.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-25.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-25.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-26.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-26.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-29.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-29.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-30.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-30.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-31.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-31.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-32.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-32.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-33.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-33.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-34.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-34.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-35.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-35.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-36.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-36.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-37.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-37.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-38.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-38.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-39.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-39.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-40.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-40.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-41.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-41.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-42.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-42.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-43.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-43.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-44.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-44.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-45.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-45.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-46.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-46.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-47.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-47.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-48.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-48.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-49.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-49.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-50.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-50.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-51.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-51.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-52.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-52.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-53.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-53.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-54.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-54.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-55.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-55.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-56.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-56.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-57.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-57.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-58.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-58.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-59.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-59.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-declaration-60.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-declaration-60.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-definition-border-shorthand-serialize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-definition-border-shorthand-serialize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-definition-cascading.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-definition-cascading.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-definition-keywords.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-definition-keywords.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-definition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-definition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-empty-name-reserved.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-empty-name-reserved.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-exponential-blowup.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-exponential-blowup.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-external-declaration-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-external-declaration-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-external-font-face-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-external-font-face-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-external-font-face-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-external-font-face-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-external-reference-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-external-reference-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-external-supports-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-external-supports-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-first-letter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-first-letter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-first-line.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-first-line.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-font-face-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-font-face-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-font-face-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-font-face-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-font-face-02-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-font-face-02-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-font-face-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-font-face-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-generated-content-dynamic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-generated-content-dynamic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-generated-content-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-generated-content-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-invalidation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-invalidation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-presentation-attribute.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-presentation-attribute.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-pseudo-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-pseudo-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-03.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-03.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-04.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-04.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-05.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-05.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-06.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-06.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-07.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-07.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-08.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-08.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-09.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-09.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-10.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-10.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-11.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-11.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-12-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-12-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-12.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-12.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-13.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-13.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-14.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-14.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-15.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-15.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-16.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-16.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-17.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-17.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-18.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-18.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-19.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-19.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-20.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-20.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-21.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-21.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-22.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-22.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-23.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-23.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-24.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-24.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-25.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-25.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-26.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-26.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-27.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-27.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-28.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-28.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-29.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-29.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-30.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-30.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-31.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-31.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-32.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-32.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-33.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-33.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-34.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-34.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-35.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-35.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-36-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-36-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-36.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-36.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-37-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-37-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-37.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-37.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-38-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-38-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-38.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-38.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-39.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-39.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-40-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-40-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-40.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-40.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-cssom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-cssom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-refresh.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-refresh.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-shorthands-cssom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-shorthands-cssom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-shorthands.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-shorthands.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-variable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-variable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-visited-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-visited-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-visited.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-visited.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference-without-whitespace.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference-without-whitespace.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-reference.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-reference.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-substitution-background-properties.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-substitution-background-properties.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-substitution-basic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-substitution-basic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-substitution-filters.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-substitution-filters.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-substitution-replaced-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-substitution-replaced-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-substitution-shadow-properties.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-substitution-shadow-properties.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-substitution-shorthands.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-substitution-shorthands.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-substitution-variable-declaration.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-substitution-variable-declaration.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-02.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-03.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-03.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-04.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-04.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-05.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-05.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-06.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-06.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-07.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-07.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-08.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-08.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-09.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-09.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-10.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-10.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-11.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-11.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-12.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-12.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-13.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-13.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-14.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-14.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-15.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-15.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-16.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-16.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-17.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-17.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-18.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-18.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-19.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-19.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-20.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-20.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-21.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-21.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-22.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-22.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-23.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-23.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-24.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-24.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-25.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-25.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-26.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-26.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-27.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-27.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-28.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-28.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-29.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-29.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-30.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-30.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-31.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-31.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-32.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-32.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-33.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-33.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-34.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-34.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-35.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-35.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-36.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-36.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-37.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-37.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-38.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-38.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-39.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-39.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-40.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-40.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-41.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-41.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-42.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-42.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-43.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-43.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-44.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-44.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-45.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-45.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-46.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-46.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-47.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-47.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-48.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-48.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-49.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-49.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-50.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-50.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-51.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-51.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-52.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-52.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-53.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-53.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-54.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-54.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-55.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-55.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-56.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-56.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-57.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-57.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-58.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-58.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-59.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-59.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-60.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-60.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-61.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-61.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-62.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-62.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-63.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-63.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-64.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-64.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-65.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-65.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-66.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-66.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-supports-67.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-supports-67.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-transitions-transition-property-all-before-value.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-transitions-transition-property-all-before-value.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variable-transitions-value-before-transition-property-all.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variable-transitions-value-before-transition-property-all.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/variables-substitute-guaranteed-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/variables-substitute-guaranteed-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/vars-background-shorthand-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/vars-background-shorthand-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/vars-border-shorthand-serialize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/vars-border-shorthand-serialize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/vars-font-shorthand-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/vars-font-shorthand-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/wide-keyword-fallback-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/wide-keyword-fallback-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/wide-keyword-fallback.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/wide-keyword-fallback.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/reference/variable-reference-without-whitespace-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/reference/variable-reference-without-whitespace-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/reference/vars-background-shorthand-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/reference/vars-background-shorthand-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/reference/vars-font-shorthand-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/reference/vars-font-shorthand-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/resources/variable-reference-refresh-iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/resources/variable-reference-refresh-iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-variables/support/color-green-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-variables/support/color-green-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

