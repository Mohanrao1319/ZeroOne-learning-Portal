export const codeArr = [
    {
        code: `for (initialization; condition; increment/decrement) {
    // Outer loop code

    for (initialization; condition; increment/decrement) {
        // Inner loop code
    }
}`
    },

    {
        code: `#include <stdio.h>

int main() {
    int rows, columns;

    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    printf("Enter the number of columns: ");
    scanf("%d", &columns);

    // Outer loop for rows
    for (int i = 1; i <= rows; i++) {
        // Inner loop for columns
        for (int j = 1; j <= columns; j++) {
            printf("(%d, %d) ", i, j);
        }
        printf("\\n");
    }

    return 0;
}`
    },

    {
        code: `(1, 1) (1, 2) (1, 3) (1, 4)
(2, 1) (2, 2) (2, 3) (2, 4)
(3, 1) (3, 2) (3, 3) (3, 4)`
    },
];
