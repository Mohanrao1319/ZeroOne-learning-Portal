export const codeArr = [
    {
        code : `#include <stdio.h>

        // Define a structure
        struct Point {
            int x;
            int y;
        };
        
        int main() {
            // Declare a structure pointer
            struct Point* ptr;
        
            // Allocate memory for a structure
            ptr = (struct Point*) malloc(sizeof(struct Point));
        
            // Access structure members using the arrow operator ->
            ptr->x = 10;
            ptr->y = 20;
        
            // Print the values
            printf("x = %d, y = %d\n", ptr->x, ptr->y);
        
            // Free the allocated memory
            free(ptr);
        
            return 0;
        }`
    }
];