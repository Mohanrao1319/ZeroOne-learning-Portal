export const codeArr = [
  {
    code: `#include <stdio.h>

int calculateSum(int a, int b) {
    int sum = 0;
  
    if (a > b) {
      return a + b;
    } else {
      sum = a + b;
    }
  
    // Perform additional calculations
  
    return sum;
}`,
  },
  {
    code: `#include <stdio.h>

// Function to calculate the average of two numbers
float calculateAverage(float num1, float num2) {
    return (num1 + num2) / 2;
}

// Function to calculate the sum and average of three numbers
void calculateSumAndAverage(float num1, float num2, float num3) {
    float sum = num1 + num2 + num3;
    float average = calculateAverage(sum, 3);
  
    // Perform further operations with sum and average
}`,
  },
  {
    code: `#include <stdio.h>

// Function to calculate the factorial of a number
int calculateFactorial(int n) {
    if (n <= 1) {
        return 1;
    }
  
    int factorial = 1;
    for (int i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}`,
  },
  {
    code: `#include <stdio.h>

// Function to check if a number is even or odd
void checkEvenOrOdd(int num) {
    if (num % 2 == 0) {
        printf("%d is even", num);
    } else {
        printf("%d is odd", num);
    }
}`,
  },
  {
    code: `#include <stdio.h>

// Function to calculate the area of a rectangle
float calculateArea(float length, float width) {
    return length * width;
}

// Function to calculate the perimeter of a rectangle
float calculatePerimeter(float length, float width) {
    return 2 * (length + width);
}`,
  },
];
