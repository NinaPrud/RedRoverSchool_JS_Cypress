let isNothingHappened = true  // true || false

let willPassExam = new Promise(function(resolve, reject) {
    if (isNothingHappened) {
        let message = 'I got a diploma';
        resolve(message);
    } else {
        let reason = new Error('Oops, something happened');  // let reason = 'Oops, something happened';
        reject(reason);
    }
});

// let checkEvents = function () {
//     willPassExam
//     .then(function(noEvents) {
//         console.log(noEvents);
//     })
//     .catch(function (error) {
//         console.log(error.message);
//     });
// };

//-- цепочка промисов

let getNewJob = function (diploma) {
    return new Promise(function(resolve) {
        let message = `I got a new job because ${diploma}`;
        resolve(message);
    });
};

let checkEvents = function () {
    willPassExam
    .then(getNewJob)
    .then(function(noEvents) {
        console.log(noEvents);
    })
    .catch(function (error) {
        console.log(error.message);
    });
};

checkEvents()