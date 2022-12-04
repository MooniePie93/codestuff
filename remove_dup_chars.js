//remove duplicate chars
function removeDupChars(string){
return string
.split("")
.filter(function(item, pos, self){
return self.indexOf(item) == pos;
})
.join("");
}
console.log(removeDupChars("Hello World, h".toLowerCase()));