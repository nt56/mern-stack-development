import React from 'react'
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(

  // Ways to render html element
  // Must have parent container /element


  // 1- div
  // <div>

  //   <h1>Welcome To React JSX</h1>
  //   <h1>Welcome To React JSX</h1>
  //   <h1>Welcome To React JSX</h1>
  //   <h1>Welcome To React JSX</h1>
  //   <h1>Welcome To React JSX</h1>

  // </div>


  // 2- Array
  // [

  //   <h1>Welcome To JSX 1</h1>,
  //   <h1>Welcome To JSX 2</h1>,
  //   <h1>Welcome To JSX 3</h1>

  // ]


  // 3- React.Fragment

  // empty container used to wrapped/ grouping the JSX Code
  // Object of keys


  // <React.Fragment>

  //   <h1>Welcome To JSX 1</h1>
  //   <h1>Welcome To JSX 2</h1>
  //   <h1>Welcome To JSX 3</h1>


  // </React.Fragment>


  // or

  // <>

  //   <h1>Welcome To JSX 1</h1>
  //   <h1>Welcome To JSX 2</h1>
  //   <h1>Welcome To JSX 3</h1>

  // </>


  // 4- Is also container

  // Our app app goes into strict mode
  // It highlight warning , erros and possible problemes i our app while development
  // index.js

  // Lets you find common bugs in your components early during development.


  <React.StrictMode>

    <h1>Welcome To JSX 1</h1>
    <h1>Welcome To JSX 2</h1>
    <h1>Welcome To JSX 3</h1>
    <h1>Welcome To JSX 5</h1>


  </React.StrictMode>

);