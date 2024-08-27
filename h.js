//console.log("HELLO WORLD");
function simple() {
    var x = 10;
    var y = 30;
    console.log(x+y);
}
simple();


//Anonymus function 
let z= function sum() {
    let x = 20;
    let y = 50;
    console.log(x+y);
}
z();

//Anonymus function 
const k= function () {
    var x = 20;
    var y = 50;
    console.log(x-y);
}
k();

function simple(x=19, y=1) {
    console.log(x+y);
}
simple(11, 22);

//Arrow function 
l = () =>{
    const x = 20;
    const y = 50;
    console.log(x-y);
}bvbvff
l();
