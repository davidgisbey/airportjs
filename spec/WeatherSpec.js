'use strict';

describe('weather', function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it("gives stormy sometimes")
    spyOn(Math, 'random').and.returnValue(1);
    expect(weather.isStormy()).toBeThruthy();
  });
});
