const express = require('express')
const app = express()

app.get('/ocr', function (req, res) {
  res.json(console.log('test'))
})

app.listen(3000, function() {
  console.log('ok 3000')
})

