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
- Object Oriented Programming (OOPs)
    - Modulalrity provides the modular design pattern for JavaScript
    - Create Class with data members, properties and methods
        - Fornt-ENd Modularity
            - Model classes 
                - Data Models        
    - class members are accessed in class using 'this' reference scope object
    - class members are public by default
    - The 'constructor()' is a standard function tahtn occures 'only-once' in a class.
        - constructor() can have parameters
            - default scope is limited to constructor() function      
                - e.g. constructor(a,b)
                    - a,b areb scopped to constructor function
            - Parameters with access specifier
                - e.g. constructor(private a:number ,private b: number)
                    - a,b are private members of class   
                - e.g. constructor(public a:number ,public b: number)
                    - a,b are public members of class           
    - Generics
        - reusable data structure for type-safe data
        - Custom Funcationalities for data structure
            -  Perform compare operations but not mathemati al operations
        - Generic
            - Class
            - Mehod
            - Property
            - Interface
            - Data Members    
    - Modules
        - A Modular pattern that is used to separate logic in separate code files (.ts /.js)
        - The 'export' keyword, that exports the type
        - the 'import' keyword, that imports the exported type        

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

# Angular Programming

1. Create a Angular Project using Angular CLI
    - The Command line tool to create Angular Project with
        - Standard Modules
        - Dev / Test / Build / Release Project Structure
        - Dependeicy Configurations
        - Default Dev Server Configiration
    - The Command to install Angular CLI in GLobal Scope    
        - npm install -g @angular/cli
            - Provides the 'ng' utility
                - ng serve
                    - host the app on DevServer and process the Http Request for responding Angular Build / output files to browser
                - ng build
                    - build the project for Production and Release
                - ng test
                    - Run Test        
        - Create Angular Project using CLI
            - ng new <PROJECT-NAME>
- Angular Eco-System
    - @angular/compiler
        - Standard Ahead-of-Time (AOT) Compiler
            - Compile and compress the Output build upto 80% of the original Source code size
                - Converts the HTML Template (html file) and TypeScript code into optimized (aka Compressed) JavaScript before the browser downloads and run the code                       
            - Angular 9 with Ivy
                - AOT Enhancements for 90% of the Optimization   
        - Just-In-Time Compiler (JIT)
            - compiles the app in browser at runtime
                - Good forTesting or during development
    - @angular/common
        - The Modules for the Managing the HTML Rendering in the browser when the app is divided into several independent modules
            - CommonModule
        - @angular/common/http
            - For all HTTP operations         
    - @angular/platform-browser-dynamic
        - Boostrap the First Angular Module in browser (aka Load the Angular app for exdecution)
    - @angular/platform-browser
        - Take the responsibility of Rendering all COmponents (Base Module as well as from referred modules)       
            - BrowserModule (Mandatory Module class for Execution)              
    - @angular/core
        - The Angular Framework's core classes
            - NgModule
            - Component
            - Directive
            - Pipe
            - Injectable
            - Input
            - Output
            - HostListener
            - Renderer2
            - EventEmitter
    - @angular/forms
        - For Databinding
            - FormsModule
        - Reactive Forms
            - ReactoveFormsModule
    - @angular/router
        - Single  Page Application
            - RouterModule
    - @angular/element
        - Creating Custom Element in Angular App

- The package.json
    - The Command to create the package.json
        - npm init -y
    - Sections
        - "scripts"
            - Section to contain commands for
                - Test
                    - npm run test
                - Start
                    - npm run start
                        - execute the "start" switch from "scripts", this will execute the command set as value of "start"
                            - "start" : "ng serve"
                            - npm run start commad will execute "ng serve"
                            - ng serve --prod
                                - Create a Production Build for The Angular App for Production 
                - Build
                    - npm run build
        - "devDependencies"
            - Contains list of all packages used during development and testing
        - "dependencies"
            - contains list of all packages used during Production Build and execution
            - Angular Production external dependencies
                - rxjs
                    - Reactive Extensions for JavaScript
                    - Provides 'Observable' class to state management for storing data from AJAX calls
                - zone.js
                    - Manage the Browser Staktrace in case of any errors during execution in browser
                - tslib
                    - The TypeScript Library object model that will manage the ES 5 transpilation form the source code to generate JavaScript and load it in browser           
- The TypeScript COnfiguration File
    - tsconfig.json
        - The file is created using following command
            - tsc --init
        - tsconfig.app.json
            - TypeScript Language Cofigurations for Development and Build
        - tsconfig.spec.json
            - TypeScript Language Configuration for testing    
