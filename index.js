require('dotenv').config
const express = require('express')
const app = express()
const port = 2000  // the server listens at this port

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => { 
    res.send('my twitter hiii')
})
// app.get('/login', (req, res) => { 
//     res.send('<h1>please login</h1>')`
// })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})