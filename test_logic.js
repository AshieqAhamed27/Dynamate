const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
    
    const filePath = `file://${path.join(__dirname, 'index.html').replace(/\\/g, '/')}`;
    await page.goto(filePath, { waitUntil: 'domcontentloaded' });
    
    // Navigate to Auth View
    await page.evaluate(() => app.navigateToAuth('signup'));
    await new Promise(r => setTimeout(r, 500));
    
    // Simulate signup
    await page.type('#auth-name', 'Test User');
    await page.type('#auth-email', 'test@test.com');
    await page.type('#auth-view input[type="password"]', 'password123');
    await page.evaluate(() => document.getElementById('auth-submit').click());
    
    await new Promise(r => setTimeout(r, 500));
    console.log('Test complete');
    
    await browser.close();
})();
