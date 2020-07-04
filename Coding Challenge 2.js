function AlphabetSoup(str) { 
var  SortedStr;
var str2
SortedStr = str.split('');
str2 = SortedStr.sort();
str = str2


  // code goes here  
  return str; 

}
   
// keep this function call here 
console.log(AlphabetSoup(readline()));