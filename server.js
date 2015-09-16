/*
 * Retro Game Night
 * Copyright (c) 2015 Cameron White
 */
var express = require('express')

var app = express()

app.set('port', process.env.PORT || 8080)

app.get('/', function(req, res) {
  res.sendfile('dist/index.html')
})

app.use('/', express.static('dist/'))

app.listen(app.get('port'), function() {
  console.log('rgn swagger ui listening on port %s', app.get('port'))
})
