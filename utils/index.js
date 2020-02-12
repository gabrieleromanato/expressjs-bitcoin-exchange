'use strict';

const superagent = require('superagent');
const { apiKey } = require('../config');

module.exports = {
    apiRequest( currency ) {
        const url = `https://coinlib.io/api/v1/coin?key=${apiKey}&pref=${currency}&symbol=BTC`;
        return superagent.get(url);
    }
};