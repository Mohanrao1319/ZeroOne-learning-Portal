export const codeArr = [  {
    code : `if (condition1) {
        // Code to be executed if condition1 is true
        
        if (condition2) {
            // Code to be executed if both condition1 and condition2 are true
        } else {
            // Code to be executed if condition1 is true but condition2 is false
        }
        
    } else {
        // Code to be executed if condition1 is false
    }`
},

 {
    code : `#include <stdio.h>

    int main() {
        int age = 20;
        int score = 85;
    
        if (age >= 18) {
            if (score >= 80) {
                printf("Congratulations! You are eligible for admission.\\n");
            } else {
                printf("Sorry, your score is not sufficient for admission.\\n");
            }
        } else {
            printf("Sorry, you are not eligible due to age restrictions.\\n");
        }
    
        return 0;
    }`
 }
    
];