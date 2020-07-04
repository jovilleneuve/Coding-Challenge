import java.util.*; 
import java.io.*;

class Main {

  public static String AlphabetSoup(String str) {
    int j = 0;
		char temp = 0;

		char[] chars = str.toCharArray();

		for (int i = 0; i < chars.length; i++) {

			for (j = 0; j < chars.length; j++) {

				if (chars[j] > chars[i]) {
					temp = chars[i];
					chars[i] = chars[j];
					chars[j] = temp;
				}

			}

		}
   String str2 ;
    str2 =  new String(chars);
    str = str2;
    return str;
  }

  public static void main (String[] args) {  
    // keep this function call here     
    Scanner s = new Scanner(System.in);
    System.out.print(AlphabetSoup(s.nextLine())); 
  }

}