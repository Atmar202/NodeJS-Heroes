const { random } = require('superheroes');
var superheroes = require('superheroes');
var villains = require('supervillains');

var randomVillain = villains.random();
var mySuperheroName = superheroes.random();

console.log('Random Superhero: '+mySuperheroName);
console.log('All villains: '+villains.all);
console.log('Random Villain: '+ randomVillain);