const config = require("./config");
const { createRating, updateRating } = require("./calculations");
const makeRatingFile = require("./rating-file,js");

module.exports = {
makeRatingFile,
config,
createRating,
updateRating,
};