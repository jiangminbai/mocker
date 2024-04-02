import { faker } from "@faker-js/faker";
import { Express } from "express";

module.exports = (app: Express) => {
  app.put('/item/:id', function(req, res) {
    res.json(
      {
        id: req.params.id,
        message: 'updated success'
      }
    )
  })
}