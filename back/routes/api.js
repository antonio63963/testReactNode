var express = require('express');
var router = express.Router();
const path = require('path');
const url = 'https://fakestoreapi.com/products';
const axios = require('axios');



/* GET home page. */
const categories = [
  {
    img: 'https://cdn.pixabay.com/photo/2017/08/02/14/22/ring-2571761_960_720.jpg',
    title: 'Jewelery',
    category: 'jewelery',
  }, 
  {
    img: 'https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg',
    category: "electronics",
    title: "Electronics"
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_960_720.jpg',
    category: "women's clothing",
    title: "Women's clothing"
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/02/19/12/59/man-642063_960_720.jpg',
    category: "men's clothing",
    title: "Men's clothing"
  }
];

router.get('/categories', (req, res) => {
  console.log("Cat route");
  res.send({status: 'ok', payload: {categories}})
});

router.get('/products', async(req, res) => {
  console.log('++++++in the product route')
  const {data} = await axios.get(`${url}?limit=20`);
  // console.log(data);
  res.send({status: 'ok', payload: data});

});
router.post('/refreshCart', (req, res) => {
  console.log('im in refreshCart', req.body);
  const refreshCart = req.body.map(async(item) => {
    const refreshItem = await axios.get(`https://fakestoreapi.com/products/${item.id}`);
    return refreshItem ? 
      {
        id: refreshItem.id, 
        title: refreshItem.title, 
        amount: refreshItem.amount, 
        image: refreshItem.image
      } : 
      null;
  });
  res.send({status: 'ok', payload: refreshCart});
});



module.exports = router;