- The Angular Application Confioguration File
    - angular.json   
        - Build Config
        - Prod. Config
        - Test Config                       
    - modifying angular.json to support external JS libraries or CSS
        - First install these JS libs or CSS as "dependencies"  
            - npm install --save <PACKAGE-NAME>
                - e.g. npm install --save bootstrap  

# Decorators
1. It is a Concept of Deorator Design pattern and it is used by ES 6 onwards to define a behavior for ES 6 Types 
    - e.g. Class, Method, Data Member, Property, Events, etc.                  
2. Angular Important Decorators
    - @NgModule feom @angular/core
        - Decorate class as Angular Module class for executing as container
        - Properties
            - imports: of the type array, this defines list of all standard and custom angular modules to be loaded for the current angular application. 
            - declarations: of the type array, this defines list of all components, custom directives and custom pips added by developer in the current project so that they will be loaded and executed.
                - each component, custom directive and custom pipe must be declared in Entry-point module for execuion, otherwise they won't be executed and will produce runtime error if used w/o declaring.   
            - providers: of the type array, used to provide 'Dependency Ijection container' to register all Angular Services so that they can be injected in Component/Custom Directives, etc.    
            - bootstrap: of the type array, used to define list of Components from 'declarations' so that they can be rendered in browser by BrowserModule
            - enrtyComponent: of the type array, used to expose the Angular COmponent as Angular Element so that third party laibrary can use it as Custom element.
            - exports: of the type array, used to export components / services / custom directives from current module to other Angular modules.
        - Component
            - The decorateot applied on class to make it as Angular Component
                - Properties
                    - selector: the property thst is used to define a custom HTML tag so that the component can be used for execution on HTML page or HTML of other component
                    - templateUrl:
                        - The path for HTML file that contains UI for the current Component
                    - template:   
                        - the inline HTML template defined in Component source code file (Please avoid if the UI is very complex)
                    - styleUrls: external css files used by component
                    - style: inline CSS styles for the component            

# Component and Databinding
1. Interpolation aka Expression Binding
    - The One time One way Binding of data from Component to UI elements
    - Syntax
        - <div> {{<PUBLIC-DATA-MEMBER-OF-COMPONENT>}}   </div>
        - The Expression can be evaluated by the INterpolation e.g. {{2+3}}, will be rendered as 5
2. Property Binding
    - Binding public data members of Component class with attribute System of HTML Elements
    - This is "one-Way" from Component class to UI
    - Syntax
        - [<HTML-ELEMENT-ATTRIBUTE>]="<PUBLIC-DATA-MEMBER-OF-COMPONENT>"
        - e.g.
            - <input type="text" [value]="message">
                - The 'value' is an atribute of HTML element and message is public data member from Component
            - [value], [href], [disabled], etc.            
    - Angular have written a HTML parser that uses HTML stadard attribute for Property Binding. These attrbutes as executed as 'Attribute-Directives' internally          
3. Event Binding
    - Binding public methods of the Component class with events of HTML elements
    - An event is reised on HTML and will be listened by the component and the  bound method will be executed
    - This is from UI to Component
    - Syntax
        - (<EVENT>)="<method>()"
        - e.g.
            - <input type="button" (click)="display()">
                - click is event and display() is public method of the component
            - (click), (change), (keyup), (blur), etc.
    - If the method bound to UI element wants to pass value of any attribute of theat UI element to the method then use the '$event' object
        - $event is JavaScript stantd object to passs UI element's attribute value to method
        - $event.target, is the element on which an element is raised.
4. The two-way data binding
    - Combination of the Property-Binding + Event-Binding
    - SYntax:
        - [(ngModel)]="<PUBLIC-MEMBER-FROM-COMPONENT-CLASS>"
            - ngModel, is the attribute directve in Angular for two-way binding
        - VERY IMP: To execute ngModel we must import 'FormsModule' from @angular/forms in @NgModule class                              
        - ngModel listen to the default event of element on which it is applied for two-way binding
        - It will read the data changed for the element and pass the updated data to Component for the property bound to UI element.
        - Component will call its 'ngOnChanges()' method and digest all received changes from UI
        - It will update all properties dependant on the property being updated from UI
        - It will push changes back to UI
5. The Component implements 'OnInit' interface from @angular/core
    - This contains 'ngOnInit()'method
        - THis will be invoked immediately aftre constructor
        - Write the code in this method that cannot be wriiten in constructor
            - e.g. AJAX calls, COllection Initialization, external service subscription, etc.

