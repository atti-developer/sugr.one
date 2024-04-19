const puppeteer = require('puppeteer');
const axios = require('axios');
const cheerio = require('cheerio');
exports.extractLogo = async (websiteUrl) => {
    const self = 'Services --> extactlogger'
    try {
        // const websiteUrl = 'https://www.sugr.one/';
        global.appLogger.info(self, `Website Url : `, websiteUrl);
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(websiteUrl);

        const logoElement = await page.$('img[src*="logo"]');

        if (logoElement) {
            const logoSrc = await logoElement.evaluate(el => el.getAttribute('src'));
            global.appLogger.info(self, `Logo URL : `, logoSrc);
            return logoSrc
        } else {
            const logoInfo = await extractLogoByIcon(websiteUrl);
            return logoInfo
        }
        await browser.close();
    } catch (error) {
        throw error;
    }
}
async function extractLogoByIcon(websiteUrl) {
    const self = 'Services --> extactlogger'
    try {
        const response = await axios.get(websiteUrl);
        const html = response.data;
        // Parsing HTML using Cheerio
        const $ = cheerio.load(html);
        // Finding the primary logo element
        const logoElement = $('link[rel="image_src"], img[src*="logo"]');
        if (logoElement.length === 0) {
            global.appLogger.error(self, `Primary logo not found on the Website`);
            return ('Primary logo not found on the Website');
        }
        // console.log(logoElement)
        const logoUrl = logoElement.attr('href');
        global.appLogger.info(self, `Logo Fetched Successfully.. : `, logoUrl);
        return logoUrl
    } catch (err) {
        global.appLogger.error(self, `Internal Server Error: `, error.message);
        throw err
    }


}


//  ------------IF WANT TO DOWNLOAD FILE -------------------------------

// async function downloadLogo(logoUrl, outputPath) {
//     try {
//         const response = await axios.get(logoUrl, { responseType: 'stream' });
//         response.data.pipe(fs.createWriteStream(outputPath));
//         console.log('Logo downloaded successfully.');
//     } catch (error) {
//         console.error('Error downloading logo:', error);
//     }
// }

// Example usage:
// 
