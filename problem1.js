let str = "abaacda";
let arr = new Array(26).fill(0);

for (i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i) - "a".charCodeAt(0)]++;
}

let max = 0;
let character;
for (i = 0; i < 26; i++) {
    if (max < arr[i]) {
        max = arr[i];
        character = String.fromCharCode(i + "a".charCodeAt(0))
    }
}

console.log("Repeated " + character + " for " + max + " times.")