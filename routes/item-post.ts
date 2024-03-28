import { faker } from "@faker-js/faker";
import { Express } from "express";

module.exports = (app: Express) => {
  app.post('/item', function(req, res) {
    res.json(
      {
        id: faker.string.uuid(),
        message: 'post success'
      }
    )
  })
}