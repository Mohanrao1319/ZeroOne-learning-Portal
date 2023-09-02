export const codeArr = [
    {
        code: `#include <stdio.h>

struct Employee {
    char name[50];
    int age;
    float salary;
};

int main() {
    struct Employee emp;
    
    // Code logic goes here
    
    return 0;
}`
    },

    {
        code: `#include <stdio.h>

struct Employee {
    char name[50];
    int age;
    float salary;
};

int main() {
    struct Employee emp1;
    struct Employee emp2 = {"John Doe", 30, 5000.0};
    
    // Code logic goes here
    
    return 0;
}`
    },

    {
        code: `#include <stdio.h>

struct Employee {
    char name[50];
    int age;
    float salary;
};

int main() {
    struct Employee emp1 = {"John Doe", 30, 5000.0};
    
    printf("Employee Name: %s\\n", emp1.name);
    printf("Employee Age: %d\\n", emp1.age);
    printf("Employee Salary: %.2f\\n", emp1.salary);
    
    // Code logic goes here
    
    return 0;
}`
    },

    {
        code: `#include <stdio.h>

struct Employee {
    char name[50];
    int age;
    float salary;
};

int main() {
    struct Employee employees[5];
    
    // Code logic goes here
    
    return 0;
}`
    },

    {
        code: `#include <stdio.h>

struct Employee {
    char name[50];
    int age;
    float salary;
};

int main() {
    struct Employee emp1 = {"John Doe", 30, 5000.0};
    struct Employee *ptr = &emp1;
    
    printf("Employee Name: %s\\n", ptr->name);
    printf("Employee Age: %d\\n", ptr->age);
    printf("Employee Salary: %.2f\\n", ptr->salary);
    
    // Code logic goes here
    
    return 0;
}`
    }
];
