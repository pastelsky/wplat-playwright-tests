import { test, expect } from "@playwright/test";


   test('snapshot CSS2/css-e-notation-ref-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css-e-notation-ref-1.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/css-e-notation-ref-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css-e-notation-ref-2.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/css-e-notation-test-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css-e-notation-test-1.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/css-e-notation-test-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css-e-notation-test-2.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/inline-svg-100-percent-in-body.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/inline-svg-100-percent-in-body.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/inline-svg-intrinsic-size-100-percent-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/inline-svg-intrinsic-size-100-percent-1.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/inline-svg-intrinsic-size-100-percent-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/inline-svg-intrinsic-size-100-percent-2.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/inline-svg-margin-padding-border.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/inline-svg-margin-padding-border.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/abspos/abspos-in-block-in-inline-in-relpos-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/abspos/abspos-in-block-in-inline-in-relpos-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/abspos/adjacent-to-relpos-inline-in-inline-that-had-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/abspos/adjacent-to-relpos-inline-in-inline-that-had-block.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/abspos/adjacent-to-relpos-inline-that-had-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/abspos/adjacent-to-relpos-inline-that-had-block.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/abspos/between-float-and-text.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/abspos/between-float-and-text.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/abspos/hypothetical-box-dynamic-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/abspos/hypothetical-box-dynamic-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/abspos/hypothetical-box-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/abspos/hypothetical-box-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/abspos/hypothetical-inline-alone-on-second-line-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/abspos/hypothetical-inline-alone-on-second-line-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/abspos/hypothetical-inline-alone-on-second-line.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/abspos/hypothetical-inline-alone-on-second-line.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/abspos/remove-block-between-inline-and-abspos.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/abspos/remove-block-between-inline-and-abspos.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/abspos/static-inside-table-cell.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/abspos/static-inside-table-cell.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/abspos/table-caption-is-containing-block-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/abspos/table-caption-is-containing-block-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/abspos/table-caption-passes-abspos-up-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/abspos/table-caption-passes-abspos-up-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/borders/groove-default.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/borders/groove-default.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/borders/groove-ridge-default-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/borders/groove-ridge-default-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/borders/ridge-default.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/borders/ridge-default.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/cascade/inherit-computed-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/cascade/inherit-computed-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/cascade/inherit-computed-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/cascade/inherit-computed-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/cascade/inherit-computed-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/cascade/inherit-computed-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/cascade/inherit-computed-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/cascade/inherit-computed-002.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/css21-errata/s-11-1-1b-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css21-errata/s-11-1-1b-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/css21-errata/s-11-1-1b-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css21-errata/s-11-1-1b-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/css21-errata/s-11-1-1b-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css21-errata/s-11-1-1b-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/css21-errata/s-11-1-1b-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css21-errata/s-11-1-1b-002.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/css21-errata/s-11-1-1b-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css21-errata/s-11-1-1b-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/css21-errata/s-11-1-1b-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css21-errata/s-11-1-1b-003.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/css21-errata/s-11-1-1b-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css21-errata/s-11-1-1b-004.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/css21-errata/s-11-1-1b-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css21-errata/s-11-1-1b-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/css21-errata/s-11-1-1b-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css21-errata/s-11-1-1b-005.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/css21-errata/s-11-1-1b-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css21-errata/s-11-1-1b-006.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/css21-errata/s-11-1-1b-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css21-errata/s-11-1-1b-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/css21-errata/s-11-1-1b-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css21-errata/s-11-1-1b-007.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/css21-errata/s-11-1-1b-008.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css21-errata/s-11-1-1b-008.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/css21-errata/s-11-1-1b-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/css21-errata/s-11-1-1b-009.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/adjoining-floats-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/adjoining-floats-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/computed-float-position-absolute.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/computed-float-position-absolute.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-in-self-painting-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-in-self-painting-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-no-content-beside-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-no-content-beside-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-no-content-beside-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-no-content-beside-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-nowrap-1-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-nowrap-1-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
      const fontFamily = await page.evaluate(() => {
         let para = document.querySelector('div');
         let compStyles = window.getComputedStyle(para);
         let computedFontFamily = compStyles.getPropertyValue('font-family')
         console.log('computedFontFamily is ',computedFontFamily)
         return computedFontFamily
      })

      console.log('fontFamily is ', fontFamily)
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-nowrap-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-nowrap-1.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-nowrap-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-nowrap-2.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-nowrap-3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-nowrap-3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-nowrap-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-nowrap-3.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-nowrap-4-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-nowrap-4-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-nowrap-4.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-nowrap-4.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-nowrap-5-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-nowrap-5-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-nowrap-5.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-nowrap-5.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-nowrap-6.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-nowrap-6.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-nowrap-7.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-nowrap-7.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-nowrap-8.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-nowrap-8.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-nowrap-9.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-nowrap-9.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-paint-relayout.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-paint-relayout.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-root-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-root-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-root.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-root.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-table-align-left-quirk-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-table-align-left-quirk-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-table-align-left-quirk.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-table-align-left-quirk.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/float-under-flatten-under-preserve-3d.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/float-under-flatten-under-preserve-3d.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floated-table-wider-than-specified.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floated-table-wider-than-specified.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-in-table-caption-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-in-table-caption-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-in-table-caption-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-in-table-caption-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-line-wrap-shifted-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-line-wrap-shifted-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-line-wrap-shifted-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-line-wrap-shifted-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-placement-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-placement-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-placement-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-placement-002.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-placement-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-placement-003.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-placement-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-placement-004.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-placement-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-placement-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-placement-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-placement-005.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-saturated-position-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-saturated-position-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-wrap-bfc-with-margin-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-wrap-bfc-with-margin-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-wrap-bfc-with-margin-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-wrap-bfc-with-margin-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-wrap-bfc-with-margin-001a.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-wrap-bfc-with-margin-001a.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-wrap-bfc-with-margin-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-wrap-bfc-with-margin-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-wrap-bfc-with-margin-002.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-wrap-bfc-with-margin-002.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-wrap-bfc-with-margin-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-wrap-bfc-with-margin-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-wrap-bfc-with-margin-003.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-wrap-bfc-with-margin-003.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-wrap-bfc-with-margin-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-wrap-bfc-with-margin-004.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/floats-wrap-bfc-with-margin-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/floats-wrap-bfc-with-margin-005.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/hit-test-floats-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/hit-test-floats-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/hit-test-floats-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/hit-test-floats-002.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/hit-test-floats-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/hit-test-floats-003.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/hit-test-floats-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/hit-test-floats-004.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/hit-test-floats-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/hit-test-floats-005.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/intrinsic-size-float-and-line.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/intrinsic-size-float-and-line.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/line-pushed-by-floats-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/line-pushed-by-floats-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/list-item-taller-than-opportunity-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/list-item-taller-than-opportunity-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/negative-margin-float-positioning.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/negative-margin-float-positioning.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/new-fc-beside-adjoining-float-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/new-fc-beside-adjoining-float-2.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/new-fc-beside-adjoining-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/new-fc-beside-adjoining-float.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/new-fc-beside-float-with-margin-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/new-fc-beside-float-with-margin-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/new-fc-beside-float-with-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/new-fc-beside-float-with-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/new-fc-relayout.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/new-fc-relayout.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/new-fc-separates-from-float-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/new-fc-separates-from-float-2.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/new-fc-separates-from-float-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/new-fc-separates-from-float-3.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/new-fc-separates-from-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/new-fc-separates-from-float.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/overflow-scroll-float-paint-order-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/overflow-scroll-float-paint-order-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/overflow-scroll-float-paint-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/overflow-scroll-float-paint-order.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/overhanging-float-paint-order-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/overhanging-float-paint-order-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/overhanging-float-paint-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/overhanging-float-paint-order.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/remove-block-between-inline-and-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/remove-block-between-inline-and-float.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/remove-float-in-first-line.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/remove-float-in-first-line.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/remove-float-then-abspos-in-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/remove-float-then-abspos-in-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/zero-available-space-float-positioning.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/zero-available-space-float-positioning.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/zero-space-between-floats-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/zero-space-between-floats-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/zero-space-between-floats-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/zero-space-between-floats-002.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/zero-space-between-floats-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/zero-space-between-floats-003.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/zero-space-between-floats-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/zero-space-between-floats-004.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/zero-width-floats-positioning.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/zero-width-floats-positioning.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats/zero-width-floats.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats/zero-width-floats.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/adjoining-float-before-clearance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/adjoining-float-before-clearance.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/adjoining-float-nested-forced-clearance-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/adjoining-float-nested-forced-clearance-002.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/adjoining-float-nested-forced-clearance-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/adjoining-float-nested-forced-clearance-003.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/adjoining-float-nested-forced-clearance-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/adjoining-float-nested-forced-clearance-004.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/adjoining-float-nested-forced-clearance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/adjoining-float-nested-forced-clearance.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/adjoining-float-new-fc-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/adjoining-float-new-fc-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/adjoining-float-new-fc.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/adjoining-float-new-fc.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/clear-after-top-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/clear-after-top-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/clear-on-child-with-margins-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/clear-on-child-with-margins-2.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/clear-on-child-with-margins.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/clear-on-child-with-margins.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/clear-on-parent-and-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/clear-on-parent-and-child.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/clear-on-parent-with-margins-no-clearance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/clear-on-parent-with-margins-no-clearance.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/clear-on-parent-with-margins.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/clear-on-parent-with-margins.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/clear-on-parent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/clear-on-parent.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/clear-with-top-margin-after-cleared-empty-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/clear-with-top-margin-after-cleared-empty-block.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/clearance-containing-fragmented-float-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/clearance-containing-fragmented-float-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/floats-clear-multicol-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/floats-clear-multicol-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/floats-clear-multicol-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/floats-clear-multicol-000.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/floats-clear-multicol-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/floats-clear-multicol-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/floats-clear-multicol-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/floats-clear-multicol-002.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/floats-clear-multicol-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/floats-clear-multicol-003.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/floats-clear-multicol-balancing-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/floats-clear-multicol-balancing-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/floats-clear-multicol-balancing-000.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/floats-clear-multicol-balancing-000.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/floats-clear-multicol-balancing-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/floats-clear-multicol-balancing-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/floats-clear-multicol-balancing-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/floats-clear-multicol-balancing-002.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/floats-clear-multicol-balancing-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/floats-clear-multicol-balancing-003.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/negative-clearance-after-adjoining-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/negative-clearance-after-adjoining-float.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/negative-clearance-after-bottom-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/negative-clearance-after-bottom-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/nested-clearance-new-formatting-context.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/nested-clearance-new-formatting-context.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/no-clearance-adjoining-opposite-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/no-clearance-adjoining-opposite-float.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/no-clearance-due-to-large-margin-after-left-right.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/no-clearance-due-to-large-margin-after-left-right.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/no-clearance-due-to-large-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/no-clearance-due-to-large-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/remove-block-before-self-collapsing-sibling-with-clearance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/remove-block-before-self-collapsing-sibling-with-clearance.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/second-float-inside-empty-cleared-block-after-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/second-float-inside-empty-cleared-block-after-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/floats-clear/second-float-inside-empty-cleared-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/floats-clear/second-float-inside-empty-cleared-block.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/fonts/font-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/fonts/font-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/fonts/font-family-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/fonts/font-family-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/fonts/font-family-invalid-characters-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/fonts/font-family-invalid-characters-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/fonts/font-family-invalid-characters-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/fonts/font-family-invalid-characters-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/fonts/font-family-invalid-characters-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/fonts/font-family-invalid-characters-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/fonts/font-family-invalid-characters-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/fonts/font-family-invalid-characters-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/fonts/font-family-rule-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/fonts/font-family-rule-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/fonts/font-family-rule-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/fonts/font-family-rule-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/fonts/font-family-valid-characters-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/fonts/font-family-valid-characters-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/fonts/font-style-applies-to-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/fonts/font-style-applies-to-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/fonts/font-variant-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/fonts/font-variant-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/fonts/font-weight-100-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/fonts/font-weight-100-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/fonts/font-weight-900-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/fonts/font-weight-900-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/fonts/font-weight-bold-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/fonts/font-weight-bold-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/fonts/font-weight-normal-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/fonts/font-weight-normal-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/after-inheritable-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/after-inheritable-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/after-inheritable-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/after-inheritable-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/after-location-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/after-location-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/before-after-positioned-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/before-after-positioned-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/before-after-positioned-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/before-after-positioned-002.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/before-after-positioned-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/before-after-positioned-003.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/before-after-positioned-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/before-after-positioned-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/before-after-positioned-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/before-after-positioned-004.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/before-location-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/before-location-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/bidi-generated-content-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/bidi-generated-content-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/bidi-generated-content-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/bidi-generated-content-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-011-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-011-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-013-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-013-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-015-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-015-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-016-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-016-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-017-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-017-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-021-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-021-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-022-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-022-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-023-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-023-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-026-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-026-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-027-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-027-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-028-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-028-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-029-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-029-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-030-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-030-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-031-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-031-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-032-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-032-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-033-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-033-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-037-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-037-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-040-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-040-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-041-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-041-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-042-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-042-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-043-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-043-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-047-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-047-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-048-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-048-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-050-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-050-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-052-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-052-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-053-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-053-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-063-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-063-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-068-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-068-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-070-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-070-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-072-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-072-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-073-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-073-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-075-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-075-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-080-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-080-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-081-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-081-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-082-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-082-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-083-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-083-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-089-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-089-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-090-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-090-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-091-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-091-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-096-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-096-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-097-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-097-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-100-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-100-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-103-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-103-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-113-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-113-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-126-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-126-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-132-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-132-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-135-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-135-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-136-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-136-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-141-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-141-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-143-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-143-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-144-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-144-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-147-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-147-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-149-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-149-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-150-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-150-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-155-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-155-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-156-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-156-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-158-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-158-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-159-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-159-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-attr-case-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-attr-case-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-auto-reset-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-auto-reset-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-newline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-newline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-white-space-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-white-space-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-white-space-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-white-space-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-white-space-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-white-space-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/content-white-space-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/content-white-space-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/counters-hidden-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/counters-hidden-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/counters-hidden-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/counters-hidden-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/counters-multi-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/counters-multi-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/counters-order-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/counters-order-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/generated-content/counters-root-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/generated-content/counters-root-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/anonymous-inline-inherit-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/anonymous-inline-inherit-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/anonymous-inline-inherit-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/anonymous-inline-inherit-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/baseline-block-with-overflow-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/baseline-block-with-overflow-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/baseline-block-with-overflow-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/baseline-block-with-overflow-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/fractional-line-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/fractional-line-height.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/iframe-in-block-in-inline-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/iframe-in-block-in-inline-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/iframe-in-block-in-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/iframe-in-block-in-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/iframe-in-wrapped-span-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/iframe-in-wrapped-span-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/iframe-in-wrapped-span.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/iframe-in-wrapped-span.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/inline-children-root-linebox-crash-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/inline-children-root-linebox-crash-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/inline-negative-margin-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/inline-negative-margin-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/inline-negative-margin-minmax-crash-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/inline-negative-margin-minmax-crash-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/line-breaking-font-size-zero-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/line-breaking-font-size-zero-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/line-breaking-font-size-zero-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/line-breaking-font-size-zero-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/line-height-oof-descendants-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/line-height-oof-descendants-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/line-height-oof-descendants-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/line-height-oof-descendants-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/needs-layout-transform.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/needs-layout-transform.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/vertical-align-negative-leading-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/vertical-align-negative-leading-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/vertical-align-negative-leading-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/vertical-align-negative-leading-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/vertical-align-nested-top-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/vertical-align-nested-top-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/vertical-align-nested-top-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/vertical-align-nested-top-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/vertical-align-top-bottom-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/vertical-align-top-bottom-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/vertical-align-top-bottom-padding-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/vertical-align-top-bottom-padding-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/vertical-align-top-bottom-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/vertical-align-top-bottom-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/video-needs-layout-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/video-needs-layout-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/lists/counter-increment-014-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/lists/counter-increment-014-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/lists/counter-increment-021-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/lists/counter-increment-021-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/lists/counter-increment-027-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/lists/counter-increment-027-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/lists/counter-increment-034-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/lists/counter-increment-034-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/lists/counter-increment-040-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/lists/counter-increment-040-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/lists/counter-increment-047-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/lists/counter-increment-047-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/lists/counter-increment-053-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/lists/counter-increment-053-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/lists/counter-increment-054-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/lists/counter-increment-054-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/lists/counter-increment-055-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/lists/counter-increment-055-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/lists/list-style-image-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/lists/list-style-image-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/lists/list-style-image-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/lists/list-style-image-007.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/auto-margins-root-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/auto-margins-root-element.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-align-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-align-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-align-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-align-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-align-justify-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-align-justify-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-align-justify-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-align-justify-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-align-last-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-align-last-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-align-last-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-align-last-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-baseline-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-baseline-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-baseline-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-baseline-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-client-rects-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-client-rects-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-first-line-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-first-line-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-first-line-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-first-line-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-first-line-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-first-line-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-first-line-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-first-line-002.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-float-in-layer-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-float-in-layer-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-float-in-layer-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-float-in-layer-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-hittest-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-hittest-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-hittest-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-hittest-002.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-hittest-float-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-hittest-float-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-hittest-float-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-hittest-float-002.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-hittest-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-hittest-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-hittest-relpos-zindex.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-hittest-relpos-zindex.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-insert-018.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-insert-018.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-insert-019-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-insert-019-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-insert-019.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-insert-019.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-insert-020-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-insert-020-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-insert-020.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-insert-020.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-margins-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-margins-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-margins-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-margins-003.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-margins-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-margins-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-margins-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-margins-004.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-vertical-align-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-vertical-align-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/block-in-inline-vertical-align-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/block-in-inline-vertical-align-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/canvas-paint-order-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/canvas-paint-order-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/canvas-paint-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/canvas-paint-order.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/child-bottom-margin-in-unresolvable-percentage-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/child-bottom-margin-in-unresolvable-percentage-height.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/containing-block-percent-margin-bottom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/containing-block-percent-margin-bottom.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/containing-block-percent-margin-left.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/containing-block-percent-margin-left.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/containing-block-percent-margin-right.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/containing-block-percent-margin-right.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/containing-block-percent-margin-top.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/containing-block-percent-margin-top.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/containing-block-percent-padding-bottom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/containing-block-percent-padding-bottom.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/containing-block-percent-padding-left.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/containing-block-percent-padding-left.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/containing-block-percent-padding-right.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/containing-block-percent-padding-right.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/containing-block-percent-padding-top.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/containing-block-percent-padding-top.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/cross-domain-iframe-paint-order-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/cross-domain-iframe-paint-order-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/cross-domain-iframe-paint-order.sub.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/cross-domain-iframe-paint-order.sub.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/dynamic-percentage-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/dynamic-percentage-height.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/float-percentage-resolution-quirks-mode.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/float-percentage-resolution-quirks-mode.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/hit-test-anonymous-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/hit-test-anonymous-block.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/intrinsic-size-with-negative-margins.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/intrinsic-size-with-negative-margins.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/margin-collapse-through-percentage-height-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/margin-collapse-through-percentage-height-block.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/margin-collapse-through-percentage-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/margin-collapse-through-percentage-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/margin-collapse-through-zero-height-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/margin-collapse-through-zero-height-block.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/margin-collapsing-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/margin-collapsing-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/margin-collapsing-in-table-caption-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/margin-collapsing-in-table-caption-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/margin-collapsing-in-table-caption-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/margin-collapsing-in-table-caption-002.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/max-height-separates-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/max-height-separates-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/min-height-separates-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/min-height-separates-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/negative-margin-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/negative-margin-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/negative-margin-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/negative-margin-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/negative-margin-shrinking-container-size-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/negative-margin-shrinking-container-size-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/negative-margin-shrinking-container-size-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/negative-margin-shrinking-container-size-002.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/overflow-scroll-paint-order-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/overflow-scroll-paint-order-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/overflow-scroll-paint-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/overflow-scroll-paint-order.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/resizable-iframe-paint-order-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/resizable-iframe-paint-order-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/resizable-iframe-paint-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/resizable-iframe-paint-order.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/unresolvable-max-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/unresolvable-max-height.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/unresolvable-min-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/unresolvable-min-height.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/video-paint-order-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/video-paint-order-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/video-paint-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/video-paint-order.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/other-formats/background-color-176.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/other-formats/background-color-176.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/other-formats/control-characters-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/other-formats/control-characters-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/other-formats/xml-lang-selectors-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/other-formats/xml-lang-selectors-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/other-formats/xml-lang-selectors-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/other-formats/xml-lang-selectors-002.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-1-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-1-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-10-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-10-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-11-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-11-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-12-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-12-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-13-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-13-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-14-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-14-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-14-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-14-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-15-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-15-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-15-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-15-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-2-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-2-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-3-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-3-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-4-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-4-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-5-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-5-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-6-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-6-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-7-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-7-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-8-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-8-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-8-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-8-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-9-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-9-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/block-page-break-inside-avoid-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/block-page-break-inside-avoid-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/float-page-break-inside-avoid-1-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/float-page-break-inside-avoid-1-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/float-page-break-inside-avoid-2-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/float-page-break-inside-avoid-2-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/float-page-break-inside-avoid-2-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/float-page-break-inside-avoid-2-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/float-page-break-inside-avoid-3-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/float-page-break-inside-avoid-3-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/float-page-break-inside-avoid-4-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/float-page-break-inside-avoid-4-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/float-page-break-inside-avoid-5-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/float-page-break-inside-avoid-5-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/float-page-break-inside-avoid-5-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/float-page-break-inside-avoid-5-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/float-page-break-inside-avoid-6-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/float-page-break-inside-avoid-6-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/float-page-break-inside-avoid-6-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/float-page-break-inside-avoid-6-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/float-page-break-inside-avoid-7-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/float-page-break-inside-avoid-7-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/float-page-break-inside-avoid-7-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/float-page-break-inside-avoid-7-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/float-page-break-inside-avoid-8-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/float-page-break-inside-avoid-8-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/float-page-break-inside-avoid-8-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/float-page-break-inside-avoid-8-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/float-page-break-inside-avoid-9-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/float-page-break-inside-avoid-9-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/float-page-break-inside-avoid-9-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/float-page-break-inside-avoid-9-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/inline-page-break-inside-avoid-1-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/inline-page-break-inside-avoid-1-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/inline-page-break-inside-avoid-1-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/inline-page-break-inside-avoid-1-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/row-page-break-inside-avoid-1-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/row-page-break-inside-avoid-1-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/row-page-break-inside-avoid-2-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/row-page-break-inside-avoid-2-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/rowgroup-page-break-inside-avoid-1-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/rowgroup-page-break-inside-avoid-1-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/rowgroup-page-break-inside-avoid-2-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/rowgroup-page-break-inside-avoid-2-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/rowgroup-page-break-inside-avoid-3-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/rowgroup-page-break-inside-avoid-3-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/rowgroup-page-break-inside-avoid-4-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/rowgroup-page-break-inside-avoid-4-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/rowgroup-page-break-inside-avoid-4-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/rowgroup-page-break-inside-avoid-4-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/rowgroup-page-break-inside-avoid-5-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/rowgroup-page-break-inside-avoid-5-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/rowgroup-page-break-inside-avoid-5-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/rowgroup-page-break-inside-avoid-5-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/rowgroup-page-break-inside-avoid-6-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/rowgroup-page-break-inside-avoid-6-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/rowgroup-page-break-inside-avoid-7-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/rowgroup-page-break-inside-avoid-7-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/rowgroup-page-break-inside-avoid-7-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/rowgroup-page-break-inside-avoid-7-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/rowgroup-page-break-inside-avoid-8-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/rowgroup-page-break-inside-avoid-8-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/rowgroup-page-break-inside-avoid-8-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/rowgroup-page-break-inside-avoid-8-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/table-page-break-inside-avoid-1-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/table-page-break-inside-avoid-1-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/table-page-break-inside-avoid-2-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/table-page-break-inside-avoid-2-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/table-page-break-inside-avoid-2-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/table-page-break-inside-avoid-2-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/table-page-break-inside-avoid-3-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/table-page-break-inside-avoid-3-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/table-page-break-inside-avoid-3-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/table-page-break-inside-avoid-3-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/table-page-break-inside-avoid-4-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/table-page-break-inside-avoid-4-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/table-page-break-inside-avoid-4-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/table-page-break-inside-avoid-4-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/table-page-break-inside-avoid-5-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/table-page-break-inside-avoid-5-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/table-page-break-inside-avoid-5-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/table-page-break-inside-avoid-5-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/table-page-break-inside-avoid-6-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/table-page-break-inside-avoid-6-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/table-page-break-inside-avoid-6-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/table-page-break-inside-avoid-6-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/table-page-break-inside-avoid-7-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/table-page-break-inside-avoid-7-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/table-page-break-inside-avoid-7-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/table-page-break-inside-avoid-7-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/table-page-break-inside-avoid-8-print.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/table-page-break-inside-avoid-8-print.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/pagination/table-page-break-inside-avoid-print-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/pagination/table-page-break-inside-avoid-print-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/absolute-non-replaced-height-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/absolute-non-replaced-height-013.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/abspos-block-level-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/abspos-block-level-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/abspos-block-level-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/abspos-block-level-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/abspos-change-in-inline-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/abspos-change-in-inline-block.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/abspos-float-with-inline-container-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/abspos-float-with-inline-container-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/abspos-float-with-inline-container.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/abspos-float-with-inline-container.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/abspos-inline-container-in-inline-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/abspos-inline-container-in-inline-block.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/abspos-negative-margin-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/abspos-negative-margin-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/abspos-negative-margin-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/abspos-negative-margin-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/abspos-width-change-inline-container-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/abspos-width-change-inline-container-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/abspos-width-change-inline-container-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/abspos-width-change-inline-container-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/auto-position-rtl-child-viewport-scrollbar-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/auto-position-rtl-child-viewport-scrollbar-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/auto-position-rtl-child-viewport-scrollbar.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/auto-position-rtl-child-viewport-scrollbar.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/detach-abspos-before-layout.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/detach-abspos-before-layout.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/inline-static-position-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/inline-static-position-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/line-break-after-leading-float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/line-break-after-leading-float.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/line-break-after-leading-oof-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/line-break-after-leading-oof-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/line-break-after-leading-oof-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/line-break-after-leading-oof-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/relpos-percentage-left-in-scrollable-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/relpos-percentage-left-in-scrollable-2.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/relpos-percentage-left-in-scrollable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/relpos-percentage-left-in-scrollable.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/relpos-percentage-top-in-scrollable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/relpos-percentage-top-in-scrollable.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/positioning/toogle-abspos-on-relpos-inline-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/positioning/toogle-abspos-on-relpos-inline-child.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/reference/60x60-green.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/reference/60x60-green.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/reference/inline-svg-100-percent-in-body-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/reference/inline-svg-100-percent-in-body-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/reference/inline-svg-margin-padding-border-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/reference/inline-svg-margin-padding-border-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/reference/no_red_bold_italic_small-caps_ahem.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/reference/no_red_bold_italic_small-caps_ahem.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/reference/pass_if_box_ahem.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/reference/pass_if_box_ahem.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/sec5/class-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/sec5/class-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/sec5/class-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/sec5/class-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/sec5/first-child-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/sec5/first-child-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/sec5/first-line-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/sec5/first-line-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selector/attribute-value-selector-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selector/attribute-value-selector-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selector/attribute-value-selector-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selector/attribute-value-selector-007.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selector/attribute-value-selector-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selector/attribute-value-selector-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selector/attribute-value-selector-009-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selector/attribute-value-selector-009-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selector/attribute-value-selector-010-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selector/attribute-value-selector-010-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selector/attribute-value-selector-010.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selector/attribute-value-selector-010.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selector/lang-pseudoclass-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selector/lang-pseudoclass-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selector/lang-pseudoclass-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selector/lang-pseudoclass-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selectors/attribute-value-selector-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selectors/attribute-value-selector-005.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selectors/class-selector-012-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selectors/class-selector-012-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selectors/first-child-selector-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selectors/first-child-selector-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selectors/first-child-selector-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selectors/first-child-selector-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selectors/first-letter-abspos-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selectors/first-letter-abspos-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selectors/first-letter-abspos.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selectors/first-letter-abspos.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selectors/first-letter-selector-000-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selectors/first-letter-selector-000-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selectors/first-letter-selector-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selectors/first-letter-selector-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selectors/first-letter-selector-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selectors/first-letter-selector-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selectors/first-letter-selector-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selectors/first-letter-selector-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selectors/first-letter-selector-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selectors/first-letter-selector-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selectors/first-letter-selector-007-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selectors/first-letter-selector-007-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selectors/html-case-sensitivity-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selectors/html-case-sensitivity-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selectors/lang-selector-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selectors/lang-selector-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/selectors/pseudo-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/selectors/pseudo-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/stacking-context/composite-change-after-scroll-preserves-stacking-order-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/stacking-context/composite-change-after-scroll-preserves-stacking-order-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/stacking-context/composite-change-after-scroll-preserves-stacking-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/stacking-context/composite-change-after-scroll-preserves-stacking-order.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/stacking-context/opacity-affects-block-in-inline-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/stacking-context/opacity-affects-block-in-inline-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/stacking-context/opacity-affects-block-in-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/stacking-context/opacity-affects-block-in-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/stacking-context/opacity-change-parent-stacking-context-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/stacking-context/opacity-change-parent-stacking-context-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/stacking-context/opacity-change-parent-stacking-context.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/stacking-context/opacity-change-parent-stacking-context.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/stacking-context/opacity-change-twice-stacking-context-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/stacking-context/opacity-change-twice-stacking-context-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/stacking-context/opacity-change-twice-stacking-context.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/stacking-context/opacity-change-twice-stacking-context.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/stacking-context/opacity-transition-change-parent-stacking-context-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/stacking-context/opacity-transition-change-parent-stacking-context-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/stacking-context/opacity-transition-change-parent-stacking-context.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/stacking-context/opacity-transition-change-parent-stacking-context.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/stacking-context/zindex-affects-block-in-inline-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/stacking-context/zindex-affects-block-in-inline-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/stacking-context/zindex-affects-block-in-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/stacking-context/zindex-affects-block-in-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/syntax/at-charset-013.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/syntax/at-charset-013.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/syntax/case-sensitive-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/syntax/case-sensitive-006.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/tables/border-collapse-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/tables/border-collapse-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/tables/border-collapse-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/tables/border-collapse-005.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/tables/caption-side-applies-to-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/tables/caption-side-applies-to-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/tables/caption-side-applies-to-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/tables/caption-side-applies-to-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/tables/caption-side-applies-to-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/tables/caption-side-applies-to-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/tables/caption-side-applies-to-006-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/tables/caption-side-applies-to-006-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/tables/caption-side-applies-to-008-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/tables/caption-side-applies-to-008-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/tables/caption-side-applies-to-017-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/tables/caption-side-applies-to-017-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/tables/collapsing-border-model-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/tables/collapsing-border-model-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/tables/collapsing-border-model-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/tables/collapsing-border-model-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/text/bidi-flag-emoji-02-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/text/bidi-flag-emoji-02-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/text/bidi-flag-emoji-02.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/text/bidi-flag-emoji-02.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/text/bidi-flag-emoji-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/text/bidi-flag-emoji-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/text/bidi-flag-emoji.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/text/bidi-flag-emoji.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/text/bidi-span-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/text/bidi-span-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/text/bidi-span-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/text/bidi-span-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/text/bidi-span-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/text/bidi-span-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/text/bidi-span-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/text/bidi-span-002.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/text/bidi-span-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/text/bidi-span-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/text/bidi-span-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/text/bidi-span-003.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/text/text-indent-on-blank-line-rtl-left-align-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/text/text-indent-on-blank-line-rtl-left-align-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/text/text-indent-on-blank-line-rtl-left-align.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/text/text-indent-on-blank-line-rtl-left-align.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/content-height-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/content-height-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/content-height-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/content-height-002.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/content-height-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/content-height-003.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/content-height-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/content-height-004.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/content-height-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/content-height-005.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/line-height-201.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/line-height-201.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/line-height-202.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/line-height-202.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/line-height-203.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/line-height-203.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/line-height-204.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/line-height-204.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/line-height-205.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/line-height-205.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/line-height-206.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/line-height-206.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/replaced-elements-all-auto-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/replaced-elements-all-auto-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/replaced-elements-all-auto.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/replaced-elements-all-auto.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/replaced-elements-height-20-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/replaced-elements-height-20-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/replaced-elements-height-20.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/replaced-elements-height-20.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/replaced-elements-max-height-20.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/replaced-elements-max-height-20.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/replaced-elements-max-width-40.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/replaced-elements-max-width-40.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/replaced-elements-min-height-20.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/replaced-elements-min-height-20.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/replaced-elements-min-height-40-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/replaced-elements-min-height-40-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/replaced-elements-min-height-40.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/replaced-elements-min-height-40.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/replaced-elements-min-width-40.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/replaced-elements-min-width-40.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/replaced-elements-min-width-80-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/replaced-elements-min-width-80-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/replaced-elements-min-width-80.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/replaced-elements-min-width-80.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/replaced-elements-width-40-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/replaced-elements-width-40-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/replaced-elements-width-40.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/replaced-elements-width-40.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visufx/overflow-009.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visufx/overflow-009.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visufx/overflow-propagation-001a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visufx/overflow-propagation-001a.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visufx/overflow-propagation-001b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visufx/overflow-propagation-001b.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visufx/overflow-propagation-001c.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visufx/overflow-propagation-001c.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/emptyspan-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/emptyspan-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/emptyspan-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/emptyspan-1.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/emptyspan-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/emptyspan-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/emptyspan-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/emptyspan-2.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/emptyspan-3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/emptyspan-3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/emptyspan-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/emptyspan-3.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/emptyspan-4-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/emptyspan-4-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/emptyspan-4.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/emptyspan-4.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/float-inside-inline-between-blocks-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/float-inside-inline-between-blocks-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/float-inside-inline-between-blocks-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/float-inside-inline-between-blocks-1.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/percent-height-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/percent-height-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/percent-height-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/percent-height-1.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-from-split-inline-1-noib-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-from-split-inline-1-noib-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-from-split-inline-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-from-split-inline-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-from-split-inline-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-from-split-inline-1.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-from-split-inline-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-from-split-inline-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-from-split-inline-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-from-split-inline-2.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-from-split-inline-3-noib-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-from-split-inline-3-noib-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-from-split-inline-3-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-from-split-inline-3-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-from-split-inline-3.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-from-split-inline-3.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-from-split-inline-4-noib-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-from-split-inline-4-noib-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-from-split-inline-4-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-from-split-inline-4-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-from-split-inline-4.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-from-split-inline-4.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-from-split-inline-5-noib-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-from-split-inline-5-noib-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-from-split-inline-5-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-from-split-inline-5-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-from-split-inline-5.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-from-split-inline-5.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-from-split-inline-6-noib-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-from-split-inline-6-noib-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-from-split-inline-6-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-from-split-inline-6-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-from-split-inline-6.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-from-split-inline-6.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-split-inline-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-split-inline-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/remove-split-inline-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/remove-split-inline-1.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/split-inner-inline-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/split-inner-inline-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/split-inner-inline-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/split-inner-inline-1.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/split-inner-inline-2-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/split-inner-inline-2-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/split-inner-inline-2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/split-inner-inline-2.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/table-pseudo-in-part3-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/table-pseudo-in-part3-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/table-pseudo-in-part3-1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/table-pseudo-in-part3-1.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/whitespace-present-1-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/whitespace-present-1-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/whitespace-present-1a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/whitespace-present-1a.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visuren/whitespace-present-1b.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visuren/whitespace-present-1b.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/backgrounds/support/background-iframes-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/backgrounds/support/background-iframes-001.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/box-display/support/root-canvas-001a.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/box-display/support/root-canvas-001a.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/animations/line-height-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/animations/line-height-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/crashtests/dir-change-simplifed-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/crashtests/dir-change-simplifed-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/crashtests/inline-block-baseline-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/crashtests/inline-block-baseline-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/linebox/support/iframe-inner.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/linebox/support/iframe-inner.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test.skip('snapshot CSS2/normal-flow/crashtests/block-in-inline-ax-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/crashtests/block-in-inline-ax-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/normal-flow/support/green.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/normal-flow/support/green.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/text/crashtests/bidi-inline-fragment-oof-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/text/crashtests/bidi-inline-fragment-oof-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/reference/content-height-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/reference/content-height-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/reference/content-height-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/reference/content-height-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/reference/content-height-003-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/reference/content-height-003-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/reference/content-height-004-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/reference/content-height-004-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/reference/content-height-005-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/reference/content-height-005-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/reference/line-height-201-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/reference/line-height-201-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/reference/line-height-202-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/reference/line-height-202-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/reference/line-height-203-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/reference/line-height-203-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visudet/reference/line-height-206-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visudet/reference/line-height-206-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visufx/animation/visibility-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visufx/animation/visibility-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })




   test('snapshot CSS2/visufx/support/overflow-propagation-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/CSS2/visufx/support/overflow-propagation-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());});
await expect(page).toHaveScreenshot();
   })

