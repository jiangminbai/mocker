import { faker } from "@faker-js/faker";
import { Express } from "express";

module.exports = (app: Express) => {
  app.get('/tree', function(req, res) {
    res.json(
      [
        {
          id: faker.string.uuid(),
          name: faker.person.fullName(),
          children: [
            {
              id: faker.string.uuid(),
              name: faker.person.fullName(),
            },
            {
              id: faker.string.uuid(),
              name: faker.person.fullName(),
            },
          ]
        },
        {
          id: faker.string.uuid(),
          name: faker.person.fullName(),
        },
      ]
    )
  })
}