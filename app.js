/**
 * Created by lenovo on 2017/10/24.
 */
const express = require('express');
const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

const app = express();

app.use(express.static(resolve('./public')));
app.listen(8787, function() {
  console.log('server start at: localhost:8787');
});