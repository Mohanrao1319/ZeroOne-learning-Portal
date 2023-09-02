export const codeArr = [
    {
      code: `#include <stdio.h>
  #include <string.h>
  
  int main() {
      char str[] = "Hello, World!";
      size_t length = strlen(str);
      printf("Length of the string: %zu\\n", length);
      return 0;
  }`
    },
    {
      code: `#include <stdio.h>
  #include <string.h>
  
  int main() {
      char src[] = "Hello, World!";
      char dest[20];
  
      strcpy(dest, src);
  
      printf("Copied string: %s\\n", dest);
      return 0;
  }`
    },
    {
      code: `#include <stdio.h>
  #include <string.h>
  
  int main() {
      char str1[] = "Hello";
      char str2[] = "World";
  
      int result = strcmp(str1, str2);
  
      if (result == 0) {
          printf("Strings are equal\\n");
      } else if (result < 0) {
          printf("str1 comes before str2\\n");
      } else {
          printf("str2 comes before str1\\n");
      }
  
      return 0;
  }`
    },
    {
      code: `#include <stdio.h>
  #include <string.h>
  
  int main() {
      char str1[20] = "Hello";
      char str2[] = "World";
  
      strcat(str1, str2);
  
      printf("Concatenated string: %s\\n", str1);
      return 0;
  }`
    },
    {
      code: `#include <stdio.h>
  #include <string.h>
  
  int main() {
      char str[] = "Hello, World!";
      char sub[] = "World";
  
      char *substring = strstr(str, sub);
  
      if (substring != NULL) {
          printf("Substring found at index: %ld\\n", substring - str);
      } else {
          printf("Substring not found\\n");
      }
  
      return 0;
  }`
    },
    {
      code: `#include <stdio.h>
  #include <string.h>
  
  int main() {
      char str[] = "Welcome, ZeroOne-learning";
      char *token = strtok(str, ",");
  
      while (token != NULL) {
          printf("Token: %s\\n", token);
          token = strtok(NULL, ",");
      }
  
      return 0;
  }`
    }
  ];

  