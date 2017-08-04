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

 *
 */