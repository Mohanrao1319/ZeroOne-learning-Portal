export const codeArr = [
    {
      code: `return_type function_name(parameters) {
      // Base case (termination condition)
      if (base_case_condition) {
          // Return the base case result
      }
      
      // Recursive case
      // Modify the input or parameters to move towards the base case
      // Make a recursive call to the function with the modified input
      
      // Combine the results of the recursive call to obtain the final result
      // Return the final result
  }`
    },
    {
      code: `#include <stdio.h>
  
  int factorial(int n) {
      if (n == 0 || n == 1) {
          return 1;  // Base case: factorial of 0 or 1 is 1
      } else {
          return n * factorial(n - 1);  // Recursive call with a smaller subproblem
      }
  }
  
  int main() {
      int num = 5;
      int result = factorial(num);
      printf("The factorial of %d is %d\\n", num, result);
      return 0;
  }`
    },


    {
      code: `The factorial of 5 is 120`
    },
    
  ];
  

