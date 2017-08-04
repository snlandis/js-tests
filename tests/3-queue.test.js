'use strict';


describe('Queue ', function () {

  var process = function process(count, time) {
    return function (callback) {
      setTimeout(function () {
        console.log('process' + count);
        callback();
      }, time);
    };
  };

  beforeAll(function () {
    jasmine.clock().install();
  });

  it('set queue availability invoking constructor', function () {
    var service = new window.QueueService(2);
    expect(service.available).toEqual(2);
  });

  describe('adding and running processes ', function () {
    var spy;
    beforeAll(function () {
      var service = new window.QueueService(2);
      spy = spyOn(window.console, 'log');

      expect(service.available).toEqual(2);

      service.addProcess(process('1', 1000));
      expect(service.available).toEqual(1);
      service.addProcess(process('2', 6000));
      expect(service.available).toEqual(0);
      service.addProcess(process('3', 4000));
      service.addProcess(process('4', 5000));
      service.addProcess(process('5', 1000));
    });

    it('after .5 seconds should log process 1', function (done) {
      jasmine.clock().tick(1000);
      expect(spy).toHaveBeenCalledWith('process1');
      done();
    });

    it('after 5 seconds should log process 3', function (done) {
      jasmine.clock().tick(4000);
      expect(spy).toHaveBeenCalledWith('process3');
      done();
    });

    it('after 10 seconds should log process 2', function (done) {
      jasmine.clock().tick(1000);
      expect(spy).toHaveBeenCalledWith('process2');
      done();
    });

    it('after 10 seconds should log process 5', function (done) {
      jasmine.clock().tick(1000);
      expect(spy).toHaveBeenCalledWith('process5');
      done();
    });

    it('after 10 seconds should log process 4', function (done) {
      jasmine.clock().tick(3000);
      expect(spy).toHaveBeenCalledWith('process4');
      done();
    });
  });

});
