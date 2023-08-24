//exercise 1

function performOperation(num1, num2, callback) {
    const result = num1 + num2;
    callback(result);
}

// Example usage
function callbackFunction(result) {
    console.log("The result is:", result);
}

const num1 = 5;
const num2 = 10;
performOperation(num1, num2, callbackFunction);

//exercise 2

function checkEvenOrOdd(number, callback) {
    const isEven = number % 2 === 0;
    callback(isEven);
}

// Example usage
function callbackFunction(isEven) {
    if (isEven) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}

const numberToCheck = 10;
checkEvenOrOdd(numberToCheck, callbackFunction);


//exercise 3

function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework`);
    setTimeout(function() {
        console.log("Finished homework");
        callback();
    }, 2000); // Wait for 2 seconds
}

// Test the function
function finishCallback() {
    console.log("Callback: Finished homework");
}

doHomework("Math", finishCallback);


//exercise 4 

function map(array, callback) {
    let result = []
  
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array))
    }
  
    return result
  }
  
  let arr = [1, 2, 3, 4, 5]
  let newArray = map(arr, function(val, index, arr) {
    return val + 1
  })
  
  console.log(newArray)


  //exercise 5

  function downloadFile(url, callback) {
    console.log("Download has started");
    
    setTimeout(function() {
        const message = `Download finished: ${url}`;
        callback(message);
    }, 3000); // Wait for 3 seconds
}

// Test the function
function downloadCallback(message) {
    console.log(message);
}

const fileURL = "https://example.com/somefile.txt";
downloadFile(fileURL, downloadCallback);

