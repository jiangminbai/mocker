const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();

app.get('/list', function(req, res) {
  res.json({
    page: Number(req.query.page),
    pageCount: 10,
    data: [
      {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        type: faker.string.alpha(),
        phone: faker.phone.imei()
      }
    ]
  })
})

app.get('/list/item/:id', function(req, res) {
  res.json({
    id: faker.number.float()
  })
})

app.post('/list/item', function(req, res) {
  res.json({
    message: 'success'
  })
})

app.put('/list/item/:id', function(req, res) {
  res.json({
    message: 'success'
  })
})

app.delete('/list/item/:id', function(req, res) {
  res.json({
    message: 'success'
  })
})

app.get('/tree', function(req,res) {
  res.json([
    {
      id: "{{$randomUUID}}",
      label: "{{$randomFileName}}",
      type: "{{$randomFileType}}",
    }
  ])
})

app.put('/tree', function(req,res) {
  res.json([
    {
      id: "{{$randomUUID}}",
      label: "{{$randomFileName}}",
      type: "{{$randomFileType}}",
    }
  ])
})

app.listen(3000, function() {
  console.log('Server is running on port 3000');
})
