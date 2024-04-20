exports.ValidateUrl = async (req, res, next) => {
    const self = 'Middleware --> ValidateUrl()'
    let { website_url } = req.query
    try {
        global.appLogger.info(self, `Website Url : `, website_url);
        let url = website_url || 'invalid';
        url = url.substring(0, 6);
        global.appLogger.info(self, `url : `, url);
        if (url.includes('http') || url.includes('https')) {
            next()
        } else {
            global.appLogger.error(self, `Website Url Not Valid : Must be start with http: or https:`);
            res.status(500).json({
                status: false,
                msg: 'Website Url Not Valid : Must be start with http: '
            });
        }
    } catch (error) {
        global.appLogger.error(self, `Caaling Internal Server Error: `, error.message);
        throw error
    }
}