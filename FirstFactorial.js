function FirstFactorial(num) { 

  // code goes here
  var nbr = 1 
  for (i = 1 ; i <= num ; i++)
  {
    nbr = nbr * i 
  }
  num = nbr 
  return num; 

}
   
// keep this function call here 
console.log(FirstFactorial(readline()));