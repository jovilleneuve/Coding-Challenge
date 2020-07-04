function FindIntersection(strArr) { 

  // code goes here
  var firstArray  = strArr[0].split(', ');
  var secondArray = strArr[1].split(', ');
  var result = [];
  var ctr = 0;
  
  for (i = 0; i < firstArray.length;i++)
  {
    for (j = 0 ; j < secondArray.length;j++)
    {
         if (firstArray[i] === secondArray[j])
         {
           result[ctr] = firstArray[i];
           ctr++;
         }
    }
  }
  strArr = result
  return strArr; 
  }