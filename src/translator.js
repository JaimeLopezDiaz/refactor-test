"use strict";

const Translate = require('@google-cloud/translate');
const async = require('async');

let TranslateService = {};
let translate = new Translate({
  keyFilename: './src/translator.conf.json',
});

TranslateService.translateText = (content, targetLang, next) => {

  let calls = [];

  calls.push( (callback) => {

    translate
      .translate( content, targetLang )
      .then(results => {
        return callback(null, results[0]);
      })
      .catch(err => {
        console.error(`ERROR: ${err}`);
      });
  });

  async.waterfall(calls, (err, response) => {
    if (next) next(err, response);
  });
};

module.exports = TranslateService;