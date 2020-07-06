function FirstReverse(str) { 

  var strArray = str.split('');
  var strReverse = strArray.reverse();
  var strJoin = strReverse.join("");
  str = strJoin;
  return str; 

}
   
// keep this function call here 
console.log(FirstReverse(readline()));