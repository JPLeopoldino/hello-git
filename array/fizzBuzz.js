/* 
número divisível por 3 fizz
número divisível por 5 buzz
    1
    2
    fizz
    4
    buzz
    fizz
    7
    8
    fizz
    buzz
    11
    fizz
    13
    14
    fizzbuzz    
*/

const argumentos = process.argv.slice(2);

let fizzbuzz = [];

for(let i = 0 ; i < argumentos.length ; i++){
    if(parseInt(argumentos[i])%3 == 0 && parseInt(argumentos[i])%5 == 0){
        fizzbuzz = [...fizzbuzz, "FizzBuzz"];
    }
    else if(parseInt(argumentos[i])%5 == 0){
        fizzbuzz = [...fizzbuzz, "Buzz"];
    }
    else if(parseInt(argumentos[i])%3 == 0){
        fizzbuzz = [...fizzbuzz, "Fizz"];
    } else {
        fizzbuzz = [...fizzbuzz, argumentos[i]]
    }
}

console.log(fizzbuzz);