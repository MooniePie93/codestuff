//print repeated chars
const getRepeatChars = (str) => {
const chars = {};
for (const char of str){
chars[char] = (chars[char] || 0) +1;
}
return Object.entries(chars).filter(char => char[1] >1).map(char => char[0]);
}
console.log(getRepeatChars("Hello World"));
