export const codeArr = [
    {
        code : `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    for (int k = 0; k < n - 1; k++) {
        for (int s = 0; s < n - k - 1; s++) {
            if (arr[s] > arr[s + 1]) {
                // Swap arr[s] and arr[s+1]
                int temp = arr[s];
                arr[s] = arr[s + 1];
                arr[s + 1] = temp;
            }
        }
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int arr[] = {5, 13, 10, 55, 22};
    int n = sizeof(arr) / sizeof(arr[0]);
    printf("Original array: ");
    printArray(arr, n);

    bubbleSort(arr, n);

    printf("Sorted array: ");
    printArray(arr, n);

    return 0;
}`
    }
];  