# Javascript Tests

This application includes 3 JavaScript tests. Each problem includes working test

## Setup

Run ``` npm install ``` to install all dependencies.

## Running Tests

To run all tests in watch mode:
```
npm test
```

To run the tests once:
```
npm run test-once
```

### 1. Add
Create `add` function and add it to window so that the following works:
window.add(5,6) to equal 11
window.add(5)(8) to equal 13
window.add(5, 0) to equal 5
```
npm run test-1
```

### 2. String Repeatify
Define a repeatify function on the String object.
'hello'.repeatify(3) should equal 'hellohellohello'
```
npm run test-2
```

### 3. Queue Service
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

```
npm run test-3
```
