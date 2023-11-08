// // -------------- задача с интервью  на замыкание - 1:43  видео

function generate (seed) { //console.log('seed=' + seed)
    let private = seed;    //console.log("private=" + private) 
                           //console.log('-----------------')
    
    return function (param) {                    
        private += seed;    //console.log("privateNEW = " + private + ' + seed')     
                            // console.log("param=" + param)
        return private + param 
    };
};

//let a = generate(1)  // (seed)
let b = generate(2)  // (seed)

//console.log(a(2))
console.log(b(3) + b(1) + b(2))      // (param)
//           7 + 6 + 1 + 8 + 2 = 24
//console.log(a(1) + a(2))         // 8  
//console.log(a(1) + a(2) + a(1))  //13