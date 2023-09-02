export const codeArr = [
    {
        code: `struct Employee {
    char name[50];
    int age;
    float salary;
};`
    },

    {
        code: `struct Employee employees[5];`
    },

    {
        code: `employees[0].age = 30;
employees[1].salary = 5000.0;`
    },

    {
        code: `struct Employee employees[5] = {
    {"John Doe", 30, 5000.0},
    {"Jane Smith", 25, 6000.0},
    // ...
};`
    },

    {
        code: `employees[2].age = 35;
employees[3].salary = 7000.0;`
    },

    {
        code: `for (int i = 0; i < 5; i++) {
    printf("Employee Name: %s\n", employees[i].name);
    printf("Employee Age: %d\n", employees[i].age);
    printf("Employee Salary: %.2f\n", employees[i].salary);
}`
    }
];
