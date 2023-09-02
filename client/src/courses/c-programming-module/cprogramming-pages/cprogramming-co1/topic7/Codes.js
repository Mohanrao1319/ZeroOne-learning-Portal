export const codeArr = [
    {
        code : `#include <stdio.h>

        // Function to calculate the sum of two numbers
        int sum(int a, int b) {
            return a + b;
        }
        
        // Function to calculate the product of two numbers
        int multiply(int a, int b) {
            return a * b;
        }
        
        int main() {
            int x = 5, y = 3;
            
            // Call the sum function
            int result1 = sum(x, y);
            printf("Sum: %d\\n", result1);
            
            // Call the multiply function
            int result2 = multiply(x, y);
            printf("Product: %d\\n", result2);
            
            return 0;
        }`
    },
];