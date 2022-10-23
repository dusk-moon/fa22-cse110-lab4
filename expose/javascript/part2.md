1. 3 will be printed, because i is a var variable which means it is accessable anywhere within the function, and it will have the value of 3 after the for loop terminates.
2. 150 will be printed, because discountedPrice is a var variable which means it will be accessable anywhere in the function, and its final value will be the final entry in prices times 0.5 which will be 150.
3. 150 will be printed, because finalPrice will be accessable anywhere in the function as it is a var variable, and its final value after the for loop ends will be 150.
4. an array [50, 100, 150] will be return since that will be the value contained by the var discounted after the for loop terminates, and the variable discounted will still be accessable when it is returned since it is a var variable.
5. the code will cause an error because the variable i is declared as a let in the for loop, therefore, outside the for loop the variable i is not declared therefore calling it will cause an error.
6. the code will cause an error because the variable discountedPrice is declared as a let in the for loop, therefore, outside the for loop the variable discountedPrice is not declared therefore calling it will cause an error.
7. 150 will be printed, because line 14 is with in the scope where the let variable finalPrice is declared, and the final value of finalPrice is 150.
8. an array [50, 100, 150] will be return since that will be the value contained by the var discounted after the for loop terminates, and the variable discounted will still be accessable when it is returned since it is a var variable.
9. the code will cause an error because the variable i is declared as a let in the for loop, therefore, outside the for loop the variable i is not declared therefore calling it will cause an error.
10. 3 will be printed because const variable length is declared at the same scope where line 12 is, therefore, it is accessable and line 12 will print its final value which is 3.
11. an array [50, 100, 150] will be return since it is declared in the same scope where the return statement is which means that it is accessable, and pushing into the array that the const variable discounted contains is not reassignment therefore it does not cause an error. So the final value that it contains, [50, 100, 150] will be returned.
12. A:student.name 
    B:student['Grad Year'] 
    C:student.greeting() 
    D:student['Favorite Teacher'].name 
    E:student.courseLoad[0]
13. A:'32', because 2 is converted to string and string concatenation between 3 and 2 returns 32
    B:1, because 3 is converted to int and 3-2 returns 1
    C:3, because null is converted to 0 and 3+0 is 3
    D:'3null', because null is converted to 'null' and string concatenation is performed to get '3null'
    E:4, because true is converted to 1, and 1+3 is 4
    F:0, because both false and null are converted to 0, and 0+0 is 0
    G:'3undefined', because undefined is converted into a string and string concatenation is performed to get '3undefined' 
    H:NaN, because '3' is converted into 3 and undefined is converted into NaN, however subtracting 3 by NaN is an illegal operation which results in NaN.
14. A:true, because '2' is converted to 1 and 2>1 evaluates to true
    B:false, because string comparison is performed and since '2' is greater than '1', '2'<'12' evaluates to false
    C:true, because either '2' is converted to 2 or 2 is converted to '2' resulting in an evaluation to true
    D:false, because === strictly check for equality, which would be false as '2' and 2 are of different type
    E:false, because true gets converted to 1, and 1 equating 2 evaluates to false
    F:true, because Boolean(2) evaluates to true, and since true and true are strictly identical, therefore it evaluates to true
15. both operator checks for equality of the two operands, how ever === does not do type conversion thus it will always operands of different types to be different.
17. it will return the array [2, 4, 6], because for each entry in the input array [1, 2, 3], modifyArray pushes the result of calling the function doSomething with the current entry as input to newArr, and since doSometing doubles the input and returns it, newArr would contain 2, 4, 6 after the for loop terminates, then the function returns newArr.
19. 1 followed by 4 followed by 3 is printed immediately, and after a one second delay, 2 is printed.