const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;


  beforeEach(function () {
    park = new Park('Park1', 20);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 40)
    dinosaur3 = new Dinosaur('triceratops', 'herbivore', 20 )
    dinosaur4 = new Dinosaur('triceratops', 'herbivore', 30)
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Park1');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addADinosaur(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);

  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addADinosaur(dinosaur1);
    park.removeADinosaur(0);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addADinosaur(dinosaur1);
    park.addADinosaur(dinosaur2);
    park.addADinosaur(dinosaur3);
    park.addADinosaur(dinosaur4);
    const actual = park.findDinosaurWithMostVisitors();
    assert.strictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addADinosaur(dinosaur1);
    park.addADinosaur(dinosaur2);
    park.addADinosaur(dinosaur3);
    park.addADinosaur(dinosaur4);
    const actual = park.findDinosaursBySpecies('triceratops');
    assert.deepStrictEqual(actual, [dinosaur3, dinosaur4]);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.addADinosaur(dinosaur1);
    park.addADinosaur(dinosaur2);
    park.addADinosaur(dinosaur3);
    park.addADinosaur(dinosaur4);
    const actual = park.countDailyVisitors();
    assert.strictEqual(actual, 140);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addADinosaur(dinosaur1);
    park.addADinosaur(dinosaur2);
    park.addADinosaur(dinosaur3);
    park.addADinosaur(dinosaur4);
    const actual = park.countAnnualVisitors();
    assert.strictEqual(actual, 50960);
  });

  it('should be able to calculate total revenue for one year', function() {
    park.addADinosaur(dinosaur1);
    park.addADinosaur(dinosaur2);
    park.addADinosaur(dinosaur3);
    park.addADinosaur(dinosaur4);
    const actual = park.calculateAnnualRevenue();
    assert.strictEqual(actual, 1019200);
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.addADinosaur(dinosaur1);
    park.addADinosaur(dinosaur2);
    park.addADinosaur(dinosaur3);
    park.addADinosaur(dinosaur4);
    park.removeASpeciesOfDinosaur('triceratops');
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2]);
  });

  it('should be able to log the number of dinosaurs by diet type', function() {
    park.addADinosaur(dinosaur1);
    park.addADinosaur(dinosaur2);
    park.addADinosaur(dinosaur3);
    park.addADinosaur(dinosaur4);
    park.countDinosaursByDiet();
    const actual = park.dietInventory;
    const dietInventory = {
      'carnivore': 2,
      'herbivore': 2,
      'omnivore': 0,
    };
    assert.deepStrictEqual(actual, dietInventory)

  })
    
});
