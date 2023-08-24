// function generateNumbers(count){
//     const numbers =[];
//     for(let i =1; i<=count; i++){
//         numbers.push(i);
//     }

//     return numbers;
// }

// const numArray =generateNumbers(10);
// console.log(numArray);


// function* generateNumbersGen(count){
//     for(let i =1; i<=count; i++){
//        yield(i);
//     }
// }

// const numGen = generateNumbersGen(20);
// for (const number of numGen){
//     console.log(number)
// }


function sayhi(){
    return 'hi'
}

const result = sayhi()

console.log(result)

function* hiGenerator(){

    yield "hello1"
    // yield "hello2"
    // yield "hello3"
}

const resultGen = hiGenerator()
console.log(resultGen.next())
// console.log(resultGen.next())
// console.log(resultGen.next())
