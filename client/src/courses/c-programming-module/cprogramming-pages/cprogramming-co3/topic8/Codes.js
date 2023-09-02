export const codeArr = [
    {
        code : `#include <stdio.h>
#include <stdlib.h>

int main() {
    int* numbers;
    int size;

    printf("Enter the size of the array: ");
    scanf("%d", &size);

    numbers = (int*)malloc(size * sizeof(int));
    if (numbers == NULL) {
        printf("Memory allocation failed.");
        return 1;
    }

    printf("Enter %d numbers:\\n", size);
    for (int i = 0; i < size; i++) {
        scanf("%d", &numbers[i]);
    }

    printf("The numbers you entered are:\\n");
    for (int i = 0; i < size; i++) {
        printf("%d ", numbers[i]);
    }

    free(numbers);

    return 0;
}`
    }
];