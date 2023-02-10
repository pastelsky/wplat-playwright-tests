import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-device-adapt/documentElement-clientWidth-on-minimum-scale-size.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-device-adapt/documentElement-clientWidth-on-minimum-scale-size.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-device-adapt/viewport-user-scalable-no-clamp-to-max.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-device-adapt/viewport-user-scalable-no-clamp-to-max.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-device-adapt/viewport-user-scalable-no-clamp-to-min.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-device-adapt/viewport-user-scalable-no-clamp-to-min.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-device-adapt/viewport-user-scalable-no-wide-content.tentative.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-device-adapt/viewport-user-scalable-no-wide-content.tentative.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

