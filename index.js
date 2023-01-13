const express = require('express');
const app = express();
const request = require('request');
const axios = require('axios')

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/image', (req, res) => {
    var url = req.query.url
    request( {url: url, encoding: null}, (err, response, body) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.send(body);
        }
    });

});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
