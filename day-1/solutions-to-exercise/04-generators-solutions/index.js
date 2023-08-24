//exercise1

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// Example usage
const generator = numberGenerator();

for (const num of generator) {
    console.log(num);
}

//exercise2

function* numberGenerator(n) {
    for (let i = 1; i <= n; i++) {
        yield i;
    }
}

// Example usage
const generator2 = numberGenerator(5); // This will generate numbers from 1 to 5

for (const num of generator) {
    console.log(num);
}

//exercise3

function* numberDoubler(inputGenerator) {
    for (const num of inputGenerator) {
        yield num * 2;
    }
}

// Example usage
function* originalGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const doubledGenerator = numberDoubler(originalGenerator());

for (const num of doubledGenerator) {
    console.log(num);
}


//practice project

function* fibonacciGenerator() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
function* take(inputGenerator, n) {
    for (const value of inputGenerator) {
        if (n <= 0) {
            break;
        }
        yield value;
        n--;
    }
}
function* filter(inputGenerator, predicate) {
    for (const value of inputGenerator) {
        if (predicate(value)) {
            yield value;
        }
    }
}
// Create the Fibonacci generator
const fibonacci = fibonacciGenerator();

// Create a generator that yields the first 10 Fibonacci numbers
const firstTenFibonacci = take(fibonacci, 10);

// Create a generator that yields only even Fibonacci numbers
const evenFibonacci = filter(fibonacci, num => num % 2 === 0);

// Example usage

// Iterate through the first 10 Fibonacci numbers
for (const num of firstTenFibonacci) {
    console.log(num);
}

// Iterate through the first 10 even Fibonacci numbers
for (const num of evenFibonacci) {
    console.log(num);
}