# Angular Directives

1. They are classes used to define behavior of HTML Template for the Angular Component
2. Types of Directives
    - Component Directive
        - Each Angular Component is a reusable directive
        - Custom Controls with UI, Properties and Behavior (events) those are re-usable
        - This must be generalized based on requirements
            - What will be the UI of the component directive?
                - Plan for Standard HTML eleemnts
            - How the component directive will communicate with its parent?
                - Plan for Data Properties of which values to be accepted from parent component
            - How the component directive will emit data to parent component?
                - Plan for Events       
        - Parent-Child Relationship across components
            - The parent must pass data to child component and child component must acceopts the data as input
                - The child component must have a public get/set property decorated with @Input() decorator from @angular/core
                    - The property decorated as @Input() will be used for Property Binding when this component is used by Parent Component
                    - e.g. @Input()myProprty;
                    - <my-child-component [myProperty]="<PROPERTY-FROMPARENT-COMPONENT>">
            - The child component must emit data to parent component and parent must subscribe to the data emitted
                - USe the EventEmitter<T> class from @angular/core
                    - T is the data type thet child wants to emit
                    - The 'emit()' method of this class will emit the data
                - Decorate the public property of the type EventEmitter<T> with @Output() from @angular/core        
                    - The parent will subscribe to the event emitter from child to parent using event binding
                        - e.g. @Output()notified:EventEmitter<any>
                    - Parent component
                        <my-child-component (notified)="<METHOD-FROM-PARENT-COMPONENT>($event)">    
    - Attribute Directive
        - They are custom attributes for HTML elements
            - ngModel
        - Generally we can have cutsom attribute directives
    -Structural Directives
        - USed to Add / Remove DOM dynamically based on condition
        - e.g.
            - *ngFor, the for..of loop to generate HTML elements based on Collections
            - *ngIf, dynamically add / remove DOM based on condition
            - *ngSwitch ... ngSwitchCase              

# Angular Programming Needs
1. Data Verification for the values entered by End-User
    - Client-Side Validations
        - JavaScript for Async PostBack for Server-Side Validations
            - UserName / Password
            - Identity Validations
                - Credit Card
                - Account No. Validation 
        - Pure Front-End Side Validations written in JavaScript
            - Client-Side Validators
                - Basic Validations
                    - Required
                    - Min / Max
                    - MinLength / MaxLength
                - Value Basedx Validations
                    - Pattern
                    - Email
                    - null
                    - RequiredTrue
                - Custom Validations (Powerful)
                    - Domain-Specific Clien-Side Validations               
            - @angular/forms
                - Template Forms
                    - Basic HTML Form for Accespting Data as a ngModel
                - Reactive Forms
                    -  Industry Standard Mechanism for Processing 'form' as a single Model object that is postback with data validations  
                        - ReactiveFormsModule
                            - FormGroup
                                - the form object with FormControls(?) inside it
                                - defines Key/Value pair of the FormModel binding with <form> tag
                                    - key is the identification of UI element
                                    - valie is the Property from the mode class
                                - Property
                                    - The 'value' property represents the Key/Value pair for all formControls submitted based in form-submit     
                                - Method
                                    - The 'setValue()' will be used to set value for FormGroup    
                            - FormControl
                                - represents an editable element inside <form>
                                - this element is bind with the Form-Model object using FormGroup   
                                - this class accepts 2 parameters to its ctor
                                    - formState, the value entered in UI elekentn bound with formControl using 'formControlName'  
                                    - The ValidatorOptions
                                        - nullbale
                                - Property
                                    - The  'value' property, is value of individual formControl       
                                  - Method
                                    - The 'setValue()' will be used to set value for FormControl          
                            - [formGroup], the attribute directive to bind the FormGroup object with <form>
                            - formControlName, the attribute directive that is used to link the 'key' of form group with UI element    
                                    - this is similar to 'name' attribute of HTML
                            - Validators
                                - the class having static method for validations
                                    - required(AbstractControl)
                                    - requiredTrue(AbstractControl)
                                    - pattern(string | RegEx)
                                    - min(number) / max(number)
                                    - minLengt(number) / maxLength(null)
                                    - email(AbstractControl)
                                    - compose([Array]) 
                                        - Accepts an array of validation rules to be applied / defined for proeprty of Model class    
                                            - used for multiple validation for on single property
                                - AbstractControl
                                    - Base class for all UI elements          
                                - Note: the method accept tyhe AbstractControl as inout parameter gents invopked implicitely as callback
                                    - This implicitely reads value from the UI element     
                            - To show validation message on UI use following
                                - *ngIf
                                    - Add / Remove DOM based on Validations
                                - Validation Evaluaiton Expressions
                                    - check if UI element is focused and changed  
                                        - <FormGroup>.controls.<formControlName>.dirty
                                         
                                    - check if the property is evaluated as valid OR invalid 
                                        - !<FormGroup>.controls.<formControlName>.valid OR 
                                            <FormGroup>.controls.<formControlName>.invalid       
                                    - eveluate whicha validation is failed
                                        - <FormGroup>.controls.<formControlName>.errors.<VALIDATION-RULE-FAILED>
                                            - e.g <FormGroup>.controls.<formControlName>.errors.required
                                                - required validation 

                            - Custom Validators
                                - Create a class with Static method
                                    - This method may accept premptive type or AbstractControl
                                    - If the vaidation is successful then the method returns 'null'
                                    - Else it will return the JSON object
                                        - e.g. {valid:false} / {invalid:true} / {<USER-DEFINED-KEY>:false}
                                            - <FormGroup>.controls.<formControlName>.errors.<USER-DEFINED-KEY>

