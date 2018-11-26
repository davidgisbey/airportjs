describe("Airport", function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it("Has an empty hangar to start with", function() {
    expect(airport.hangar()).toEqual([]);
  });
});
