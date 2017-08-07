/*
    Create `QueueService` function and add it to window so that the following works:
    set queue worker count of queues on constructor
    addProcess function that inherits callback function that executes when complete
    only run processes based on availability count
    the following should work:

     function process(done) {
        setTimeout(function () {
            console.log('process2');
            callback();
        }, 5000);
     }

     function process2(callback) {
        setTimeout(function () {
            console.log('process2');
            callback();
        }, 5000);
     }

     var queue = new window.QueueService(2);
     queue.addProcess(process2);
     queue.addProcess(process);
     queue.addProcess(process);
     queue.addProcess(process2);
     queue.addProcess(process);
     queue.addProcess(process);
     queue.addProcess(process2);

     and if ran should output:
     process1
     process1
     process2
     process1
     process2
     process1

 */

/*
I'm honestly pretty lost here. It says "create QueueService function." So there's step 1, I think.

While digging around I found this on mozilla: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop.
Specifically the event loop.:
while (queue.waitForMessage()) {
  queue.processNextMessage();
}

I think this would be important to run at some point.

I think ultimately I'd look to see if there was a library or other tool to handle this. For simplicity and time's sake.

*/
