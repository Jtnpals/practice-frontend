const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

const { color, ...rest} = purpleCuteSlime;
console.log(color);
console.log(rest);

const{attribute, ...slime} = rest;
console.log(slime);

const numbers = [0, 1, 2, 3, 4, 5, 6];
const [one, two, ...remains] = numbers;
console.log(one);
console.log(two);
console.log(remains);

// [...rest, last] 형식으로는 쓸 수 없음