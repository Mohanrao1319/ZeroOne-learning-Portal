export const codeArr = [
    {
        code : `#include <stdio.h>

int linear_search(int arr[], int size, int target) {
    for (int k = 0; k < size; k++) {
        if (arr[k] == target) {
            return k;  // Found the target at index i
        }
    }
    return -1;  // Target not found in the array
}

int main() {
    int my_array[] = {9, 1, 12, 6, 5, 3, 7};
    int size = sizeof(my_array) / sizeof(my_array[0]);
    int target_value = 3;
    int result = linear_search(my_array, size, target_value);
    
    if (result != -1) {
        printf("Target %d found at index %d.\\n", target_value, result);
    } else {
        printf("Target %d not found in the array.\\n", target_value);
    }
    
    return 0;
}`
    }
];  