export const codeArr = [
    {
        code : `datatype arrayName[rows][columns];`
    },

    {
        code :  `int matrix[3][3];`
    },

    {
        code : `#include <stdio.h>

int main() {
    int matrix[3][3];
    
    printf("Enter the values for the matrix:\n");
    
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("Enter the value for element [%d][%d]: ", i, j);
            scanf("%d", &matrix[i][j]);
        }
    }
    
    printf("The matrix is:\n");
    
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
    
    return 0;
}`
    },
    
];