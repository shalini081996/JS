// [1,[2,[3,4]],5]  to [1,2,3,4,5]
let complexArray = [1,[2,[3,4]],5];
let newArray = [];
function flattenArray(arr) {
    for(let item of arr) {
        if(Array.isArray(item)) {
            arr = arr.concat(flattenArray(item))
        } else {
            newArray.push(item);
        }
    }  
}

flattenArray(complexArray);
console.log(newArray);