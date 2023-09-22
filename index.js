const express = require('express')
const app = express()
const googleOCR = require('./api')

const multer = require('multer')
const upload = multer({dest: './upload'})

app.set('view engine', 'ejs')

app.get('/ocr', function (req, res) {
  res.render('index')
})

app.post('/ocr', upload.single('file'), async function(req, res) {
  const response = await googleOCR.extract(req.file.path, req.file.mimetype)
  res.json({response})
})

app.listen(3000, function() {
  console.log('ok 3000')
})

