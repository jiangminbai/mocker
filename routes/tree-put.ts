import { faker } from "@faker-js/faker";
import { Express } from "express";

module.exports = (app: Express) => {
  app.put('/tree', function(req, res) {
    res.json(
      {
        message: 'tree update success'
      }
    )
  })
}