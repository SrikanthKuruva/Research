import puppeteer from 'puppeteer';

const f = async () => {
    let browser = await puppeteer.launch({headless:false});
    let page = await browser.newPage();
    await page.goto('https://www.youtube.com/');
    await browser.close();
}

f();