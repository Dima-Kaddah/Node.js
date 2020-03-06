'use strict';
const hdlebar = require('handlebars');

const subjects = [
  'shark',
  'popcorn',
  'poison',
  'fork',
  'cherry',
  'toothbrush',
  'cannon',
];
const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];
const RandomData = {
  subject: subjects[Math.floor(Math.random() * subjects.length)],
  punchline: punchlines[Math.floor(Math.random() * punchlines.length)],
};

let source = '{{subject}} only use to {{punchline}}';
const template = hdlebar.compile(source);
console.log(template(RandomData));
