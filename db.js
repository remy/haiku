const fs = require('fs');
// from https://100.best-poems.net/100-best-haiku-poems.html
const text = fs.readFileSync('./data.txt', 'utf8');

let index = 0;
let cache = '';
const poems = text.split('\n').reduce((poems, line) => {
  line = line.trim();

  if (cache && line === '') {
    poems.push(cache.trim());
    cache = '';
  } else {
    cache += line + '\n';
  }

  return poems;
}, []);

if (module.parent) {
  module.exports = poems;
} else {
  console.log(JSON.stringify(poems));
}
