const slime = {
    name: '슬라임'
};

const cuteSlime = {
    ...slime,
    name: '슬라임',
    attribute: ' cute'
};

const purpleCuteSlime = {  
    ...cuteSlime,
    color: 'purple'
}

const geernCuteSline ={
    ...purpleCuteSlime,
    color: 'green'//기존 속성을 바꿈
}

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];

console.log(animals);
console.log(anotherAnimals);

const numbers = [1, 2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(numbers);
console.log(spreadNumbers);