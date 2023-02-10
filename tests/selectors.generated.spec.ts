import { test, expect } from "@playwright/test";


   test('snapshot selectors/anplusb-selector-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/anplusb-selector-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/any-link-dynamic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/any-link-dynamic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/any-link-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/any-link-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/child-indexed-no-parent-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/child-indexed-no-parent-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/child-indexed-no-parent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/child-indexed-no-parent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/child-indexed-pseudo-class.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/child-indexed-pseudo-class.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-pseudo-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-pseudo-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-pseudo-on-bdi-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-pseudo-on-bdi-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-pseudo-on-input-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-pseudo-on-input-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-selector-auto-direction-change-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-selector-auto-direction-change-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-selector-auto.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-selector-auto.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-selector-change-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-selector-change-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-selector-change-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-selector-change-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-selector-change-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-selector-change-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-selector-change-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-selector-change-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-selector-change-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-selector-change-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-selector-change-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-selector-change-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-selector-change-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-selector-change-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-selector-ltr-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-selector-ltr-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-selector-ltr-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-selector-ltr-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-selector-ltr-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-selector-ltr-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-selector-querySelector.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-selector-querySelector.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-selector-rtl-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-selector-rtl-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-selector-white-space-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-selector-white-space-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-selector-white-space-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-selector-white-space-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-style-01-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-style-01-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-style-01a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-style-01a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-style-01b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-style-01b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-style-02-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-style-02-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-style-02a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-style-02a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-style-02b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-style-02b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-style-03-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-style-03-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-style-03a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-style-03a.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-style-03b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-style-03b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-style-04-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-style-04-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/dir-style-04.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/dir-style-04.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/eof-right-after-selector-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/eof-right-after-selector-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/eof-some-after-selector-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/eof-some-after-selector-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/first-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/first-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/first-letter-flag-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/first-letter-flag-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/first-letter-flag-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/first-letter-flag-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/first-line-bidi-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/first-line-bidi-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/first-line-bidi-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/first-line-bidi-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/first-line-bidi-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/first-line-bidi-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/first-line-bidi-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/first-line-bidi-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/first-of-type.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/first-of-type.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/floating-first-letter-05d0.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/floating-first-letter-05d0.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/floating-first-letter-feff.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/floating-first-letter-feff.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/floating-first-letter-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/floating-first-letter-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-display-none-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-display-none-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-in-focus-event-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-in-focus-event-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-in-focusin-event-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-in-focusin-event-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test.skip('snapshot selectors/focus-visible-017-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-017-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-017.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-017.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test.skip('snapshot selectors/focus-visible-018-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-018-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-022.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-022.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-023.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-023.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-002.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-002.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-003.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-003.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-006.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-006.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-007.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-007.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-008-b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-008-b.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-016.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-016.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-017.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-017.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-018.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-019.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-visible-script-focus-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-visible-script-focus-020.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-013.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-display-none-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-display-none-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-shadow-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-shadow-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-shadow-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-shadow-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-shadow-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-shadow-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-shadow-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-shadow-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-shadow-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-shadow-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-shadow-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-shadow-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/focus-within-shadow-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/focus-within-shadow-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/has-argument-with-explicit-scope.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/has-argument-with-explicit-scope.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/has-basic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/has-basic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/has-matches-to-uninserted-elements.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/has-matches-to-uninserted-elements.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/has-relative-argument.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/has-relative-argument.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/has-specificity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/has-specificity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/has-visited-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/has-visited-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/has-visited.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/has-visited.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/hover-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/hover-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/hover-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/hover-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/is-default-ns-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/is-default-ns-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/is-default-ns-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/is-default-ns-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/is-default-ns-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/is-default-ns-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/is-nested.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/is-nested.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/is-specificity-shadow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/is-specificity-shadow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/is-specificity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/is-specificity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/is-where-basic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/is-where-basic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/is-where-error-recovery.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/is-where-error-recovery.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/is-where-not.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/is-where-not.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/is-where-parsing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/is-where-parsing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/is-where-pseudo-classes.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/is-where-pseudo-classes.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/is-where-pseudo-elements-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/is-where-pseudo-elements-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/is-where-pseudo-elements.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/is-where-pseudo-elements.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/is-where-shadow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/is-where-shadow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/is-where-visited-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/is-where-visited-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/is-where-visited.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/is-where-visited.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/last-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/last-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/last-of-type.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/last-of-type.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/missing-right-token.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/missing-right-token.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/modal-pseudo-class.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/modal-pseudo-class.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/not-complex.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/not-complex.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/not-default-ns-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/not-default-ns-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/not-default-ns-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/not-default-ns-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/not-default-ns-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/not-default-ns-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/not-links-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/not-links-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/not-links.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/not-links.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/not-specificity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/not-specificity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-and-nth-last-child-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-and-nth-last-child-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-and-nth-last-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-and-nth-last-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-attribute.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-attribute.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-classname-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-classname-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-classname-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-classname-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-classname.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-classname.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-complex-selector-many-children-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-complex-selector-many-children-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-complex-selector-many-children.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-complex-selector-many-children.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-complex-selector-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-complex-selector-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-complex-selector.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-complex-selector.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-compound-selector-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-compound-selector-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-compound-selector.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-compound-selector.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-nesting-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-nesting-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-nesting.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-nesting.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-no-space-after-of-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-no-space-after-of-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-no-space-after-of.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-no-space-after-of.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-not.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-not.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-nth-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-nth-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-tagname-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-tagname-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-tagname.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-tagname.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-of-universal-selector.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-of-universal-selector.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-specificity-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-specificity-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-specificity-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-specificity-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-specificity-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-specificity-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-specificity-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-specificity-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-specificity-3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-specificity-3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-specificity-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-specificity-3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-specificity-4-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-specificity-4-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-child-specificity-4.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-child-specificity-4.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-of-classname-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-of-classname-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-of-classname.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-of-classname.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-of-complex-selector-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-of-complex-selector-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-of-complex-selector.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-of-complex-selector.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-of-compound-selector-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-of-compound-selector-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-of-compound-selector.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-of-compound-selector.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-of-nesting.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-of-nesting.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-of-no-space-after-of.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-of-no-space-after-of.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-of-style-sharing-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-of-style-sharing-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-of-style-sharing-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-of-style-sharing-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-of-style-sharing-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-of-style-sharing-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-of-style-sharing-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-of-style-sharing-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-of-tagname-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-of-tagname-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-of-tagname.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-of-tagname.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-specificity-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-specificity-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-specificity-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-specificity-1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-specificity-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-specificity-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-specificity-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-specificity-2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-specificity-3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-specificity-3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-specificity-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-specificity-3.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-specificity-4-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-specificity-4-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-last-child-specificity-4.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-last-child-specificity-4.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-of-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-of-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/nth-of-type-namespace.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/nth-of-type-namespace.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/only-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/only-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/only-of-type.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/only-of-type.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/pseudo-enabled-disabled.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/pseudo-enabled-disabled.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/remove-hovered-element-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/remove-hovered-element-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/remove-hovered-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/remove-hovered-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/root-siblings.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/root-siblings.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/scope-selector.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/scope-selector.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/scope-without-scoping.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/scope-without-scoping.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selection-image-001-no-selection-noref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selection-image-001-no-selection-noref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selection-image-001-noref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selection-image-001-noref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selection-image-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selection-image-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selection-image-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selection-image-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-placeholder-shown-emptify-placeholder.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-placeholder-shown-emptify-placeholder.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-placeholder-shown-type-change-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-placeholder-shown-type-change-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-placeholder-shown-type-change-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-placeholder-shown-type-change-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-placeholder-shown-type-change-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-placeholder-shown-type-change-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-placeholder-shown-type-change-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-placeholder-shown-type-change-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-placeholder-shown-type-change-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-placeholder-shown-type-change-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-placeholder-shown-type-change-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-placeholder-shown-type-change-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-read-write-type-change-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-read-write-type-change-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-read-write-type-change-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-read-write-type-change-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-read-write-type-change-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-read-write-type-change-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-read-write-type-change-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-read-write-type-change-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-required-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-required-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-required-type-change-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-required-type-change-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-required-type-change-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-required-type-change-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-required-type-change-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-required-type-change-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-required-type-change-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-required-type-change-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-required.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-required.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-structural-pseudo-root-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-structural-pseudo-root-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selector-structural-pseudo-root.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selector-structural-pseudo-root.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selectors-attr-many-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selectors-attr-many-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selectors-attr-many.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selectors-attr-many.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selectors-attr-white-space-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selectors-attr-white-space-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selectors-attr-white-space-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selectors-attr-white-space-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/selectors-case-sensitive-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/selectors-case-sensitive-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/sharing-in-svg-use-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/sharing-in-svg-use-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/sharing-in-svg-use.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/sharing-in-svg-use.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/spurious-brace-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/spurious-brace-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/user-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/user-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/user-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/user-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/visited-inheritance-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/visited-inheritance-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/visited-inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/visited-inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/webkit-pseudo-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/webkit-pseudo-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/x-pseudo-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/x-pseudo-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/attribute-selectors/style-attribute-selector.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/attribute-selectors/style-attribute-selector.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-008.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-009.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-010.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-011.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-011.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-012.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-012.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-014.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-014.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-015.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-015.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-016.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-016.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-021.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-021.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-022.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-022.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-024.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-024.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-025.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-025.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-026.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-026.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-027.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-027.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-028.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-028.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-029.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-029.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-030.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-030.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-031.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-031.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-032.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-032.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-034.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-034.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-035.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-035.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-036.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-036.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-041.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-041.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-042.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-042.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-044.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-044.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-045.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-045.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-046.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-046.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-047.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-047.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-048.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-048.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-049.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-049.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-050.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-050.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-051.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-051.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-052.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-052.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-054.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-054.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-055.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-055.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/css3-selectors-lang-056.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/css3-selectors-lang-056.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/lang-pseudo-class-across-shadow-boundaries-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/lang-pseudo-class-across-shadow-boundaries-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/lang-pseudo-class-across-shadow-boundaries.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/lang-pseudo-class-across-shadow-boundaries.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/i18n/lang-pseudo-class-disconnected.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/i18n/lang-pseudo-class-disconnected.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/any-link-pseudo.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/any-link-pseudo.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/attribute-or-elemental-selectors-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/attribute-or-elemental-selectors-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/attribute.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/attribute.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/child-indexed-pseudo-classes-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/child-indexed-pseudo-classes-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/class-id-attr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/class-id-attr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/class-id-attr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/class-id-attr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/defined.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/defined.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/dir-pseudo-class-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/dir-pseudo-class-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/empty-pseudo-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/empty-pseudo-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/enabled-disabled.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/enabled-disabled.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/first-child-last-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/first-child-last-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/fullscreen-pseudo-class-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/fullscreen-pseudo-class-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/has-complexity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/has-complexity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/has-in-adjacent-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/has-in-adjacent-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/has-in-ancestor-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/has-in-ancestor-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/has-in-parent-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/has-in-parent-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/has-in-sibling-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/has-in-sibling-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/has-invalidation-after-removing-non-first-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/has-invalidation-after-removing-non-first-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/has-invalidation-for-wiping-an-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/has-invalidation-for-wiping-an-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/has-sibling.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/has-sibling.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/has-with-not.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/has-with-not.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/has-with-pseudo-class.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/has-with-pseudo-class.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/host-pseudo-class-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/host-pseudo-class-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/input-pseudo-classes-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/input-pseudo-classes-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/insert-sibling-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/insert-sibling-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/insert-sibling-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/insert-sibling-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/insert-sibling-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/insert-sibling-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/insert-sibling-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/insert-sibling-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/is-pseudo-containing-complex-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/is-pseudo-containing-complex-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/is.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/is.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/lang-pseudo-class-in-has-document-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/lang-pseudo-class-in-has-document-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/lang-pseudo-class-in-has-multiple-document-elements.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/lang-pseudo-class-in-has-multiple-document-elements.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/lang-pseudo-class-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/lang-pseudo-class-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/link-pseudo-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/link-pseudo-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/location-pseudo-classes-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/location-pseudo-classes-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/media-loading-pseudo-classes-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/media-loading-pseudo-classes-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/media-pseudo-classes-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/media-pseudo-classes-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/modal-pseudo-class-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/modal-pseudo-class-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/not-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/not-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/not-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/not-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/not-pseudo-containing-complex-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/not-pseudo-containing-complex-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-containing-ancestor-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-containing-ancestor-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-containing-ancestor.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-containing-ancestor.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-in-shadow-root-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-in-shadow-root-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-in-shadow-root.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-in-shadow-root.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-of-attr-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-of-attr-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-of-attr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-of-attr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-of-class-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-of-class-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-of-class.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-of-class.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-of-has-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-of-has-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-of-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-of-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-of-in-ancestor-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-of-in-ancestor-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-of-in-ancestor.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-of-in-ancestor.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-of-sibling-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-of-sibling-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-of-sibling.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-of-sibling.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-when-ancestor-changes-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-when-ancestor-changes-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-when-ancestor-changes.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-when-ancestor-changes.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-when-sibling-changes-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-when-sibling-changes-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/nth-child-when-sibling-changes.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/nth-child-when-sibling-changes.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/quirks-mode-stylesheet-dynamic-add-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/quirks-mode-stylesheet-dynamic-add-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/selectorText-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/selectorText-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/sheet-going-away-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/sheet-going-away-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/sheet-going-away-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/sheet-going-away-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/sheet-going-away-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/sheet-going-away-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/sibling.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/sibling.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/subject-has-invalidation-with-display-none-anchor-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/subject-has-invalidation-with-display-none-anchor-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/target-pseudo-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/target-pseudo-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/typed-child-indexed-pseudo-classes-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/typed-child-indexed-pseudo-classes-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/user-action-pseudo-classes-in-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/user-action-pseudo-classes-in-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/invalidation/where.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/invalidation/where.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/media/media-loading-state.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/media/media-loading-state.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/media/media-playback-state.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/media/media-playback-state.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/media/sound-state.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/media/sound-state.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/parsing/parse-attribute.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/parsing/parse-attribute.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/parsing/parse-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/parsing/parse-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/parsing/parse-class.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/parsing/parse-class.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/parsing/parse-descendant.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/parsing/parse-descendant.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/parsing/parse-focus-visible.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/parsing/parse-focus-visible.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/parsing/parse-has-disallow-nesting-has-inside-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/parsing/parse-has-disallow-nesting-has-inside-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/parsing/parse-has.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/parsing/parse-has.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/parsing/parse-id.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/parsing/parse-id.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/parsing/parse-is.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/parsing/parse-is.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/parsing/parse-not.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/parsing/parse-not.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/parsing/parse-sibling.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/parsing/parse-sibling.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/parsing/parse-universal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/parsing/parse-universal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/parsing/parse-where.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/parsing/parse-where.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/query/query-is.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/query/query-is.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/query/query-where.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/query/query-where.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/attribute-selectors/attribute-case/cssom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/attribute-selectors/attribute-case/cssom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/attribute-selectors/attribute-case/semantics.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/attribute-selectors/attribute-case/semantics.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/attribute-selectors/attribute-case/syntax.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/attribute-selectors/attribute-case/syntax.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/attribute-selectors/attribute-case/resources/semantics-quirks.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/attribute-selectors/attribute-case/resources/semantics-quirks.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })




   test('snapshot selectors/attribute-selectors/attribute-case/resources/syntax-quirks.html', async ({ page }) => {
      await page.goto('http://localhost:5050/selectors/attribute-selectors/attribute-case/resources/syntax-quirks.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })

