import puppeteer from 'puppeteer';

describe('App.js', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it('contains the Food text', async () => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('.header_title');
    const text = await page.$eval('.header_title', (e) => e.textContent);
    expect(text).toContain('Foods');
  });

  afterAll(() => browser.close());
});
