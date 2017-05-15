const express = require('express');
const router = express.Router();
const pg = require('../db/knex');
const linkQuery = require('../db/link-queries');

/* GET home page. */
router.get('/', (req, res, next) => {
  // return linkQuery.getData()
  //
  // res.render('index', {data});
  res.render('index');
});


module.exports = router;
