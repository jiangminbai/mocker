import express from "express";
import { faker } from '@faker-js/faker';
import fs from 'fs';

const app = express();

function bindRoutesToDir(path: string) {
  fs.readdirSync(path).forEach(file => {
    const rq = require(path + '/' + file)
    
    if (typeof rq === 'function') {
      console.log(file, ' - start')
      rq(app)
    }
  })
}
['./routes', './projects']
  .forEach(path => {
    bindRoutesToDir(path)
  })

app.listen(4000, function() {
  console.log('Server is running on port 4000');
})