# ANgular Service

``` JavaScript
import { Injectable } from "@angular/core";


@Injectable({
  providedIn:'root'
})
export class UtilityService {
   getLength(str:string):number {
     return str.length;
   }
   changeCase(str:string, c:string):string{
    if(c === "U") return str.toUpperCase();
    if(c === "L") return str.toLowerCase();
    return str;
   }
}

```
Injectable: the decorator for defining class as a class to be registered as a Angular Service class in DI COntainer

  - 'root' : The application-level injector in most apps.
  - 'platform' : A special singleton platform injector shared by all
     applications on the page.
   - 'any' : Provides a unique instance in each lazy loaded module while all eagerly loaded modules share one instance.

# Angular Services HTTP Calls
1. @angular/common/http
    - HttpClientModule
        - Platform for for HTTP Calls
    - HttpClient
        - Manages all HTTP Requests
            - get() / post() /put() / delete()
            - All methods responds Observable<T>
                - Observable<T>
                    - Container for T Response
                        - T, Object, Array, Staring, Text, Xml, JSON, BLOB (http 2.0), ArrayBuffer (http2.0)
                    - rxjs library
                        - Observable.fork()
                            - help parallel calls for multiple REST APIs    
    - HttpHeaders
        - Used to Pass headers
            - post() / put() , mandatory
            - secure calls
2. Role based access for REST APIs calls
    - If REST Calls with repeated values in request headers
        - then create a Http Request Interceptor to intercept the outgoing calls to add / modify the header vaues or request parameters
            - @angular/common/http
                - HttpInterceptor
                    - interface to intercept each outgoing Http Request
                        - intercept(HttpRequest, HttpHandler)
                - HttpRequest
                    - Represent outgoing request
                - HttpEvent
                    - Monitor an execution of Request and the received response and take action on the received response by the client application.
                - HttpHandler
                    - Handle the request for any modification of headers values and construct the request with odified values and forward it  
    - Routes with Guard     
        - Object Model for Protecting the Angular Routes from UnAuthorized Users
            - CanActivate
                - interface implement the Guarg Service that is used to mprotect the Routes
                    - 'canActivate(ActivateRouteSnapshot, RouteStateSnapshot): Observable<boolenan | UrlTree> | Promise<boolean> | boolean | UrlTree' method
3. Sigle Page Application (SPA)
    - Reduce the Postback to the server for DOM
        - Get data from Server and generate the UI Dynamically based on Data using HTML Templates and Databinding 
    - High Responsive View / UI navigation
        - A collection of UI Templates along with the url keys
            - Dictionary containg the Url Path Keys and its corresponding UI Template
    - @angular/router
        - RouterModule
            - Provides an Object Model for SPA in Angular
            - Object Model
                - Route
                    - The class that defies Dictionary Entry for Routing   
                        - Propertis
                            - 'path': the URL
                            - component: thecomponent to navigate to
                            - redirectTo: if path is not found then defult URL to redirect
                            - children: [Child Route Array aka Routes object]
                            - loadChildren: Lazy Loading of Modules
                            - CanActivate: For Guarded Routing aka Role Based Routing Access
                            - data: define a role for which the route path is activated      
                - Routes
                    - Collection of Route       
                - Router
                    - Class for Explicit Route Navigation
                    - Using  'navigate([path])'     
                - ActivatedRoute
                    - Managing Routes with Parameterized Routes     
                - [routerLink], the attribute directive for Routing
                    - <a [routerLink]='['<path>']'>
                - <router-outlet></router-outlet>
                    - A Custom Component Directive that will render the component under navigation based on 'path' requested             
        Feature Modules
            - Shared modules those will contain components, services, directives.
            - These can be 
                - Shared as reusable module across other modules
                - Can be Lazy-loaded in the parent angular application            
            - For rendering of components and directves the feature modules uses 'CommonModule'
                - This CommonModule will help BrowserModule to manage rendering of the Components and Directives of feature module in parent application.     
