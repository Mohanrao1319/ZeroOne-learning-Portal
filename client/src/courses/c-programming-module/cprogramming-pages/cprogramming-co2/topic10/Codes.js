export const codeArr = [
    {
      code: `#include <stdio.h>
  
  int sumOfNaturalNumbers(int n) {
      if (n == 0) {
          return 0;  // Base case: sum of 0 natural numbers is 0
      } else {
          return n + sumOfNaturalNumbers(n - 1);  // Recursive call with a smaller subproblem
      }
  }`,
    },
    {
      code: `#include <stdio.h>
  
  int power(int base, int exponent) {
      if (exponent == 0) {
          return 1;  // Base case: any number raised to the power of 0 is 1
      } else {
          return base * power(base, exponent - 1);  // Recursive call with a smaller subproblem
      }
  }`,
    },
    {
      code: `#include <stdio.h>
  
  void reverseString(char* str) {
      if (*str) {
          reverseString(str + 1);  // Recursive call on the remaining subproblem
          printf("%c", *str);  // Print the current character in reverse order
      }
  }`,
    },
    {
      code: `#include <stdio.h>
  
  int countDigits(int n) {
      if (n == 0) {
          return 0;  // Base case: no digits in 0
      } else {
          return 1 + countDigits(n / 10);  // Recursive call with a smaller subproblem
      }
  }`,
    },
    {
      code: `#include <stdio.h>
  
  int isPalindrome(char* str, int start, int end) {
      if (start >= end) {
          return 1;  // Base case: empty string or single character is a palindrome
      }
      if (str[start] == str[end]) {
          return isPalindrome(str, start + 1, end - 1);  // Recursive call on the remaining subproblem
      } else {
          return 0;  // Not a palindrome
      }
  }`,
    },
  ];
  