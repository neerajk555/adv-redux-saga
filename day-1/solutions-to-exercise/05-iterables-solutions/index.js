//exercise1

class StringIterator {
    constructor(inputString) {
        this.inputString = inputString;
        this.index = 0;
    }

    next() {
        if (this.index < this.inputString.length) {
            const char = this.inputString[this.index];
            this.index++;
            return {
                value: char,
                done: false
            };
        } else {
            return {
                done: true
            };
        }
    }
}

// Create a StringIterator instance
const myIterator = new StringIterator("Hello, World!");

// Call next() to iterate through the characters
while (true) {
    const result = myIterator.next();
    if (result.done) {
        break;
    }
    console.log(result.value);
}



//exercise2

class StringIterator {
    constructor(inputString) {
        this.inputString = inputString;
        this.index = 0;
    }

    next() {
        if (this.index < this.inputString.length) {
            const char = this.inputString[this.index];
            this.index++;
            return {
                value: char,
                done: false
            };
        } else {
            return {
                done: true
            };
        }
    }

    [Symbol.iterator]() {
        return this;
    }
}

// Create a StringIterator instance
const myIterable = new StringIterator("Hello, World!");

// Iterate through the characters using a for...of loop
for (const char of myIterable) {
    console.log(char);
}



//exercise 3

class StringIterator {
    constructor(inputString) {
        this.inputString = inputString;
        this.index = 0;
    }

    next() {
        if (this.index < this.inputString.length) {
            const char = this.inputString[this.index];
            this.index++;
            return {
                value: char,
                done: false
            };
        } else {
            return {
                done: true
            };
        }
    }

    [Symbol.iterator]() {
        return this;
    }
}

// Create a StringIterator instance
const myIterable2 = new StringIterator("Hello, World!");

// Use a for...of loop to iterate through the characters
for (const char of myIterable) {
    console.log(char);
}
