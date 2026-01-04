const str = "abbbbbbbbbbbbbbbbbcdc";
let arr = new Array(26).fill(0);
let output = "";
let lastCharacter;
if (str.length == 1) {
    output += 1 + str[0];
} else {
    for (let i = 0; i < str.length; i++) {
        if (arr[str.charCodeAt(i) - "a".charCodeAt(0)] < 9) {
            arr[str.charCodeAt(i) - "a".charCodeAt(0)]++;
        } else {
            output += arr[str.charCodeAt(i) - "a".charCodeAt(0)] + str[i];
            arr[str.charCodeAt(i) - "a".charCodeAt(0)] = 1;
        }
        if (lastCharacter && lastCharacter != str[i]) {
            output += arr[str.charCodeAt(i - 1) - "a".charCodeAt(0)] + str[i - 1];
            arr[str.charCodeAt(i - 1) - "a".charCodeAt(0)] = 0;
        }
        if (i == str.length - 1) {
            output += arr[str.charCodeAt(i) - "a".charCodeAt(0)] + str[i];
        }
        lastCharacter = str[i];
    }
}
console.log(output);

// without hashing

const str1 = "abbbbbbbbbbbbbbbbbcdc";

let output1 = "";
let count = 1;

for (let i = 1; i <= str1.length; i++) {
    if (str[i] === str[i - 1] && count < 9) {
        count++;
    } else {
        output1 += count + str[i - 1];
        count = 1;
    }
}

console.log(output1);