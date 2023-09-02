export const codeArr = [
    {
        code: `#include <stdio.h>
  
int main() {
    int num;
    printf("Enter an integer: ");
    scanf("%d", &num);
    printf("You entered: %d\\n", num);
    return 0;
}`
    },
    {
        code: `#include <stdio.h>
  
int main() {
    float fnum;
    printf("Enter a float: ");
    scanf("%f", &fnum);
    printf("You entered: %f\\n", fnum);
    return 0;
}`
    },
    {
        code: `#include <stdio.h>
  
int main() {
    double dnum;
    printf("Enter a double: ");
    scanf("%lf", &dnum);
    printf("You entered: %lf\\n", dnum);
    return 0;
}`
    },
    {
        code: `#include <stdio.h>
  
int main() {
    char ch;
    printf("Enter a character: ");
    scanf(" %c", &ch);
    printf("You entered: %c\\n", ch);
    return 0;
}`
    },
    {
        code: `#include <stdio.h>
  
int main() {
    char str[100];
    printf("Enter a string: ");
    scanf("%s", str);
    printf("You entered: %s\\n", str);
    return 0;
}`
    }
];
