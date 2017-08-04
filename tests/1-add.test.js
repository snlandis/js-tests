'use strict';

describe('Test 1 Add function ', function () {

  it('should add(5,6) to equal 11', function () {
    expect(window.add(5, 6)).toEqual(11);
  });

  it('should add(5)(8) to equal 13', function () {
    expect(window.add(5)(8)).toEqual(13);
  });

  it('should add(5, 0) to equal 5', function () {
    expect(window.add(5, 0)).toEqual(5);
  });
});
