React is used to build fast and scalable apps.
Advanced topics: Routing, State management, Fetching data with React Query, Authentication, 
    Error handling, Performance Optimization.
React deals with frontend.
Requirements;- Html, css, Js
TypeScript is a superset of javascript that adds static typing to the language.
    It helps catch errors earlier in the development process. 
    Can save time and headaches.

        What is React
        -------------
It is a javascript library that is used to build dynamic and interactive use interfaces.
Created at Facebook at 2011
Most used javascript library that Angular Vue

        Why was it Created
        -------------------
When a web page is loaded in a browser the browser loads the html code
    and creates a tree like structure called Document Object Model(DOM).
This allows us to use javascript and change the page content in response
to users actions.
For example you can use javascript to hide an element when a button is clicked.
    This is called Vanilla javascript:- Plain javascript code without any 3rd party tool.
Working with a dom it can be very challenging with a large code.

    This is were react comes in to play.
React you no longer to worry with querying and updating DOM elements.
Instead you describe a webpage using small reusable compenents 
    and react will take efficiently and updating DOM elements.
Compenents helps to write reusable modular and better organized code.
In a website You could build each section of the web page as seperate components.
Essentialy a react application is a tree of components with the app as the root bringing everything together.

        Setting up The development environments
        ----------------------------------------
Requirement is Node version 16 or higher checked in terminal
    ~~ node -v ~~
Use Prettier extension for code formatting.
Go the the file -> preference -> settings -> Search for'format on save' and tick it
    Everytime you save a file it automatically get reformated.

    Creating a React app
    --------------------
i. Create react APP(CRA)
ii. vite[Smaller and give bundle sizes]

Create using vite run:
    ~~ npm create vite@latest ~~
    for todays project
        ~~ npm create vite@4.1.0 ~~
        ~~ y ~~
        ~~ Project name: 'Your project name'~~
        ~~ Select framework: React~~
        ~~ Select a variant: TypeScript~~
Vite creates your react project and to run it
        ~~ cd 'Your project name'~~
        ~~ npm install~~
        ~~ npm run dev~~[Runs the local webserver]

        Project structure
        -----------------
/node_module folder
    3rd party libraries like reacta nd other tools are installed.
    You owuld never have to touch this.
/public
    Public assests like videos images etc.
/src
    -app.tsx
Outside of the source folder
    -index.html: basic html template
        a div with the id="root". Container for our application
            <div id="root"></div>
        - <script type="module" src="/src/main.tsx"></script>
            entry point to our application.
    - package.json
        information about this project
    - tsconfig.json
        A TypeScript configurating file that tells the compiler how to compile the code in javascript.
    - vite.confige.ts

        Creating a React compenent
        --------------------------
In the src folder add a new file called 'message.tsx'
    Note:- .ts for TypeScript files and .tsx for react compenents.

2 ways of creating a react compenent
    - javascript class
    - function
function based compenents are more popular coz they are more consice and 
 easier to write. Recommended appproach for new projects. 
 example:-
    - Create the [[message.tsx]]
    - export it
    - In the [[App.tsx]] delete everything and create a new compenent called app

    How React Works
    ---------------
 A componet tree with  the [[app]] as the root or top level and the message being the child.
 When the application starts react take the compenent tree and build a javascript data structure called the 'Virtual DOM'.
 The Virtual DOM is a lightweight in memeory representation of a component tree where each node represnts a component and its properties.
 When the state or data of its compenets changes react  update the coresponding node on the virtual DOM to reflect the new state then compares the current to th eprevious version to check which node should be updated. Then update those nodes in the actual DOM by the react-dom library which you could see in the [[package.json]] in the dependencies.
 Using react you can create application for all devices from web,mobile and desktop devices.

    React Ecosystem
    ----------------
In contrast to React librart you have frameworks like Angular, Vue.
Difference between a library and a framework?
    A library is a tool that provides specific functionality.(A tool)
    A Framework is a set of tools and guidelines for building apps. (A tool set)

React is only good at creating dynamic and interactive UI.
You need tools for :
    - Routing that allows users to go from one page to another
    
    


    



