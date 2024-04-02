import { faker } from "@faker-js/faker";
import { Express } from "express";

module.exports = (app: Express) => {
  app.delete('/items/:id', function(req, res) {
    res.json(
      {
        id: req.params.id,
        message: 'deleted success'
      }
    )
  })
}