export const codeArr = [
    {
        code: "datatype arrayName[rowSize][columnSize];"
    },

    {
        code: `#include <stdio.h>

int main() {
    int matrix[3][3] = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };

    // Accessing and printing the values
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }

    return 0;
}`
    },

    {
        code: `1 2 3
4 5 6
7 8 9`
    },

    {
        code: `#include <stdio.h>

void addMatrices(int A[][3], int B[][3], int result[][3]) {
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            result[i][j] = A[i][j] + B[i][j];
        }
    }
}

int main() {
    int A[3][3] = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };
    int B[3][3] = { {9, 8, 7}, {6, 5, 4}, {3, 2, 1} };
    int result[3][3];

    addMatrices(A, B, result);

    // Printing the result
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", result[i][j]);
        }
        printf("\\n");
    }

    return 0;
}`
    },

    {
        code: `10 10 10
10 10 10
10 10 10`
    },

    {
        code: `#include <stdio.h>

void multiplyMatrices(int A[][3], int B[][2], int result[][2]) {
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 2; j++) {
            result[i][j] = 0;
            for (int k = 0; k < 3; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
}

int main() {
    int A[3][3] = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };
    int B[3][2] = { {9, 8}, {7, 6}, {5, 4} };
    int result[3][2];

    multiplyMatrices(A, B, result);

    // Printing the result
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 2; j++) {
            printf("%d ", result[i][j]);
        }
        printf("\\n");
    }

    return 0;
}`
    },

    {
        code: `38 32
101 86
164 140`
    }
];
