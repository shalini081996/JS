let arr = [-2,-4,-5,6,-1,-10];

let largestNumber = -Infinity;
let secondLargestNumber = -Infinity;

for(let i=0; i<arr.length; i++) {
    if(arr[i]>largestNumber) {
        secondLargestNumber = largestNumber;
        largestNumber = arr[i];
    }
}
console.log("Second largest number is ", secondLargestNumber)