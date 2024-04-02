import express from "express";
import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';

const tabCount = (tab = 0) => new Array(tab).fill(' ').join('');

const app = express();

function bindRoutesToDir(p: string, tab = 0) {
  fs.readdirSync(p, {
    withFileTypes: true
  }).forEach(dirent => {
    const curPath = path.resolve(p, dirent.name)
    if (dirent.isDirectory()) {
      console.log(tabCount(tab) + dirent.name, 'directory')
      bindRoutesToDir(curPath, tab + 1)
    } else {
      const rq = require(curPath)
      
      if (typeof rq === 'function') {
        console.log(tabCount(tab) + dirent.name, ' - start')
        rq(app)
      }
    }
  })
}
['./APIs']
  .forEach(path => {
    bindRoutesToDir(path)
  })

app.listen(4000, function() {
  console.log('Server is running on port 4000');
})
