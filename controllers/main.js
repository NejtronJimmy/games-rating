const { getData } = require("../appModules/api");
const endpoins = require("../appModules/api/config");
const staticFile = require("../appModules/http-utils/static-file");
const makeRatingFile = require("../rating/rating-file,js");
const { config } = require("../rating");



async function mainRouteController(res, publicUrl, extname) {
  const data = await makeRatingFile(config.PATH_TO_RATING_FILE, data);
  await makeRatingFile(config.PATH_TO_RATING_FILE)
    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
  }
  module.exports = mainRouteController;