export const codeArr = [
    {
      code: `#include <stdio.h>
  
int main() {
    int a = 5;
    int b = 3;
    int sum = a + b;
    int difference = a - b;
    int product = a * b;
    int quotient = a / b;
    int remainder = a % b;

    printf("Sum: %d\\n", sum);
    printf("Difference: %d\\n", difference);
    printf("Product: %d\\n", product);
    printf("Quotient: %d\\n", quotient);
    printf("Remainder: %d\\n", remainder);

    return 0;
  }`
    },

    {
        code : `int x = 5;
int result = ++x;
printf("%d\\n", result); // Output: 6
printf("%d\\n", x); // Output: 6`
    },

    {
        code : `int x = 5;
int result = x++;
printf("%d\\n", result); // Output: 5
printf("%d\\n", x); // Output: 6`
    },

    {
        code : `int x = 5;
int result = --x;
printf("%d\\n", result); // Output: 4
printf("%d\\n", x); // Output: 4`
    },

    {
        code : `int x = 5;
int result = x--;
printf("%d\\n", result); // Output: 5
printf("%d\\n", x); // Output: 4`
    },

    {
      code: `#include <stdio.h>
  
    int main() {
        int x = 5;
        x += 3;  // x = x + 3; // x = 5 + 3 = 8
        x -= 2;  // x = x - 2; // x = 8 - 2 = 6
        x *= 4;  // x = x * 4; // x = 6 * 4 = 24
        x /= 2;  // x = x / 2; // x = 24 / 2 = 12
        x %= 3;  // x = x % 3; // x = 12 % 3 = 0
    
        printf("x: %d\\n", x);  // Output: x: 0
    
  }`
    },
    {
      code: `#include <stdio.h>
  
  int main() {
      int a = 5;
      int b = 3;
  
      int isEqual = (a == b);
      int isNotEqual = (a != b);
      int isGreaterThan = (a > b);
      int isLessThan = (a < b);
      int isGreaterOrEqual = (a >= b);
      int isLessOrEqual = (a <= b);
  
      printf("isEqual: %d\\n", isEqual);
      printf("isNotEqual: %d\\n", isNotEqual);
      printf("isGreaterThan: %d\\n", isGreaterThan);
      printf("isLessThan: %d\\n", isLessThan);
      printf("isGreaterOrEqual: %d\\n", isGreaterOrEqual);
      printf("isLessOrEqual: %d\\n", isLessOrEqual);
  
      return 0;
  }`
    },

    {
      code: `#include <stdio.h>
  
  int main() {
      int condition1 = 1;
      int condition2 = 0;
  
      int logicalAnd = (condition1 && condition2);
      int logicalOr = (condition1 || condition2);
      int logicalNot = !condition1;
  
      printf("logicalAnd: %d\\n", logicalAnd);
      printf("logicalOr: %d\\n", logicalOr);
      printf("logicalNot: %d\\n", logicalNot);
  
      return 0;
  }`
    },
    {
      code: `#include <stdio.h>
  
  int main() {
      unsigned int a = 5;
      unsigned int b = 3;
  
      unsigned int bitwiseAnd = a & b;
      unsigned int bitwiseOr = a | b;
      unsigned int bitwiseXor = a ^ b;
      unsigned int bitwiseNotA = ~a;
      unsigned int leftShift = a << 2;
      unsigned int rightShift = a >> 1;
  
      printf("bitwiseAnd: %u\\n", bitwiseAnd);
      printf("bitwiseOr: %u\\n", bitwiseOr);
      printf("bitwiseXor: %u\\n", bitwiseXor);
      printf("bitwiseNotA: %u\\n", bitwiseNotA);
      printf("leftShift: %u\\n", leftShift);
      printf("rightShift: %u\\n", rightShift);
  
      return 0;
  }`
    }
  ];
  