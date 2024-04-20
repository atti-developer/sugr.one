var express = require('express');
var router = express.Router();
const { extractLogo } = require('../controllers/index.controller')
const { ValidateUrl } = require('../middleware/validateUrl')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('/api-docs')
});



/**
 * @swagger
 *   /extract-logo:
 *   get:
 *     tags:
 *       - Extract Website Logo APIs
 *     name: Extract Website Brand Logo
 *     summary: Extract Website Brand Logo
 *     parameters:
 *       - in: query
 *         name: website_url
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Logo Details fetched successfully
 *       500:
 *         description: Error occurred
 */
router.get('/extract-logo', ValidateUrl, extractLogo);

module.exports = router;
