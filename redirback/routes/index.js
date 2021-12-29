var express = require('express');
const path = require('path');
const axios = require('axios');
var router = express.Router();
const url = 'https://fakestoreapi.com/products';

/* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log('im redirect!!!')
//   res.sendFile(path.join(__dirname, '../build/index.html'))
// });
router.get('/products', async(req, res, next) => {
  console.log('in the product route')
  const {data} = await axios.get(`${url}?limit=10`);
  // console.log(data);
  res.send({status: 'ok', payload: data});
});

module.exports = router;
