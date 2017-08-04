'use strict';

describe('String Repeatify ', function () {
  it('should repeat ', function () {
    var output = 'hello'.repeatify(3);
    expect(output).toBe('hellohellohello')
  });
});
