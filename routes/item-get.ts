import { faker } from "@faker-js/faker";
import { Express } from "express";

module.exports = (app: Express) => {
  app.get('/item/:id', function(req, res) {
    console.log(req.params.id)
    res.json(
      {
        id: req.params.id,
        message: 'success'
      }
    )
  })
}