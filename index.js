const express = require('express')
const app = express()

const multer = require('multer')
const upload = multer({dest: './upload'})

app.set('view engine', 'ejs')

app.get('/ocr', function (req, res) {
  res.render('index')
})

app.post('/ocr', upload.single('file'), function(req, res) {
  res.json({message:"successfully"})
})

app.listen(3000, function() {
  console.log('ok 3000')
})

