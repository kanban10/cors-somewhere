const express = require('express');
const app = express();
const request = require('request');

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    res.send({
      status: 'success',
      response: '',
    },
      200,
    )
  })

app.get('/image', (req, res) => {
    // console.log('start req')
    // console.log(req.query.url)
    // console.log(encodeURI(req.query.url))
    var url = encodeURI(req.query.url)
    request( {url: url, encoding: null}, (err, response, body) => {
        if(err) {
          // console.log(url)
            res.status(500).send(err);
        } else {
          // console.log(url)
            res.send(body);
        }
    });

});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
