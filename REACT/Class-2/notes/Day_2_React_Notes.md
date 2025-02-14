
# Setup REACTJS Project

1. We can integrate React in existing HTML file

 Using CDN link Or Local setup 

  const root=ReactDOM.createRoot(document.getElementById('root));
  root.render()

2.Through commands-npm tool
3.Single Command


*********************************************************

# Environment Setup


👉Source editor/text editor
👉Browser-chrome

👉Extension-  for development faster,easily development- react developer tool


#  Nodejs environment

Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, 
Linux, Unix, macOS, and more.
 Node.js runs on the V8 JavaScript engine,
 and executes JavaScript code outside a web browser.

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. 
This allows Node.js to be very performant. Node.js lets developers use JavaScript 
to write command line tools and for server-side scripting


Node
Npm use

Package manager

NPM- Requires Node JS environment for NPM

Others -YARN,Bower, Nuget,Ruby Gems,Pnpm

**************************************************************************************
# NPM


https://nodejs.org/en


👉To check version after Installation

   node -v
   npm -v



**************************************************************************************

NPM-Node Packaging manager

npm is a package manager for the JavaScript programming language maintained by npm, 
Inc. 
npm is the default package manager for the JavaScript runtime environment Node.js
 and is included as a recommended feature in the Node.js installer


 Isaac Z. Schlueter 

 Written In JS
 Free
 open source
 Manage all the packgaes and modules for nodejs and ReactJS


Node Packaging manager
   for npm need  Nodejs  runtime Environment

largest software registery
Around 8 lac packages


******************************

npm init  

For Auto Config- npm init -y

npm config

npm config set init-author name
npm config delete init-author name
npm config edit


npm help
npm help npm
npm config
npm start- Helps start react application
npm test
npm i /install
npm uninstall 
npm update

npm run build- used while deployment



npm install        install all the dependencies in your project
npm install <foo>  add the <foo> dependency to your project
npm test           run this project's tests
npm run <foo>      run the script named <foo>
npm <command> -h   quick help on <command>
npm -l             display usage info for all commands
npm help <term>    search for help on <term> (in a browser)
npm help npm       more involved overview (in a browser)

Other Packaging manager-  bower,yarn,Ruby Gems,Nuget,pnpm

************************************************************************************
babel-  Js transpiler or js compiler

Modern js convert plain js (backward compatible version)

free,open source
popular tool of js


Poylfill features-  complete work if browser doesn't have updated features

Transform syntax

Array.includes()



let age=20;
var age=20;

********************************************************************************************


# Webpack- 

Is a JS Module Bundler

Webpack- JS Files bundling  i.e Module Bundler

Bundling JS,CSS files  for usage on browser

20 js-  1 file bundling

20 JS Files => 1 Js Files

20 CSS- 1 file


Capable to transforming,bundling,packaging any resources/assets/files

webpack:{
   start:index.js,
   script:index.js
   style:[]
}


Webpack not bundling public folder


*******************************************************


# Separate Installation

npm i react
npm i react-dom

npm i @babel/standalone

npm i webpack-cli --save


npm i webpack --save
npm i webpack -dev-server --save
npm i webpack -cli --save



************************************************

# Single command 

****************************

😊npx create-react-app firstapp 


npx-   node packaging executor
        is a package runner tool for npm
        
😊Temporay install packages and react application

 npm i create-react-app my-app
 Permanently install packages and react application i.e Globally





************************************************************

# Steps To Create Our React APP

👉mkdir React_Day_2_First_APP
cd React_Day_2_First_APP

👉npx create-react-app firstapp

👉cd firstapp

👉npm start- batch program
            Executes multiple commands sequentially


👉Port no 3000

******************************************************************************************

👉 npx create-react-app my-app

Install- 

react
react-dom
react-scripts
babel
jest
webpack
web vitals- for performance check


Installing All the dependencies which we need to run first basic react application




npm init
npx create-react-app myapp
cd myapp
npm start



web vital Error
npm i web-vital

# start application

npm start

********************************************************

Error
cls



*******************************************

Crossorigin


CORS (Cross Origin Resource Sharing) is an HTTP feature that enables 
a web application running under one domain to access resources in another domain.
 In order to reduce the possibility of cross-site scripting attacks,
 all modern web browsers implement a security restriction known as same-origin policy.





local setup Through command

npm i react --save
npm i react-dom --save
npm i @babel/standalone --save

npm i webpack --save
npm i webpack -dev-server --save
npm i webpack -cli --save
*********************************************


Through Single command



//temporary installed packages for your project
npx create-react-app app_name

npx= is a runner tool
node packeging executor

//permanently installed packages in your system
npm i create-react-app my-app



npm init  
npm init -y


npm start-  is a batch program(multiple commands executes sequentially)


import React from 'react';
import ReactDOM from 'react-dom/client';


// createRoot lets you create a root to display React components inside a browser DOM node.
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
<h1>Hello Welcome To Modern React JSX Code</h1>
);

*********************************************************


