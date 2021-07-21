const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let trex1;
  let trex2;
  let brontosaurus1;
  let gallimimus1;
  let park;

  beforeEach(function () {
    trex1 = new Dinosaur("t-rex", 'carnivore', 50) 
    trex2 = new Dinosaur("t-rex", 'carnivore', 40) 

    brontosaurus1 = new Dinosaur("brontosaurus", 'herbivore', 60)

    gallimimus1 = new Dinosaur('gallimimus', 'omnivore', 30)

    park = new Park("Jurassic Park", 16);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(park.name, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.strictEqual(actual, 16);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.add(trex1);
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [trex1])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.add(trex1);
    park.add(brontosaurus1);
    park.remove(brontosaurus1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [trex1])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.add(trex1);
    park.add(trex2);
    park.add(brontosaurus1);
    park.add(gallimimus1);
    const actual = park.findMostAttractiveDinosaur();
    assert.deepStrictEqual(actual, brontosaurus1);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.add(trex1);
    park.add(trex2);
    park.add(brontosaurus1);
    park.add(gallimimus1);
    const actual = park.findBySpecies('t-rex');
    const expected = [trex1, trex2];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.add(trex1);
    park.add(trex2);
    park.add(brontosaurus1);
    park.add(gallimimus1);
    const actual = park.calculateAverageVisitorsPerDay();
    assert.strictEqual(actual, 180);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.add(trex1);
    park.add(trex2);
    park.add(brontosaurus1);
    park.add(gallimimus1);
    const actual = park.calculateAverageVisitorsPerYear();
    assert.strictEqual(actual, 65700);
  });

  it('should be able to calculate total revenue for one year', function(){
    park.add(trex1);
    park.add(trex2);
    park.add(brontosaurus1);
    park.add(gallimimus1);
    const actual = park.calculateAverageYearlyRevenue();
    assert.strictEqual(actual, 1051200);
  });

  it('should be able to remove all dinosaurs of a particular species', function (){
    park.add(trex1);
    park.add(trex2);
    park.add(brontosaurus1);
    park.add(gallimimus1);
    park.removeBySpecies('brontosaurus');
    const actual = park.dinosaurs;
    const expected = [trex1, trex2, gallimimus1];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate number of dinosaurs for each diet type', function (){
    park.add(trex1);
    park.add(trex2);
    park.add(brontosaurus1);
    park.add(gallimimus1);
    const actual = park.numberOfDinosaursByDiet();
    const expected = { carnivore: 2, herbivore: 1, omnivore: 1 };
    assert.deepStrictEqual(actual, expected);
  });

});
