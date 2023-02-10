import { test, expect } from "@playwright/test"; 

 
   test('snapshot cssom-view/CaretPosition-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/CaretPosition-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/DOMRectList.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/DOMRectList.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/GetBoundingRect.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/GetBoundingRect.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/HTMLBody-ScrollArea_quirksmode.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/HTMLBody-ScrollArea_quirksmode.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/HTMLImageElement-x-and-y-ignore-transforms.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/HTMLImageElement-x-and-y-ignore-transforms.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/MediaQueryList-addListener-handleEvent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/MediaQueryList-addListener-handleEvent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/MediaQueryList-addListener-removeListener.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/MediaQueryList-addListener-removeListener.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/MediaQueryList-change-event-matches-value.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/MediaQueryList-change-event-matches-value.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/MediaQueryList-extends-EventTarget-interop.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/MediaQueryList-extends-EventTarget-interop.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/MediaQueryList-extends-EventTarget.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/MediaQueryList-extends-EventTarget.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/MediaQueryListEvent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/MediaQueryListEvent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/Screen-pixelDepth-Screen-colorDepth001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/Screen-pixelDepth-Screen-colorDepth001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/add-background-attachment-fixed-during-smooth-scroll-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/add-background-attachment-fixed-during-smooth-scroll-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/add-background-attachment-fixed-during-smooth-scroll.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/add-background-attachment-fixed-during-smooth-scroll.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/background-change-during-smooth-scroll.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/background-change-during-smooth-scroll.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/checkVisibility.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/checkVisibility.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/client-props-inline-list-item.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/client-props-inline-list-item.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/client-props-input.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/client-props-input.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/client-props-root-display-none-crash.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/client-props-root-display-none-crash.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/client-props-root.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/client-props-root.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/cssom-getBoundingClientRect-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/cssom-getBoundingClientRect-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/cssom-getBoundingClientRect-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/cssom-getBoundingClientRect-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/cssom-getBoundingClientRect-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/cssom-getBoundingClientRect-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/cssom-getBoundingClientRect-vertical-rl-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/cssom-getBoundingClientRect-vertical-rl-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/cssom-getBoundingClientRect-vertical-rl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/cssom-getBoundingClientRect-vertical-rl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/cssom-getBoxQuads-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/cssom-getBoxQuads-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/cssom-getBoxQuads-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/cssom-getBoxQuads-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/cssom-getClientRects-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/cssom-getClientRects-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/cssom-getClientRects.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/cssom-getClientRects.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/cssom-view-img-attributes-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/cssom-view-img-attributes-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/cssom-view-window-screen-interface.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/cssom-view-window-screen-interface.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/devicePixelRatio-undisplayed-iframe.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/devicePixelRatio-undisplayed-iframe.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/dom-element-scroll.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/dom-element-scroll.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementFromPoint-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementFromPoint-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementFromPoint-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementFromPoint-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementFromPoint-003.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementFromPoint-003.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementFromPoint-dynamic-anon-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementFromPoint-dynamic-anon-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementFromPoint-ellipsis-in-inline-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementFromPoint-ellipsis-in-inline-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementFromPoint-float-in-relative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementFromPoint-float-in-relative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementFromPoint-float-in-table.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementFromPoint-float-in-table.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementFromPoint-list-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementFromPoint-list-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementFromPoint-mixed-font-sizes.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementFromPoint-mixed-font-sizes.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementFromPoint-parameters.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementFromPoint-parameters.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementFromPoint-subpixel.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementFromPoint-subpixel.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementFromPoint-visibility-hidden-resizer.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementFromPoint-visibility-hidden-resizer.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementFromPoint.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementFromPoint.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementFromPosition.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementFromPosition.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementScroll-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementScroll-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementScroll.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementScroll.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementsFromPoint-iframes.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementsFromPoint-iframes.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementsFromPoint-inline-htb-ltr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementsFromPoint-inline-htb-ltr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementsFromPoint-inline-htb-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementsFromPoint-inline-htb-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementsFromPoint-inline-vlr-ltr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementsFromPoint-inline-vlr-ltr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementsFromPoint-inline-vlr-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementsFromPoint-inline-vlr-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementsFromPoint-inline-vrl-ltr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementsFromPoint-inline-vrl-ltr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementsFromPoint-inline-vrl-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementsFromPoint-inline-vrl-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementsFromPoint-invalid-cases.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementsFromPoint-invalid-cases.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementsFromPoint-shadowroot.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementsFromPoint-shadowroot.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementsFromPoint-simple.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementsFromPoint-simple.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementsFromPoint-svg-text.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementsFromPoint-svg-text.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementsFromPoint-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementsFromPoint-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementsFromPoint-table.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementsFromPoint-table.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/elementsFromPoint.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/elementsFromPoint.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/getBoundingClientRect-empty-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/getBoundingClientRect-empty-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/getBoundingClientRect-shy.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/getBoundingClientRect-shy.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/getBoundingClientRect-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/getBoundingClientRect-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/getClientRects-br-htb-ltr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/getClientRects-br-htb-ltr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/getClientRects-br-htb-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/getClientRects-br-htb-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/getClientRects-br-vlr-ltr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/getClientRects-br-vlr-ltr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/getClientRects-br-vlr-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/getClientRects-br-vlr-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/getClientRects-br-vrl-ltr.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/getClientRects-br-vrl-ltr.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/getClientRects-br-vrl-rtl.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/getClientRects-br-vrl-rtl.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/getClientRects-inline-atomic-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/getClientRects-inline-atomic-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/getClientRects-inline-inline-child.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/getClientRects-inline-inline-child.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/getClientRects-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/getClientRects-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/historical.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/historical.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/htmlelement-offset-width-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/htmlelement-offset-width-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/idlharness.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/idlharness.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/inheritance.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/inheritance.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/long_scroll_composited-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/long_scroll_composited-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/long_scroll_composited.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/long_scroll_composited.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/matchMedia-display-none-iframe.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/matchMedia-display-none-iframe.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/matchMedia.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/matchMedia.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/mouseEvent-offsetXY-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/mouseEvent-offsetXY-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/mouseEvent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/mouseEvent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/negativeMargins.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/negativeMargins.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/offsetParent-block-in-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/offsetParent-block-in-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/offsetParent_element_test.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/offsetParent_element_test.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/offsetTop-offsetLeft-nested-offsetParents.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/offsetTop-offsetLeft-nested-offsetParents.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/offsetTopLeft-border-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/offsetTopLeft-border-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/offsetTopLeft-empty-inline-offset.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/offsetTopLeft-empty-inline-offset.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/offsetTopLeft-empty-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/offsetTopLeft-empty-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/offsetTopLeft-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/offsetTopLeft-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/offsetTopLeft-leading-space-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/offsetTopLeft-leading-space-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/offsetTopLeft-trailing-space-inline.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/offsetTopLeft-trailing-space-inline.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/offsetTopLeftInScrollableParent.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/offsetTopLeftInScrollableParent.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/outer-svg.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/outer-svg.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/position-sticky-root-scroller-with-scroll-behavior.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/position-sticky-root-scroller-with-scroll-behavior.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/pt-to-px-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/pt-to-px-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/range-bounding-client-rect-with-display-contents.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/range-bounding-client-rect-with-display-contents.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/resize-event-on-initial-layout.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/resize-event-on-initial-layout.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/screenLeftTop.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/screenLeftTop.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scroll-back-to-initial-position.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scroll-back-to-initial-position.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scroll-behavior-default-css.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scroll-behavior-default-css.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scroll-behavior-element.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scroll-behavior-element.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scroll-behavior-main-frame-root.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scroll-behavior-main-frame-root.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scroll-behavior-main-frame-window.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scroll-behavior-main-frame-window.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scroll-behavior-scrollintoview-nested.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scroll-behavior-scrollintoview-nested.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scroll-behavior-smooth-navigation.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scroll-behavior-smooth-navigation.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scroll-behavior-smooth-positions.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scroll-behavior-smooth-positions.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scroll-behavior-smooth.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scroll-behavior-smooth.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scroll-behavior-subframe-root.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scroll-behavior-subframe-root.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scroll-behavior-subframe-window.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scroll-behavior-subframe-window.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scroll-no-layout-box.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scroll-no-layout-box.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scroll-overflow-clip-quirks-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scroll-overflow-clip-quirks-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scroll-overflow-clip-quirks-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scroll-overflow-clip-quirks-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-fixed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-fixed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-horizontal-partially-visible.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-horizontal-partially-visible.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-horizontal-tb-writing-mode-and-rtl-direction.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-horizontal-tb-writing-mode-and-rtl-direction.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-horizontal-tb-writing-mode.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-horizontal-tb-writing-mode.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-inline-image.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-inline-image.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-scrollMargin.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-scrollMargin.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-scrollPadding.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-scrollPadding.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-shadow.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-shadow.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-sideways-lr-writing-mode-and-rtl-direction.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-sideways-lr-writing-mode-and-rtl-direction.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-sideways-lr-writing-mode.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-sideways-lr-writing-mode.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-sideways-rl-writing-mode-and-rtl-direction.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-sideways-rl-writing-mode-and-rtl-direction.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-sideways-rl-writing-mode.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-sideways-rl-writing-mode.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-smooth.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-smooth.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-stuck.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-stuck.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-svg-shape.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-svg-shape.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-vertical-lr-writing-mode-and-rtl-direction.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-vertical-lr-writing-mode-and-rtl-direction.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-vertical-lr-writing-mode.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-vertical-lr-writing-mode.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollIntoView-vertical-rl-writing-mode.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollIntoView-vertical-rl-writing-mode.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollLeft-of-scroller-with-wider-scrollbar.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollLeft-of-scroller-with-wider-scrollbar.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollLeftTop.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollLeftTop.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollTop-display-change-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollTop-display-change-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollTop-display-change.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollTop-display-change.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrolling-no-browsing-context.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrolling-no-browsing-context.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrolling-quirks-vs-nonquirks.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrolling-quirks-vs-nonquirks.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollingElement-quirks-dynamic-001-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollingElement-quirks-dynamic-001-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollingElement-quirks-dynamic-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollingElement-quirks-dynamic-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollingElement-quirks-dynamic-002-ref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollingElement-quirks-dynamic-002-ref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollingElement-quirks-dynamic-002.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollingElement-quirks-dynamic-002.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollingElement.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollingElement.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/scrollintoview.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/scrollintoview.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/table-border-collapse-client-width-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/table-border-collapse-client-width-height.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/table-border-separate-client-width-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/table-border-separate-client-width-height.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/table-client-props.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/table-client-props.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/table-offset-props.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/table-offset-props.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/table-scroll-props.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/table-scroll-props.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/table-with-border-client-width-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/table-with-border-client-width-height.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/ttwf-js-cssomview-getclientrects-length.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/ttwf-js-cssomview-getclientrects-length.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/window-screen-height-immutable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/window-screen-height-immutable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/window-screen-height.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/window-screen-height.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/window-screen-width-immutable.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/window-screen-width-immutable.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/window-screen-width.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/window-screen-width.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/parsing/scroll-behavior-computed.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/parsing/scroll-behavior-computed.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/parsing/scroll-behavior-invalid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/parsing/scroll-behavior-invalid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/parsing/scroll-behavior-valid.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/parsing/scroll-behavior-valid.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/resources/iframe1.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/resources/iframe1.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot cssom-view/resources/iframe2.html', async ({ page }) => {
      await page.goto('http://localhost:5050/cssom-view/resources/iframe2.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

