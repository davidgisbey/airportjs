'use strict';
describe('feature test', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('planes can be instructed to land at an airport', function() {
    plane.land(airport);
    expect(airport.hangar()).toContain(plane);
  });

  it('planes can takeoff after landing', function() {
    plane.land(airport);
    plane.takeoff();
    expect(airport.hangar()).not.toContain(plane);
  });
});