4. Elements    
    - Installing Angular Elements 
        - npm install --save @angular/elements
    - To make the element interactive perform following
        - define properties decorated with @Input() decorator
        - define event(s) using EventEmitter<T> and decorate the event using @Output                           


5. Custom Attribute Directive
    - the class decorated with @Directive() decorator from @angular/core
        - the 'selector' property will be used to define the name of the directive when it will be appled on HTML elements
    - Use to define a behavior of DOM element
        - ElementRef
            - Class for Targetting to DOM element to apply the directive
        - Renderer2
            - Then class used to define rendering of DOM element after the directive is activated    
    - Define Input Properties to accept data
        - @Input() decorated properties to accept data from parent component
        - The Input Decorated property will be used for PropertyBinding to activate the directive on DOM element
    - Define Business Logic 
        - Logc for directive
    - Define events for interaction
        - The events using which the directive will be activate on component
        - Use @HostListener() decorator, applied on methods of Directive to activate the business logic of the directive
6. Angular Material
    - @angular/material
        - Material Design for Componets for Angular Apps 
            - Featured Components
                - Ready Customized UI
                - Properties
                - Events
        - npm install --save @angular/material @angular/cdk    
            - CDK, the component development toolkit
        - For Angular CLI
            - ng add @angular/material
        - import {<component>} from @angular/materal/<component> 
            - AutoComplete
                - @angular/material/autocomplete
                    - import {MatAutoCompleteModule} from  @angular/material/autocomplete
                        - MatAutocomplete Directive
                            - mat-autocomplete selector
                    - This must ne linked with the HTML input:text element              
# Angular Hands-on-Lab

1. Create a Calculator Component like Calculator on Windows OD / Linux / MacOS (Immediate)
2. Modify the Employee Component for following operations
    - Make sure that EmpNo is not duplicated (Do not use Pipes from google) receiveDesignation
    - When a row is selected from Table, it must be displayed in  TextBoxes and Select, the user should be ale to update it. receiveDesignation
    - Generate Delete button for each table row to delete row.
3. Implement the Reactive Forms with the following validations
    - Make sure that the EmpName starts from Upper Case Character (Hint: Use Regular Expression) (Immediate)
    - Write a custom validator that will check if the EmpNo is already Present (Immediate)
4. Create a Custom re-usable component that will show vaidation summary at the bottom of the page (later in seond half)      

5. CReate a Search Component that will have a TextBox. This component will act as a Gloabl / Site Level search for the vaious components currently loaded. Lets this component accept the Search String e.g. Manufacturer = "IBM". The page will have 3 components i.e. SearchComponent and components showing data of Products, Orders. When the value as "IBM" entered in searched textbox, Only products manufcaturered by IBM and Orders for IBM products to be shown in Products and Orders component    
6. CReate a DataTable as Angular Element with following behavior (Immediate in Lab Session)
    - Accept a Property 'DataSource' of the type array
    - The Table Columns and Rows must be generated based on data present in DataSource
    - The Element must have an event that will emit the selected row data to its consumer
    - The Element must have 'CanDelete' property, if this property is true then each row should generate as Delete button. When this button is clicked the record must be deleted from its consumer.  
7. Modify The Routing App by completing the Create / Edit View for Performing Create and Edit operations. Modify the ProductList for having the Delete button to delete the record  by navigating the DeleteComponent. This component will show the record to be deleted. (Mandatory)    
8. Using the Angular Material Table Component perform the following
    - The Table should Show data received from the HttpService (Mandator and immediate)
    - Make sure that, the data is shown in 4 pages in Table (Mandatory and Immediate)
        - Each page should have the size as 5 records
    - When a row is selected (selection event of Table), display the data of selected row in dialog-box which is having Save and Cancel buttons (Mandatory and Immediate)
        - The End-User should be able to update row by making the call to HttpService (optiona)    