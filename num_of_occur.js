//count occurances
const occurances = {};
const repeat = [];
str = "Hello World";
for (i =0, length =str.length; i < length; i++){
const l = str.charAt(i)
 occurances[l] = (isNaN(occurances[l]) ? 1 : occurances[l] + 1);
}
console.log(occurances)
