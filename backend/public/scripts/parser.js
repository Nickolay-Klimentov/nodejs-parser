/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
// eslint-disable-next-line import/no-extraneous-dependencies
const puppeteer = require('puppeteer');

async function parser(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  const scriptLinks = await page.evaluate(() => {
    const scripts = Array.from(document.querySelectorAll('script'), (script) =>
      script.getAttribute('src'),
    );
    return scripts;
  });
  const scripts = scriptLinks
    .filter((script) => script !== null && script.endsWith('.js'))
    .map((script) => script.split('/').slice(-1).join(''));

  const styleLinks = await page.evaluate(() => {
    const styles = Array.from(document.querySelectorAll('link'), (style) =>
      style.getAttribute('href'),
    );
    return styles;
  });
  const styles = styleLinks
    .filter((style) => style !== null && style.endsWith('.css'))
    .map((style) => style.split('/').slice(-1).join(''));

  await browser.close();

  return {
    scripts,
    styles,
  };
}

module.exports = parser;
