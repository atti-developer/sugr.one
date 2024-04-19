
const { extractLogo } = require('../services/index.service')
exports.extractLogo = async (req, res) => {
    const self = 'Controller --> extactlogger'
    try {
        global.appLogger.info(self, `--------------EXECUTION STARTED ---------- `);
        const { website_url } = req.query
        global.appLogger.info(self, `Website Url : `, website_url);
        const logoDetails = await extractLogo(website_url)
        global.appLogger.info(self, `--------------EXECUTION END ---------- `);
        res.send({ logoDetails });
    } catch (error) {
        global.appLogger.error(self, `Internal Server Error: `, error.message);
        res.status(500).send('Internal Server Error');
    }
}