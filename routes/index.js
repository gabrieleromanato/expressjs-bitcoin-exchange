'use strict';

const path = require('path');
const express = require('express');
const ABSPATH = path.dirname(process.mainModule.filename) + '/';
const router = express.Router();
const { apiRequest } = require('../utils');

router.get('/', (req, res, next) => {
    res.sendFile(ABSPATH + 'views/index.html');
});

router.post('/value', async (req, res, next) => {
    const { currency } = req.body;
    const validCurrencies = ['USD', 'EUR'];

    if(validCurrencies.includes(currency)) {
        try {
            const response = await apiRequest(currency);
            const data = JSON.parse(response.text);
            res.json(data);
        } catch(err) {
            res.json({ error: 'Unable to get value.', info: err });
        }
    } else {
        res.json({ error: 'You must provide a currency.' });
    }
});

module.exports = router;