//exercise1 

async function* asyncNumberGenerator() {
    for (let i = 1; i <= 5; i++) {
        yield await new Promise(resolve => setTimeout(() => resolve(i), 1000));
    }
}

(async () => {
    for await (const number of asyncNumberGenerator()) {
        console.log(number);
    }
})();


//exercise2
const fetch = require('node-fetch'); // You can use 'node-fetch' for Node.js environments

async function* asyncPostGenerator() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    for (const post of posts) {
        yield post;
    }
}

(async () => {
    for await (const post of asyncPostGenerator()) {
        console.log(post);
    }
})();


//exercise3

function* numberPromiseGenerator() {
    yield new Promise(resolve => setTimeout(() => resolve(1), 1000));
    yield new Promise(resolve => setTimeout(() => resolve(2), 1000));
    yield new Promise(resolve => setTimeout(() => resolve(3), 1000));
}

(async () => {
    for await (const numberPromise of numberPromiseGenerator()) {
        console.log(await numberPromise);
    }
})();


//exercise4

const fetch = require('node-fetch'); // You can use 'node-fetch' for Node.js environments

function* postPromiseGenerator() {
    const postIds = [1, 2, 3]; // Example post IDs

    for (const postId of postIds) {
        yield fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json());
    }
}

(async () => {
    for await (const postPromise of postPromiseGenerator()) {
        console.log(postPromise);
    }
})();


//exercise4

const fetch = require('node-fetch'); // You can use 'node-fetch' for Node.js environments

function* postPromiseGenerator(postIds) {
    for (const postId of postIds) {
        yield fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json());
    }
}

async function* printPosts(generator) {
    for await (const postPromise of generator) {
        console.log(postPromise);
    }
}

(async () => {
    const postIds = [1, 2, 3]; // Example post IDs

    const postGenerator = postPromiseGenerator(postIds);
    const printGenerator = printPosts(postGenerator);

    for await (const _ of printGenerator) {
        // Iterating through printGenerator to trigger fetching and printing
    }
})();
