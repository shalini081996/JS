//Find out the first string that is not repeated

let str = "a";
let count = 1;
let lastChar;
if (str.length > 1) {
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      if (count == 1) {
        console.log(str[i - 1]);
        break;
      }
      count = 1;
    }
  }
} else {
  console.log(str);
}
