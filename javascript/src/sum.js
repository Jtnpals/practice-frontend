function sum(...rest){//...rest 하면 하느의 배열로 받아옴
    return rest.reduce((acc, current) => acc + current, 0);
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sum(...nums));

function subtract(x, y){
    return x - y;
}

const numbers = [1, 2];
const result = subtract(...numbers);
console.log(result);

function max(...rests){
    return rests.reduce(
        (acc, current) => (current > acc ? current : acc), rests[0]
        );
}

console.log(max(1,2,3,4,5,6,7));