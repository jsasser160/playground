const express = require('express')
const app = express()

app.use(express.json())

app.listen(3000, () => console.log('Listening on port 3000'))

//endpoint 
app.get('/hello', (req, res) => {
  console.log('HEADERS', req.headers)
  console.log('METHOD', req.method)
  res.send('received get request!!!!!!')
})

app.post('/hello', (req, res) => {
  console.log('HEADERS', req.headers)
  console.log('METHOD', req.method)
  console.log('BODY', req.body)
  res.send('post request received!!!!!!')
})
