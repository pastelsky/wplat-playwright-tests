import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-typed-om/CSSMatrixComponent-DOMMatrix-mutable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/CSSMatrixComponent-DOMMatrix-mutable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/declared-styleMap-accepts-inherit.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/declared-styleMap-accepts-inherit.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/factory-absolute-length.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/factory-absolute-length.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/factory-duration.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/factory-duration.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/factory-frequency.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/factory-frequency.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/historical.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/historical.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/idlharness.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/idlharness.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/perspective-typed-arithmetic-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/perspective-typed-arithmetic-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/rotate-by-added-angle-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/rotate-by-added-angle-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/rotate-by-added-angle.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/rotate-by-added-angle.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/set-css-wide-in-custom-property-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/set-css-wide-in-custom-property-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/set-var-reference-thcrash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/set-var-reference-thcrash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/width-by-clamp-px-em.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/width-by-clamp-px-em.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/width-by-max-px-em.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/width-by-max-px-em.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/width-by-min-px-em.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/width-by-min-px-em.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-normalization/normalize-ident.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-normalization/normalize-ident.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-normalization/normalize-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-normalization/normalize-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-normalization/normalize-numeric.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-normalization/normalize-numeric.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-normalization/normalize-tokens.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-normalization/normalize-tokens.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-normalization/transformvalue-normalization.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-normalization/transformvalue-normalization.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-objects/parse-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-objects/parse-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-objects/parse.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-objects/parse.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-objects/parseAll-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-objects/parseAll-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-objects/parseAll.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-objects/parseAll.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-serialization/cssImageValue.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-serialization/cssImageValue.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-serialization/cssKeywordValue.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-serialization/cssKeywordValue.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-serialization/cssMathValue.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-serialization/cssMathValue.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-serialization/cssStyleValue-cssom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-serialization/cssStyleValue-cssom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-serialization/cssStyleValue-string.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-serialization/cssStyleValue-string.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-serialization/cssTransformValue.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-serialization/cssTransformValue.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-serialization/cssUnitValue.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-serialization/cssUnitValue.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-serialization/cssUnparsedValue.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-serialization/cssUnparsedValue.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssColorValue.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssColorValue.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssHSL.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssHSL.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssHWB.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssHWB.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssKeywordValue-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssKeywordValue-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssKeywordValue-value.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssKeywordValue-value.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssKeywordValue.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssKeywordValue.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssLCH.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssLCH.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssLab.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssLab.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssMatrixComponent.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssMatrixComponent.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssOKLCH.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssOKLCH.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssOKLab.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssOKLab.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssPerspective.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssPerspective.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssRGB.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssRGB.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssRotate.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssRotate.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssScale.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssScale.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssSkew.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssSkew.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssSkewX.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssSkewX.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssSkewY.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssSkewY.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssTransformComponent-2d-flattening.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssTransformComponent-2d-flattening.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssTransformComponent-toMatrix-relative-units.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssTransformComponent-toMatrix-relative-units.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssTransformComponent-toMatrix.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssTransformComponent-toMatrix.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssTransformValue-toMatrix.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssTransformValue-toMatrix.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssTransformValue.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssTransformValue.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssTranslate.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssTranslate.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssUnparsedValue-empty.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssUnparsedValue-empty.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssUnparsedValue-indexed-getter-setter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssUnparsedValue-indexed-getter-setter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssUnparsedValue-iterable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssUnparsedValue-iterable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssUnparsedValue-length.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssUnparsedValue-length.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssUnparsedValue.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssUnparsedValue.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssVariableReferenceValue-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssVariableReferenceValue-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssVariableReferenceValue-variable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssVariableReferenceValue-variable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/cssVariableReferenceValue.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/cssVariableReferenceValue.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-serialization/crashtests/cssInvertValue-convert-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-serialization/crashtests/cssInvertValue-convert-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-serialization/crashtests/cssInvertValue-zero.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-serialization/crashtests/cssInvertValue-zero.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-serialization/crashtests/cssTransform-Internal-value.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-serialization/crashtests/cssTransform-Internal-value.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/numeric-objects/add-two-types.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/numeric-objects/add-two-types.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/numeric-objects/arithmetic.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/numeric-objects/arithmetic.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/numeric-objects/create-a-type.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/numeric-objects/create-a-type.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/numeric-objects/cssMathInvert-type.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/numeric-objects/cssMathInvert-type.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/numeric-objects/cssMathNegate-type.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/numeric-objects/cssMathNegate-type.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/numeric-objects/cssMathValue.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/numeric-objects/cssMathValue.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/numeric-objects/cssUnitValue-value.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/numeric-objects/cssUnitValue-value.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/numeric-objects/cssUnitValue.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/numeric-objects/cssUnitValue.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/numeric-objects/cssnumericvalue-multiply-two-types.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/numeric-objects/cssnumericvalue-multiply-two-types.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/numeric-objects/equals.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/numeric-objects/equals.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/numeric-objects/numeric-factory.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/numeric-objects/numeric-factory.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/numeric-objects/parse.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/numeric-objects/parse.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/numeric-objects/to.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/numeric-objects/to.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/stylevalue-subclasses/numeric-objects/toSum.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/stylevalue-subclasses/numeric-objects/toSum.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/computed/computed.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/computed/computed.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/computed/get-auto-min-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/computed/get-auto-min-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/computed/get-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/computed/get-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/computed/get-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/computed/get-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/computed/get-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/computed/get-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/computed/get.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/computed/get.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/computed/getAll-disconnected-element-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/computed/getAll-disconnected-element-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/computed/getAll-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/computed/getAll-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/computed/getAll.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/computed/getAll.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/computed/has.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/computed/has.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/computed/iterable.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/computed/iterable.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/declared/append.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/declared/append.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/declared/clear.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/declared/clear.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/declared/declared.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/declared/declared.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/declared/delete-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/declared/delete-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/declared/delete-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/declared/delete-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/declared/delete.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/declared/delete.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/declared/get-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/declared/get-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/declared/get-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/declared/get-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/declared/get.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/declared/get.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/declared/getAll-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/declared/getAll-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/declared/getAll.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/declared/getAll.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/declared/has.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/declared/has.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/declared/iterable.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/declared/iterable.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/declared/set-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/declared/set-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/declared/set.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/declared/set.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/inline/append.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/inline/append.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/inline/clear.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/inline/clear.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/inline/delete-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/inline/delete-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/inline/delete-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/inline/delete-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/inline/delete.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/inline/delete.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/inline/get-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/inline/get-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/inline/get-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/inline/get-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/inline/get.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/inline/get.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/inline/getAll-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/inline/getAll-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/inline/getAll.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/inline/getAll.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/inline/has.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/inline/has.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/inline/iterable.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/inline/iterable.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/inline/set-shorthand.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/inline/set-shorthand.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/inline/set.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/inline/set.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/accent-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/accent-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/alignment-baseline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/alignment-baseline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/all.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/all.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/animation-delay-end.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/animation-delay-end.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/animation-delay-start.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/animation-delay-start.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/animation-delay.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/animation-delay.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/animation-direction.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/animation-direction.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/animation-duration.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/animation-duration.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/animation-fill-mode.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/animation-fill-mode.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/animation-iteration-count.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/animation-iteration-count.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/animation-name.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/animation-name.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/animation-play-state.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/animation-play-state.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/animation-timing-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/animation-timing-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/animation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/animation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/backdrop-filter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/backdrop-filter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/backface-visibility.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/backface-visibility.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/background-attachment.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/background-attachment.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/background-blend-mode.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/background-blend-mode.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/background-clip.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/background-clip.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/background-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/background-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/background-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/background-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/background-origin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/background-origin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/background-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/background-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/background-repeat.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/background-repeat.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/background-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/background-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/background.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/background.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/baseline-shift.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/baseline-shift.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/block-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/block-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/border-collapse.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/border-collapse.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/border-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/border-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/border-image-outset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/border-image-outset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/border-image-repeat.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/border-image-repeat.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/border-image-slice.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/border-image-slice.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/border-image-source.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/border-image-source.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/border-image-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/border-image-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/border-radius.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/border-radius.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/border-style.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/border-style.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/border-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/border-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/bottom.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/bottom.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/box-shadow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/box-shadow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/box-sizing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/box-sizing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/break.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/break.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/caption-side.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/caption-side.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/caret-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/caret-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/center-coordinate.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/center-coordinate.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/clear.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/clear.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/clip-path.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/clip-path.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/clip-rule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/clip-rule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/clip.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/clip.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/color-interpolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/color-interpolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/column-count.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/column-count.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/column-rule-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/column-rule-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/column-rule-style.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/column-rule-style.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/column-rule-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/column-rule-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/column-span.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/column-span.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/column-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/column-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/contain.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/contain.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/container-name.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/container-name.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/container-type.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/container-type.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/coordinate.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/coordinate.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/counter-increment.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/counter-increment.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/counter-reset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/counter-reset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/counter-set.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/counter-set.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/cursor.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/cursor.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/d.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/d.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/direction.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/direction.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/display.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/display.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/dominant-baseline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/dominant-baseline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/empty-cells.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/empty-cells.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/fill-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/fill-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/fill-opacity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/fill-opacity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/fill-rule.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/fill-rule.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/fill.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/fill.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/filter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/filter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/flex-basis.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/flex-basis.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/flex-direction.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/flex-direction.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/flex-flow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/flex-flow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/flex-grow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/flex-grow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/flex-shrink.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/flex-shrink.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/flex-wrap.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/flex-wrap.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/flex.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/flex.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/float.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/float.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/flood-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/flood-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/flood-opacity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/flood-opacity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-family.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-family.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-feature-settings.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-feature-settings.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-kerning.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-kerning.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-language-override.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-language-override.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-optical-sizing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-optical-sizing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-palette.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-palette.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-presentation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-presentation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-size-adjust.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-size-adjust.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-stretch.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-stretch.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-style.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-style.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-synthesis.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-synthesis.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-variant-alternates.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-variant-alternates.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-variant-caps.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-variant-caps.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-variant-east-asian.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-variant-east-asian.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-variant-emoji.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-variant-emoji.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-variant-ligatures.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-variant-ligatures.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-variant-numeric.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-variant-numeric.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-variant.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-variant.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-variation-settings.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-variation-settings.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font-weight.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font-weight.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/font.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/font.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/gap.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/gap.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/grid-area.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/grid-area.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/grid-auto-columns-rows.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/grid-auto-columns-rows.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/grid-auto-flow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/grid-auto-flow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/grid-gap.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/grid-gap.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/grid-start-end.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/grid-start-end.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/grid-template-areas.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/grid-template-areas.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/grid-template-columns-rows.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/grid-template-columns-rows.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/grid-template.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/grid-template.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/grid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/grid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/height.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/hyphens.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/hyphens.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/image-rendering.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/image-rendering.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/inline-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/inline-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/isolation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/isolation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/left.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/left.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/letter-spacing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/letter-spacing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/lighting-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/lighting-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/line-break.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/line-break.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/line-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/line-height.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/list-style-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/list-style-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/list-style-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/list-style-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/list-style-type.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/list-style-type.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/logical.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/logical.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/margin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/marker.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/marker.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/mask-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/mask-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/mask-type.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/mask-type.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/mask.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/mask.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/mix-blend-mode.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/mix-blend-mode.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/object-fit.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/object-fit.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/object-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/object-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/offset-anchor.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/offset-anchor.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/offset-distance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/offset-distance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/offset-path.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/offset-path.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/offset-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/offset-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/offset-rotate.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/offset-rotate.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/offset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/offset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/opacity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/opacity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/order.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/orphans.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/orphans.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/outline-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/outline-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/outline-offset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/outline-offset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/outline-style.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/outline-style.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/outline-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/outline-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/overflow-anchor.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/overflow-anchor.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/overflow-clip-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/overflow-clip-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/overflow-wrap.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/overflow-wrap.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/overflow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/overflow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/overscroll-behavior.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/overscroll-behavior.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/padding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/page.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/page.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/paint-order.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/paint-order.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/perspective-origin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/perspective-origin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/perspective.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/perspective.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/pointer-events.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/pointer-events.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/quotes.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/quotes.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/radius.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/radius.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/resize.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/resize.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/right.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/right.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/scroll-behavior.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/scroll-behavior.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/scroll-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/scroll-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/scroll-padding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/scroll-padding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/scroll-snap-align.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/scroll-snap-align.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/scroll-snap-stop.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/scroll-snap-stop.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/scroll-snap-type.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/scroll-snap-type.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/scrollbar-gutter.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/scrollbar-gutter.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/scrollbar-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/scrollbar-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/shape-image-threshold.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/shape-image-threshold.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/shape-margin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/shape-margin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/shape-outside.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/shape-outside.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/shape-rendering.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/shape-rendering.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/speak.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/speak.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/stop-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/stop-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/stop-opacity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/stop-opacity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/stroke-dasharray.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/stroke-dasharray.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/stroke-dashoffset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/stroke-dashoffset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/stroke-linecap.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/stroke-linecap.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/stroke-linejoin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/stroke-linejoin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/stroke-miterlimit.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/stroke-miterlimit.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/stroke-opacity.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/stroke-opacity.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/stroke-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/stroke-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/stroke.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/stroke.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/tab-size.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/tab-size.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/table-layout.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/table-layout.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-align-last.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-align-last.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-align.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-align.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-anchor.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-anchor.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-combine-upright.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-combine-upright.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-decoration-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-decoration-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-decoration-line.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-decoration-line.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-decoration-skip-ink.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-decoration-skip-ink.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-decoration-skip.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-decoration-skip.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-decoration-style.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-decoration-style.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-decoration-thickness.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-decoration-thickness.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-decoration.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-decoration.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-emphasis-color.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-emphasis-color.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-indent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-indent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-justify.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-justify.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-orientation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-orientation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-overflow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-overflow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-rendering.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-rendering.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-shadow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-shadow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-size-adjust.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-size-adjust.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-transform.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-transform.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-underline-offset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-underline-offset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/text-underline-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/text-underline-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/top.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/top.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/touch-action.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/touch-action.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/transform-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/transform-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/transform-interpolated.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/transform-interpolated.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/transform-style.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/transform-style.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/transform.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/transform.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/transition-delay.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/transition-delay.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/transition-duration.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/transition-duration.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/transition-property.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/transition-property.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/transition-timing-function.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/transition-timing-function.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/transition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/transition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/unicode-bidi.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/unicode-bidi.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/user-select.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/user-select.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/vector-effect.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/vector-effect.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/vertical-align.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/vertical-align.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/visibility.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/visibility.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/white-space.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/white-space.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/widows.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/widows.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/will-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/will-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/word-break.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/word-break.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/word-spacing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/word-spacing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/word-wrap.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/word-wrap.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/writing-mode.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/writing-mode.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-typed-om/the-stylepropertymap/properties/z-index.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-typed-om/the-stylepropertymap/properties/z-index.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

