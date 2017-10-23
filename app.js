/**
 * Created by lenovo on 2017/10/23.
 */
const express = require('express');
const path = require('path');

const resolve = function(dir) {
  return path.resolve(__dirname, dir);
}

const app = express();



app.get('/', function(req, res) {
  res.sendFile(resolve('./index.html'));
});


app.listen('8084', function() {
  console.log('server start at:localhost:8084')
});