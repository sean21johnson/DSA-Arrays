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
function mergeArrays(arrOne, arrTwo) {
    let indexOne = 0;
    let indexTwo = 0;
    let mergedArray = [];

    while (indexOne < arrOne.length && indexTwo < arrTwo.length) {
        if (arrOne[indexOne] < arrTwo[indexTwo]) {
            mergedArray.push(arrOne[indexOne]);
            indexOne++;
        }
        else {
            mergedArray.push(arrTwo[indexTwo]);
            indexTwo++;
        }
    }

    if (indexOne < arrOne.length) {
        while (indexOne < arrOne.length) {
            mergedArray.push(arrOne[indexOne]);
            indexOne++;
        }
    }

    if (indexTwo < arrTwo.length) {
        while (indexTwo < arrTwo.length) {
            mergedArray.push(arrTwo[indexTwo]);
            indexTwo++;
        }
    }

    return mergedArray;
} 

//Remove Characters