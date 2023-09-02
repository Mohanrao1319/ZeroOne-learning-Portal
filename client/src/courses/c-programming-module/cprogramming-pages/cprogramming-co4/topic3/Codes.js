export const codeArr = [
    {
      code: `#include <stdio.h>
#define MAX_ROWS 100
#define MAX_COLS 100
  
void createMatrix(int m, int n, int matrix[MAX_ROWS][MAX_COLS]) {
    int i, j;
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            printf("Enter the element at position (%d, %d): ", i, j);
            scanf("%d", &matrix[i][j]);
        }
    }
}`
    },
    {
      code: `void addMatrices(int m, int n, int matrix1[MAX_ROWS][MAX_COLS], int matrix2[MAX_ROWS][MAX_COLS], int result[MAX_ROWS][MAX_COLS]) {
      int i, j;
      for (i = 0; i < m; i++) {
          for (j = 0; j < n; j++) {
              result[i][j] = matrix1[i][j] + matrix2[i][j];
          }
      }
  }`
    },
    {
      code: `void multiplyMatrices(int m1, int n1, int n2, int matrix1[MAX_ROWS][MAX_COLS], int matrix2[MAX_ROWS][MAX_COLS], int result[MAX_ROWS][MAX_COLS]) {
      int i, j, k;
      for (i = 0; i < m1; i++) {
          for (j = 0; j < n2; j++) {
              result[i][j] = 0;
              for (k = 0; k < n1; k++) {
                  result[i][j] += matrix1[i][k] * matrix2[k][j];
              }
          }
      }
  }`
    },
    {
      code: `void transposeMatrix(int m, int n, int matrix[MAX_ROWS][MAX_COLS], int result[MAX_ROWS][MAX_COLS]) {
      int i, j;
      for (i = 0; i < m; i++) {
          for (j = 0; j < n; j++) {
              result[j][i] = matrix[i][j];
          }
      }
  }`
    }
  ];
  