#!/usr/bin/env node
const app = require('../app');

const port = process.env.PORT || 3000;
app.set('port', port);

const server = app.listen(app.get('port'), function() {
  console.log('server start at: localhost:' + port);
});
