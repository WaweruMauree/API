//while loop to print 1 to 20
let number = 0;
while (number <= 20){
    console.log(number);
    number ++;
}

//for loop to print multiples of 3
for (let i = 1; i <= 10; i++){
    console.log(i * 3);
}

//iterate array of names
const names = ['Alice', 'Bob', 'Charlie', 'Diana'];

for( let i = 0; i < names.length; i++){
    console.log(`Hello, ${names[i]} !`);
}