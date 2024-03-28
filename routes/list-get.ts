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
            id: faker.string.uuid(),
            email: faker.internet.email(),
            name: faker.internet.userName(),
            password: faker.internet.password(),
            date: faker.date.birthdate()
          }
        ]
      }
    )
  })
}