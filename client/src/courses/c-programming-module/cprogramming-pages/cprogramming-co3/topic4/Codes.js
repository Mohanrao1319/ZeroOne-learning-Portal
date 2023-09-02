export const codeArr = [    
    {
        code: `datatype array_name[array_size];`
    },

    {
        code : `int numbers[5];`
    },

    {
        code : `numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;`
    },

    {
        code : `int numbers[] = {10, 20, 30, 40, 50};`
    },

    {
        code : `int numbers[] = {10, 20, 30, 40, 50};`
    },
    {
        code : `#include <stdio.h>

int main() {
    // Creating an array
    int numbers[5];

    // Inserting elements into the array using user input
    printf("Enter 5 numbers:\\n");
    for (int i = 0; i < 5; i++) {
        scanf("%d", &numbers[i]);
    }

    // Accessing and printing the elements of the array
    printf("Elements of the array: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\\n");

    return 0;
        }`
    }
];