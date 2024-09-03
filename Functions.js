//return sum
function sum(a, b){
    return a+b;
}

console.log(sum(9, 10));
console.log(sum(20, 65));
console.log(sum(5, 8));
console.log(sum(0,-1));

//reverse string
function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString('good'));
console.log(reverseString('morning'));
console.log(reverseString('BBIT'));
console.log(reverseString('B'));

//return greeting message
function greet(name){
    return `Hello, ${name} !`;
}

console.log(greet('Sean'));
console.log(greet('Lucy'));
console.log(greet('Bob'));
console.log(greet('Stacy'));