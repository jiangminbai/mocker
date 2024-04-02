import { faker } from "@faker-js/faker";
import { Express } from "express";

module.exports = (app: Express) => {
  app.delete('/item/:id', function(req, res) {
    res.json(
      {
        id: req.params.id,
        message: 'deleted success'
      }
    )
  })
}