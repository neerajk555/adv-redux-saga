//exercise 1

function delayedHello() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, World!");
        }, 2000); // Wait for 2 seconds
    });
}

// Using the delayedHello function
delayedHello()
    .then(result => {
        console.log(result); // Output: "Hello, World!" after a 2-second delay
    })
    .catch(error => {
        console.error(error);
    });



//exercise 2

function fetchData(url) {
    return fetch(url)
              .then(res => {
                if(!res) {
                  throw new Error("Error fetching url")
                }
                return res.json();
              })
              .then(data => data)
              .catch(error => {
                console.log("Theres been a problem", error)
              })
  }
  
fetchData('https://jsonplaceholder.typicode.com/posts/1').then(data => console.log(data));


//exercise 3
function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // Parse response body as JSON
            })
            .then(data => {
                resolve(data); // Resolve the promise with the fetched data
            })
            .catch(error => {
                reject(error); // Reject the promise if there's an error
            });
    });
}

// Usage
const apiUrl1 = "https://jsonplaceholder.typicode.com/posts/1";
fetchData(apiUrl1)
    .then(data => {
        console.log("Fetched data:", data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });


//exercise 4

function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // Parse response body as JSON
            })
            .then(data => {
                resolve(data); // Resolve the promise with the fetched data
            })
            .catch(error => {
                console.error("Fetch error:", error); // Log errors to the console
                reject(error); // Reject the promise if there's an error
            });
    });
}

// Usage
const apiUrl2 = "https://jsonplaceholder.typicode.com/posts/1";
fetchData(apiUrl2)
    .then(data => {
        console.log("Fetched data:", data);
    })
    .catch(error => {
        // Additional error handling, if needed
    });

