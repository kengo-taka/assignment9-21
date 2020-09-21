const findBrokenKeys = function(hello,hello2) {
let helloNew = hello.split('');
let hello2New = hello2.split('');
let x = [];
for ( i = 0 ; i < helloNew.length ; i++){
if (helloNew[i] !== hello2New[i]) {
  if (x.includes(helloNew[i]) === false) {
  x.push(helloNew[i]);
  }
}
}
console.log(x);
}


findBrokenKeys("happy birthday", "hawwy birthday") 
// ➞ ["p"]
findBrokenKeys("starry night", "starrq light") 
// ➞ ["y", "n"]
findBrokenKeys("beethoven", "affthoif5") 
// ➞ ["b", "e", "v", "n"]