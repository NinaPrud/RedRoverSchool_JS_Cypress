
function generate (seed) { 
    let private = seed;   
    return function (param) {                    
        private += seed;     
        return private + param 
    };
};


let a = generate(1) 

//console.log(a(1))

console.log(a(1) + a(2))         
//console.log(a(1) + a(2) + a(1))  
