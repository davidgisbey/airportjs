describe("Airport", function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe("Hangar", function() {
    it("Has an empty hangar to start with", function() {
      expect(airport.hangar).toEqual([]);
    });
  });
});
