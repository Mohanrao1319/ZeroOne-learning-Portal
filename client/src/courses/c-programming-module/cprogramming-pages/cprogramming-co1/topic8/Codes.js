export const codeArr = [
    {
      code: `void autoExample() {
      auto int x = 10;
      printf("The value of x: %d\\n", x);
  }
  
  int main() {
      autoExample();
      return 0;
  }`,
    },
    {
      code: `void registerExample() {
      register int x = 10;
      printf("The value of x: %d\\n", x);
  }
  
  int main() {
      registerExample();
      return 0;
  }`,
    },
    {
      code: `void staticExample() {
      static int x = 10;
      printf("The value of x: %d\\n", x);
      x++;
  }
  
  int main() {
      staticExample();
      staticExample();
      return 0;
  }`,
    },
    {
        title: "Extern",
        code: `extern int x; // Declaration of external variable
    
    void externExample() {
        printf("The value of x: %d\\n", x);
    }
    
    int main() {
        externExample();
        return 0;
    }
    
    int x = 20; // Definition of external variable`,
      },
  ];
  
  export default codeArr;
  