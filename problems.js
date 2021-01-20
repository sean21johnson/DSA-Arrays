//5 URLify a string
function convertUrl(str) {
    let arr = str.split("")
    let newStr = "";
    let emptyCharacter = " ";
    let replacementCharacter = "%20";

    for (let i = 0; i < str.length; i++) {
        if (arr[i] === emptyCharacter) {
            newStr += replacementCharacter;
        }
        else {
            newStr += arr[i];
        }
    }
    return newStr
}

//6 Filtering an array
function removeFives(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 5) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

//7 Max sum in the array
function maxSum(arr) {
    let maxEndingHere = 0;
    let maxSoFar = 0;
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        maxEndingHere = Math.max(0, maxEndingHere + item);
        console.log("Max ending here is ", maxEndingHere)
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
        console.log("Max so far is ", maxSoFar)
    }
    return maxSoFar;
}

//8 Merge arrays

let myArray = [4, 6, -3, 5, -2, 1]

console.log(maxSum(myArray))
