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
            arr[str.charCodeAt(i) - "a".charCodeAt(0)] = 0;
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
