'use strict';
var bookshelf = require('../bookshelf');
var Score = bookshelf.Model.extend({
    tableName: 'score',
});
module.exports = Score;