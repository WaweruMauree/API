//log fruits using loop
const fruits = ['Bananas', 'Apples', 'Avocados', 'Pineapples'];
let flen = fruits.length;

let text = " ";
for(let i = 0; i < flen; i++){
    text += fruits[i] +" ";
}

console.log(text); 

//adds new item to array and removes the first one
const shoes = ['Nike', 'Adidas', 'Jordan'];
shoes[shoes.length] = "Converse";
cars.shift();
console.log(shoes);

//finding index
const drinks = ['Tea', 'Coffee', 'Soda', 'Juice','Water'];
let position = drinks.indexOf('Coffee');
if(position == -1){
    console.log("The item cannot be found");
}else{
    console.log("The item is found at index: " +position);
}
