var _    = require('underscore');
var util = require('util');

module.exports = function(env, callback) {

    var defaults = {
        articles: 'articles'
    };

    var options = _.extend(env.config.helpers || {}, defaults);

    /**
     * Get all available articles
     * @param {Object} contents
     *
     * @returns {Array} A list of available articles sorted by descending date
     */
    var getArticles = function(contents) {
        return contents[options.articles]._.directories.map(function(item) {
            return item.index;
        }).sort(function(a, b) {
            return b.date - a.date;
        });
    };

    // add the article helper to the environment so we can use it later
    env.helpers.getArticles = getArticles;

    return callback();

};