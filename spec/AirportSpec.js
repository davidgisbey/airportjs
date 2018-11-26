describe("Airport", function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });

  it("Has an empty hangar to start with", function() {
    expect(airport.hangar()).toEqual([]);
  });

  it("can clear planes for landing", function() {
    airport.clearForLanding(plane);
    expect(airport.hangar()).toEqual([plane]);
  });

  it("can clear planes for takeoff", function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.hangar()).toEqual([])
  })
});
