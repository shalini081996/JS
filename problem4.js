
let arr = [0,1];
for(i=0;i<8;i++) {
    arr[i+2] = arr[i]+arr[i+1];
}
console.log(arr)