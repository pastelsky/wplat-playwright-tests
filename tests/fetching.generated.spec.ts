import { test, expect } from "@playwright/test"; 

 
   test('snapshot fetching/fetch-resources.sub.html', async ({ page }) => {
      await page.goto('http://localhost:5050/fetching/fetch-resources.sub.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

