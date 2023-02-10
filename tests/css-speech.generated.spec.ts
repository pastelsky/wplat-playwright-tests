import { test, expect } from "@playwright/test"; 

 
   test('snapshot css-speech/age-declarations-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-speech/age-declarations-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-speech/age-declarations-female-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-speech/age-declarations-female-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-speech/age-declarations-male-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-speech/age-declarations-male-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-speech/age-declarations-neutral-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-speech/age-declarations-neutral-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-speech/generic-gender-declarations-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-speech/generic-gender-declarations-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-speech/no-voice-family-specified-001.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-speech/no-voice-family-specified-001.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-speech/voice-family-integer.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-speech/voice-family-integer.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-speech/speak-as/speak-as-digits-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-speech/speak-as/speak-as-digits-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-speech/speak-as/speak-as-digits-002-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-speech/speak-as/speak-as-digits-002-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-speech/speak-as/speak-as-literal-punctuation-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-speech/speak-as/speak-as-literal-punctuation-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  



 
   test('snapshot css-speech/speak-as/speak-as-spell-out-001-manual.html', async ({ page }) => {
      await page.goto('http://localhost:5050/css-speech/speak-as/speak-as-spell-out-001-manual.html');
      page.on('console', msg => { console.log('From page', msg.text());}); 
await expect(page).toHaveScreenshot();
   })  

