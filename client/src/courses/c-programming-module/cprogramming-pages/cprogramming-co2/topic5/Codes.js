export const codeArr = [
    {
      code: `
      unsigned int a = 5;   // binary: 0101
      unsigned int b = 3;   // binary: 0011
      unsigned int result = a & b;
      printf("%u", result); // Output: 1 (binary: 0001)
      `
    },
    {
      code: `
      unsigned int a = 5;   // binary: 0101
      unsigned int b = 3;   // binary: 0011
      unsigned int result = a | b;
      printf("%u", result); // Output: 7 (binary: 0111)
      `
    },
    {
      code: `
      unsigned int a = 5;   // binary: 0101
      unsigned int b = 3;   // binary: 0011
      unsigned int result = a ^ b;
      printf("%u", result); // Output: 6 (binary: 0110)
      `
    },
    {
      code: `
      unsigned int a = 5;   // binary: 0101
      unsigned int result = ~a;
      printf("%u", result); // Output: 4294967290 (binary: 11111111111111111111111111111010)
      `
    },
    {
      code: `
      unsigned int a = 5;   // binary: 0101
      unsigned int result = a << 2;
      printf("%u", result); // Output: 20 (binary: 10100)
      `
    },
    {
      code: `
      unsigned int a = 5;   // binary: 0101
      unsigned int result = a >> 1;
      printf("%u", result); // Output: 2 (binary: 0010)
      `
    }
  ];
  