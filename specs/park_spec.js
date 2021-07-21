const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park("Jurassic", 16, "t-rex")
  })

  it('should have a name', function(){
    // const actual = park.name;
    assert.strictEqual(park.name, 'Jurassic');
  });

  it('should have a ticket price', function(){
    // // const actual = park.ticket_price;
    assert.strictEqual(park.ticket_price, 16);
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.dinosaurs, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('xyz');
    assert.deepStrictEqual(park.dinosaurs.length, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur('xyz');
    assert.deepStrictEqual(park.dinosaurs.length, 0)
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
