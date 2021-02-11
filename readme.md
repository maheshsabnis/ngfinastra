# ES 6, 7,8,9, esNext

- Modern startndard for Front-End app development or event for Isomorphic Apps (Same code base from Fornt-End to Server Side App development)
- ES 6 Features
    - Scope definition using the 'let' keyword
    - Type System (Explicitely in TypeScript)
        - number, string, object, boolean, date, Array<T>
        - Union Types, (defining a variable with more that one data type)  
    - Spread Operators
        - ... 
    - Template Strings
        - Modern String Interpolations aka String Mutation (Single String  Object with Multiple Strings and Dynamic Expressions parsed as HTML)
        - Syntax
            - `${<Dynamic Expression>} SOME STRIN ${<Dynamic Expression>}`     
    - Arrow Operators
        - Syntax is '=>'
        - Uses as a input parameter to function that accepts the callback funciton as inout parameter        
    - Object Oriented Programming (OOPs)
        - Class with keyword as 'class'
            - The 'constructor()' is a standard function for constructor of the class
        - Access Specifiers (TypeScript)
            - public (default for all class members)
            - private, protected      
        - Access Modifiers
            - static
        - get / set properties     
        - The 'extends' for inheritance
        - The Abstract class support   
        - No Overloading and Overrding
        - Generics (TypeScript)
        - Interfaces
            - Use 'implements' keyword to implement the interface 

# Programming with TypeScript
- Prerequisites
    - Node.js must be installed
        - https://www.nodejs.org
- Installing TypeScript
    - Install TYpeScript on Machine Scope by running the command from the command prompt
        - npm install -g typescript       
            - This will install 'tsc' CLI tool
            - The TypeScript Compilation into JavaScript aka Transpilation
                - e.g. tsc <FILE-NAME>.ts 
                    - This will generate <FILE-NAME>.js     

- using scope with the 'let' keyword
    - JavaScript works on the function scope
    - the 'let' keyword for block scope
- data types
    - implict declaration based on initial vaue of the variable
        - e.g. let x = 100; // implicit to 'number'
    - explicit declaration
        - e.g. let x:number; // explicit to number    
    - number, string, date, bool, object, any (default)
    - union type
        - e.g. let x:number|string
            - restrict x for either number or string (one at a time)    
    - Array Types
        - Complex object type
        - This has Methods
        - USed yto store large data in it
        - Array<T>
            - The generic array where T can be any data-type
                - T can be number, date, string, object, etc.
    - String Type
        - Same as Array only for characters
- Arrow Operator
    - This is used as input parameter to method which accepts the callback function as parmeter                             
-  forEach and map
    - Both are used for iterations
    - the map() can be used to modify an element in array during iteration and return it
        - the original array will not be changes
    - the forEach() the each element is modify first in original array and return the origianl array
        with modified values

Hands-on lab
1. Self Study of differences between == and === in TypeScript aka ES6
2. CReate an array of strings. Add minimum 10 values in this array and pertform following operations on it
    - Sort the array based on lengths of each string in array in ascending order, use 'sort()' method   (immediate)
    - Sort the array based on alphabet and its length and print it (optional)
        - e.g. if array contains 'Mahesh', 'Manish', 'Manu'
            - Manu, Mahesh, Manish      
3. CReate a string with minimum 50 words and 10 Statements in it. (immediate)
    - e.g. 'The James Bond series focuses on a fictional British Secret Service agent created in 1953 by writer Ian Fleming, who featured him in twelve novels and two short-story collections. Since Fleming's death in 1964, eight other authors have written authorised Bond novels or novelisations: Kingsley Amis, Christopher Wood, John Gardner, Raymond Benson, Sebastian Faulks, Jeffery Deaver, William Boyd and Anthony Horowitz. The latest novel is Forever and a Day by Anthony Horowitz, published in May 2018. Additionally Charlie Higson wrote a series on a young James Bond, and Kate Westbrook wrote three novels based on the diaries of a recurring series character, Moneypenny. The character—also known by the code number 007 (pronounced "double-O-seven")—has also been adapted for television, radio, comic strip, video games and film. The films are the longest continually running film series of all time and have grossed over US$7.04 billion in total, making it the sixth-highest-grossing film series to date, which started in 1962 with Dr. No, starring Sean Connery as Bond. As of 2021, there have been twenty-four films in the Eon Productions series. The most recent Bond film, Spectre (2015), stars Daniel Craig in his fourth portrayal of Bond; he is the sixth actor to play Bond in the Eon series. There have also been two independent productions of Bond films: Casino Royale (a 1967 spoof starring David Niven) and Never Say Never Again (a 1983 remake of an earlier Eon-produced film, 1965's Thunderball, both starring Connery). In 2015 the series was estimated to be worth $19.9 billion,[1] making James Bond one of the highest-grossing media franchises of all time.'    
    - Perform following operation on it
        - FInd out number of words and statements in the string.
        - Change the string in Title Case (First character of each word in uppercase)
        - find out how many times the word 'the', 'of', 'and' occures in the string        
