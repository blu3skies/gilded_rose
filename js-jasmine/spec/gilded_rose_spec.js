// var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    var gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });



});
