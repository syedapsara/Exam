//1st question
function reverseString(str) {
    // Your logic here
     let reversed=""
     for(let i=str.length-1; i>=0; i--){
        reversed+=str[i];
     }
     return reversed;
}
console.log(reverseString("hello")); // Expected output: "olleh"

//second question
function isPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str === reversed;
}

console.log(isPalindrome("racecar")); // Expected output: true
console.log(isPalindrome("hello"));   // Expected output: false

//third question
function findMax(arr) {
    let max = arr[0]; // Assume the first element is the max
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a larger number is found
        }
    }
    return max;
}

console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9

//fourth question
function removeDuplicates(arr) {
    // Your logic here
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected output: [1, 2, 3, 4, 5]

//fifth question

function factorial(n) {
    // Your logic here
    if(n===0||n===1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
console.log(factorial(5)); // Expected output: 120

//sixth question

function fibonacci(n) {
    // Your logic here
    if (n<=0){
        return [];
    }else if(n===1){
        return[0];
    }

    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}
console.log(fibonacci(5)); // Expected output: [0, 1, 1, 2, 3]

//seventh question


function areAnagrams(str1, str2) {
    // Your logic here
    if (str1.length!==str2.length){
        return false;
    }else{
        return str1.split('').sort().join('') === str2.split('').sort().join('');

    }
}
console.log(areAnagrams("listen", "silent")); // Expected output: true

//Eighth  question


function secondLargest(arr) {
    // Your logic here
    arr.sort((a,b)=>b-a);
    return arr[1];
}
console.log(secondLargest([10, 20, 4, 45, 99])); // Expected output: 45

//Ninth question
function findMissingNumber(arr) {
    let n = arr.length + 1; 
    let expectedSum = (n * (n + 1)) / 2; 
    let actualSum = arr.reduce((sum, num) => sum + num, 0); 
    return expectedSum - actualSum; 
}

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3

//tenth question
function countOccurrences(str) {
    let occurrences = {};

    for (let char of str) {
        occurrences[char] = (occurrences[char] || 0) + 1;
    }

    return occurrences;
}

console.log(countOccurrences("hello")); 
// Expected output: { h: 1, e: 1, l: 2, o: 1 }

//output based questions
//first question
console.log(1 + "2" + "2");//122
console.log(1 + +"2" + "2");//32
console.log(1 + -"1" + "2");//02
console.log(+"1" + "1" + "2");//112
console.log("A" - "B" + "2");//
console.log("A" - "B" + 2);//

//second question
//false

//third question
//456

//fourth question
//undefined

//fifth question
function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(sum(2)(3)(4));

//sixth question
function delayExecution(func, delay) {
    const start = Date.now(); 
    const end = start + delay; 
    while (Date.now() < end);

    
    func();
}

delayExecution(() => {
    console.log("Executed after delay!");
}, 2000);

//8th question
//number




