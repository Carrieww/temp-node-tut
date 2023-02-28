// api response. 
// our server provide data. 
// Then fron-end app can access data through http request and using our data

// when refering to the document, dont confuse between express.json with res.json in express
const express = require('express')
const app = express()

// this for setting the format of json file in web broswer
app.set('json spaces', 2) 


const { products } = require('./data')
// console.log(products)
app.get('/', (req, res) => {
  res.json(products)
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000....')
})
