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

  it('blocks takeoff when weather is stormy', function(){
      plane.land(airport)
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during the storm');
      expect(airport.hangar()).toContain(plane);
  });

  it('blocks landing when the weather is stormy', function() {
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.land(airport);}).toThrowError('cannot land during the storm');
    expect(airport.hangar()).not.toContain(plane);
  });
});
