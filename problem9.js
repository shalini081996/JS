// for string "aabccdeef" create {a:2, b:1, c:2, d:1, e:2, f:1}

let str="aabccdeef";
let countObject = {};
let newArray = new Array(26).fill(0);
for(i=0;i<str.length;i++) {
    newArray[str.charCodeAt(i)-"a".charCodeAt(0)]++;
}

for(let i=0;i<newArray.length;i++) {
    if(newArray[i]) {
        countObject[String.fromCharCode(i+"a".charCodeAt(0))] = newArray[i];
    }
}

console.log(countObject);