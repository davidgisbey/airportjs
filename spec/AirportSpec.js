'use strict';

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
  });

  it('can check from stormy conditions', function() {
    expect(airport.isStormy()).toBeFalsy();
  });

  describe('under stormy coniditons do', function() {
    it('does not clear planes to takeoff', function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during the storm');
    });

    it('does not clear planes to land', function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during the storm');
    })
  });
});
