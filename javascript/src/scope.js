const value = 'hello!';

function myFuction(){
    console.log('myFucntion ');
    console.log(value);   
}


function otherFunction(){
    console.log('myFucntion ');
    const value = 'bye!';
    console.log(value);   
}

myFuction();
otherFunction();

console.log('global scope: ' );
console.log(value);

function outsideFuction(){
    const value = 'bye!';
    const anotherValue = 'world';
    function insideFunction(){
        console.log('functionInside: ');
        console.log(value);
        console.log(anotherValue);
    }
    insideFunction();
}
outsideFuction();

function blockScope(){
    const value = 'bye!';
    if(true){
        const value = 'world';
        console.log('block scope');
        console.log(value);
    }
    console.log('fuction scope: ');
    console.log(value);
}

blockScope();