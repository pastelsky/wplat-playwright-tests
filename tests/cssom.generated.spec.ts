import { test, expect } from "@playwright/test"; 

 
   test('snapshot cssom/CSS-namespace-object-class-string.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSS-namespace-object-class-string.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSContainerRule.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSContainerRule.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSCounterStyleRule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSCounterStyleRule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSFontFaceRule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSFontFaceRule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSFontFeatureValuesRule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSFontFeatureValuesRule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSGroupingRule-cssRules.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSGroupingRule-cssRules.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSGroupingRule-insertRule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSGroupingRule-insertRule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSKeyframeRule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSKeyframeRule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSKeyframesRule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSKeyframesRule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSNamespaceRule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSNamespaceRule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSRuleList.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSRuleList.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSStyleRule-set-selectorText-namespace.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSStyleRule-set-selectorText-namespace.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSStyleRule-set-selectorText.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSStyleRule-set-selectorText.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSStyleRule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSStyleRule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSStyleSheet-constructable-baseURL.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSStyleSheet-constructable-baseURL.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSStyleSheet-constructable-concat-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSStyleSheet-constructable-concat-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSStyleSheet-constructable-concat.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSStyleSheet-constructable-concat.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSStyleSheet-constructable-cssRules.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSStyleSheet-constructable-cssRules.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSStyleSheet-constructable-disabled-regular-sheet-insertion.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSStyleSheet-constructable-disabled-regular-sheet-insertion.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSStyleSheet-constructable-disallow-import.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSStyleSheet-constructable-disallow-import.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSStyleSheet-constructable-duplicate.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSStyleSheet-constructable-duplicate.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSStyleSheet-constructable-replace-on-regular-sheet.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSStyleSheet-constructable-replace-on-regular-sheet.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSStyleSheet-constructable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSStyleSheet-constructable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSStyleSheet-modify-after-removal.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSStyleSheet-modify-after-removal.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSStyleSheet-template-adoption.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSStyleSheet-template-adoption.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/CSSStyleSheet.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/CSSStyleSheet.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/HTMLLinkElement-disabled-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/HTMLLinkElement-disabled-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/HTMLLinkElement-disabled-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/HTMLLinkElement-disabled-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/HTMLLinkElement-disabled-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/HTMLLinkElement-disabled-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/HTMLLinkElement-disabled-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/HTMLLinkElement-disabled-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/HTMLLinkElement-disabled-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/HTMLLinkElement-disabled-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/HTMLLinkElement-disabled-006.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/HTMLLinkElement-disabled-006.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/HTMLLinkElement-disabled-007.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/HTMLLinkElement-disabled-007.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/HTMLLinkElement-disabled-alternate-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/HTMLLinkElement-disabled-alternate-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/HTMLLinkElement-disabled-alternate.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/HTMLLinkElement-disabled-alternate.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/MediaList.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/MediaList.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/MutationObserver-style.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/MutationObserver-style.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/StyleSheetList.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/StyleSheetList.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/adoptedstylesheets-observablearray.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/adoptedstylesheets-observablearray.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/at-namespace.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/at-namespace.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/base-uri.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/base-uri.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/border-shorthand-serialization.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/border-shorthand-serialization.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/caretPositionFromPoint-with-transformation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/caretPositionFromPoint-with-transformation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/computed-style-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/computed-style-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/computed-style-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/computed-style-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/computed-style-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/computed-style-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/computed-style-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/computed-style-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/computed-style-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/computed-style-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/computed-style-set-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/computed-style-set-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/css-style-attr-decl-block.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/css-style-attr-decl-block.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/css-style-attribute-modifications.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/css-style-attribute-modifications.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/css-style-declaration-modifications.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/css-style-declaration-modifications.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/css-style-reparse.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/css-style-reparse.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssimportrule-parent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssimportrule-parent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssimportrule-sheet-identity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssimportrule-sheet-identity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssimportrule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssimportrule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssom-cssText-serialize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssom-cssText-serialize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssom-cssstyledeclaration-set.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssom-cssstyledeclaration-set.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssom-fontfacerule-constructors.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssom-fontfacerule-constructors.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssom-fontfacerule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssom-fontfacerule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssom-getPropertyValue-common-checks.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssom-getPropertyValue-common-checks.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssom-pagerule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssom-pagerule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssom-ruleTypeAndOrder.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssom-ruleTypeAndOrder.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssom-setProperty-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssom-setProperty-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-cssfontrule.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-cssfontrule.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-csstext-all-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-csstext-all-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-csstext-final-delimiter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-csstext-final-delimiter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-csstext-important.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-csstext-important.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-csstext.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-csstext.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-custom-properties.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-custom-properties.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-mutability.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-mutability.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-mutationrecord-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-mutationrecord-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-mutationrecord-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-mutationrecord-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-mutationrecord-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-mutationrecord-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-mutationrecord-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-mutationrecord-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-mutationrecord-005.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-mutationrecord-005.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-properties.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-properties.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-registered-custom-properties.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-registered-custom-properties.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-setter-attr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-setter-attr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-setter-declarations.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-setter-declarations.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-setter-form-controls.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-setter-form-controls.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/cssstyledeclaration-setter-logical.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/cssstyledeclaration-setter-logical.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/declaration-block-all-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/declaration-block-all-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/escape.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/escape.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/flex-serialization.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/flex-serialization.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/font-family-serialization-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/font-family-serialization-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/font-shorthand-serialization.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/font-shorthand-serialization.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/font-variant-shorthand-serialization.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/font-variant-shorthand-serialization.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-animations-replaced-into-ib-split.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-animations-replaced-into-ib-split.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-detached-subtree.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-detached-subtree.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-display-none-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-display-none-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-display-none-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-display-none-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-display-none-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-display-none-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-dynamic-subdoc.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-dynamic-subdoc.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-getter-v-properties.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-getter-v-properties.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-insets-absolute.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-insets-absolute.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-insets-fixed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-insets-fixed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-insets-nobox.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-insets-nobox.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-insets-relative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-insets-relative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-insets-static.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-insets-static.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-insets-sticky-container-for-abspos.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-insets-sticky-container-for-abspos.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-insets-sticky.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-insets-sticky.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-layout-dependent-removed-ib-sibling.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-layout-dependent-removed-ib-sibling.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-layout-dependent-replaced-into-ib-split.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-layout-dependent-replaced-into-ib-split.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-line-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-line-height.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-logical-enumeration.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-logical-enumeration.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-property-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-property-order.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-pseudo.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-pseudo.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-resolved-colors.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-resolved-colors.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-resolved-min-max-clamping.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-resolved-min-max-clamping.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-sticky-pos-percent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-sticky-pos-percent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/getComputedStyle-width-scroll.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/getComputedStyle-width-scroll.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/historical.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/historical.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/idlharness.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/idlharness.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/inline-style-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/inline-style-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/insertRule-across-context.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/insertRule-across-context.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/insertRule-charset-no-index.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/insertRule-charset-no-index.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/insertRule-from-script-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/insertRule-from-script-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/insertRule-from-script.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/insertRule-from-script.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/insertRule-import-no-index.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/insertRule-import-no-index.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/insertRule-namespace-no-index.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/insertRule-namespace-no-index.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/insertRule-no-index.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/insertRule-no-index.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/insertRule-syntax-error-01.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/insertRule-syntax-error-01.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/medialist-dynamic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/medialist-dynamic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/medialist-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/medialist-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/medialist-interfaces-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/medialist-interfaces-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/medialist-interfaces-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/medialist-interfaces-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/medialist-interfaces-004.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/medialist-interfaces-004.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/mediaquery-sort-dedup.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/mediaquery-sort-dedup.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/overflow-serialization.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/overflow-serialization.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/page-descriptors.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/page-descriptors.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/preferred-stylesheet-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/preferred-stylesheet-order.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/preferred-stylesheet-reversed-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/preferred-stylesheet-reversed-order.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/property-accessors.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/property-accessors.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/removerule-invalidation-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/removerule-invalidation-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/rule-restrictions.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/rule-restrictions.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/selectorSerialize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/selectorSerialize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/selectorText-modification-restyle-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/selectorText-modification-restyle-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/selectorText-modification-restyle-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/selectorText-modification-restyle-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/selectorText-modification-restyle-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/selectorText-modification-restyle-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/serialization-CSSDeclaration-with-important.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/serialization-CSSDeclaration-with-important.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/serialize-all-longhands.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/serialize-all-longhands.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/serialize-custom-props.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/serialize-custom-props.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/serialize-media-rule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/serialize-media-rule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/serialize-namespaced-type-selectors.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/serialize-namespaced-type-selectors.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/serialize-values.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/serialize-values.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/serialize-variable-reference.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/serialize-variable-reference.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/setproperty-null-undefined.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/setproperty-null-undefined.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/shorthand-serialization.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/shorthand-serialization.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/shorthand-values.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/shorthand-values.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/style-attr-update-across-documents.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/style-attr-update-across-documents.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/style-sheet-interfaces-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/style-sheet-interfaces-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/style-sheet-interfaces-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/style-sheet-interfaces-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/stylesheet-replacedata-dynamic-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/stylesheet-replacedata-dynamic-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/stylesheet-replacedata-dynamic.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/stylesheet-replacedata-dynamic.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/stylesheet-same-origin.sub.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/stylesheet-same-origin.sub.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/stylesheet-title.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/stylesheet-title.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/ttwf-cssom-doc-ext-load-count.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/ttwf-cssom-doc-ext-load-count.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/ttwf-cssom-doc-ext-load-tree-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/ttwf-cssom-doc-ext-load-tree-order.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/ttwf-cssom-document-extension.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/ttwf-cssom-document-extension.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom/variable-names.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom/variable-names.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

