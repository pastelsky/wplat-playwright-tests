import { test, expect } from "@playwright/test"; 

 
   test('snapshot reference/black_box_ends_when_blue_box_ends_6_boxes_ahem.html', async ({ page }) => {
      await page.goto('http://localhost:5050/reference/black_box_ends_when_blue_box_ends_6_boxes_ahem.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot reference/blank.html', async ({ page }) => {
      await page.goto('http://localhost:5050/reference/blank.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot reference/nothing.html', async ({ page }) => {
      await page.goto('http://localhost:5050/reference/nothing.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot reference/only_pass_parens_semicolon.html', async ({ page }) => {
      await page.goto('http://localhost:5050/reference/only_pass_parens_semicolon.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot reference/pass_if_filler_text_underlined-notref.html', async ({ page }) => {
      await page.goto('http://localhost:5050/reference/pass_if_filler_text_underlined-notref.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot reference/pass_if_filler_text_underlined.html', async ({ page }) => {
      await page.goto('http://localhost:5050/reference/pass_if_filler_text_underlined.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot reference/pass_if_letter_uppercase.html', async ({ page }) => {
      await page.goto('http://localhost:5050/reference/pass_if_letter_uppercase.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot reference/pass_if_number_10.html', async ({ page }) => {
      await page.goto('http://localhost:5050/reference/pass_if_number_10.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot reference/pass_if_pass_below.html', async ({ page }) => {
      await page.goto('http://localhost:5050/reference/pass_if_pass_below.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot reference/pass_if_square_96px_black.html', async ({ page }) => {
      await page.goto('http://localhost:5050/reference/pass_if_square_96px_black.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot reference/pass_if_two_words.html', async ({ page }) => {
      await page.goto('http://localhost:5050/reference/pass_if_two_words.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot reference/ref-filled-green-100px-square-only.html', async ({ page }) => {
      await page.goto('http://localhost:5050/reference/ref-filled-green-100px-square-only.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot reference/ref-filled-green-200px-square.html', async ({ page }) => {
      await page.goto('http://localhost:5050/reference/ref-filled-green-200px-square.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot reference/ref-filled-green-300px-square.html', async ({ page }) => {
      await page.goto('http://localhost:5050/reference/ref-filled-green-300px-square.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

