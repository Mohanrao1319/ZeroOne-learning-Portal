export const codeArr = [
    {
        code: `#include <stdio.h>

        int main(int argc, char *argv[]) {
            printf("Argument count: %d\\n", argc);
        
            for (int i = 0; i < argc; i++) {
                printf("Argument %d: %s\\n", i, argv[i]);
            }
        
            return 0;
        }`
    },

    {
        code : ` ./program arg1 arg2 arg3 `
    },

    {
        code : `Argument count: 4
Argument 0: ./program
Argument 1: arg1
Argument 2: arg2
Argument 3: arg3`
    }
];