console.log("hello javascript");


//연산 순위 NOT AND OR

function getGrade(score){

    if(score === 100){
        return 'A+';
    }else if(score >=80){
        return 'A';
    }else{
        return 'Fail';
    }
}

const grade = getGrade(100);

const add = (a, b) => {
    return a + b;
}

const sum = add(1,2);
console.log(sum);

const hello = (name) =>{
    console.log(`Hello, ${name}!`);
}

hello('world');

const add2 = (a,b) => a + b;
const sum2 = add(1, 2);
console.log(sum2);