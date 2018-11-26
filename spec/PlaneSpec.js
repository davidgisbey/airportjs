describe("Plane", function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',
     ['clearForLanding', 'clearForTakeOff']);
  });

  describe("Landing", function() {
    it("plane can land", function() {
      plane.land(airport)
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
  });

  describe("taking off", function() {
    it("asks to take off", function() {
      plane.land(airport);
      plane.takeoff();
      expect(airport.clearForTakeOff).toHaveBeenCalled();
    });
  });
});
