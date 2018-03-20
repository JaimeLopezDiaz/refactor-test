"use strict";

const translate = require('./translator');

const text = "quiero trabajar con los mejores";
const targetLang = 'en';

translate.translateText(text, targetLang, (err, result) => {

    if (err) {
        next(err);
        return;
    }

  console.log(result);

});