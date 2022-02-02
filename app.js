const express = require('express')
const app = express()
var cors = require('cors')
const port = 3001
const imgUrl = "https://webshop-bilkek.000webhostapp.com/bilek_slike/"

app.use(cors())

const items = [
  {id:1, name:'galaxy_s21',description:'descr', price:5500, url:imgUrl + 'galaxy_s21.jpg'},
  {id:2, name:'galaxy_A71',description:'descr', price:5500, url:imgUrl + 'galaxy_A71.jpg'},
  {id:3, name:'galaxy_s10',description:'descr', price:5500, url:imgUrl + 'galaxy_s10.jpg'},
  {id:4, name:'galaxy_s20',description:'descr', price:5500, url:imgUrl + 'galaxy_s20.jpg'},
  {id:5, name:'huawei_p30_pro',description:'descr', price:5500, url:imgUrl + 'huawei_p30_pro.jpg'},
  {id:6, name:'huawei_p40_pro',description:'descr', price:5500, url:imgUrl + 'huawei_p40_pro.jpg'},
  {id:7, name:'iphone_11_pro_max',description:'descr', price:5500, url:imgUrl + 'iphone_11_pro_max.jpg'},
  {id:8, name:'iphone_12_pro_max',description:'descr', price:5500, url:imgUrl + 'iphone_12_pro_max.jpg'},
  {id:9, name:'iphone_13_pro_max',description:'descr', price:5500, url:imgUrl + 'iphone_13_pro_max.jpg'},
  {id:10, name:'iphone_x', price:5500, url:imgUrl + 'iphone_x.jpg'}
]

app.get('/', (req, res) => {
  res.send(items)
  })
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})