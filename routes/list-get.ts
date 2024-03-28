import { faker } from "@faker-js/faker";
import { Express } from "express";

module.exports = (app: Express) => {
  app.get('/list', function(req, res) {
    res.json(
      {
        page: Number(req.query.page) || 1,
        pageCount: 10,
        data: [
          {
            id: faker.color.cmyk(),
            email: faker.string.binary(),
            name: faker.person.lastName,
            type: faker.string.alpha,
            date: faker.date.month
          }
        ]
      }
    )
  })
}