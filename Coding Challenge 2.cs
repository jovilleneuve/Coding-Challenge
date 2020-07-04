using System;

class MainClass {

  public static string AlphabetSoup(string str) {

    // code goes here
    char[] characters = str.ToCharArray();
    Array.Sort(characters);
    str = new string (characters);
    return str;

  }

  static void Main() {  
    // keep this function call here
    Console.WriteLine(AlphabetSoup(Console.ReadLine()));
  } 

}