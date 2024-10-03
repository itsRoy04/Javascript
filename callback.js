// hello(goodbye);

// function hello(callback){
//     setTimeout(()=>{
//         console.log("Hello!");
//     },1000)
//     callback();
// }

// function goodbye(){
//     console.log("Goodbye!");
// }


function sum (callback , a , b ){
    let result = a + b
    callback(result)
}



function displayResult (result){
    console.log("result",result)
}

sum(displayResult, 5 , 10 )