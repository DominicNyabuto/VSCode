/*
 - freecodecamp YT Node.js and Express.js - road to MERN Stack 


 // EXPRESSJS NOTES 
 
 Express is a web framework for NodeJS . It is server-side
 as opposed to React, Angular, & Vue  which are for the 
 client-side (front end). Use Express and React for full stack 
 applications. 
 - It is very basic compared to Django for Python, not for high level 
 stuff
- Minimalist but give syou full control of what to create 

Benefits: 
- easier for web apps than plani Node.JS 
- used for both server rendered apps and API.Microservices 
- very light and fast 
- full contoll 
- most populat NOde framework 
- better when mixing front end and back end with JS 

Basic Route handling: 
- is simple to handle requests and routes 
- can parse incoming data with the Body Parse 
- Used with MongoDB, Postgres, MySQL

Express Middleware 
- MIDDLEWARE FUNCTIONS - are functions that have acces to the request 
and response objects. They are Express built in functions but you can 
get more middleware functions from 3rd party packages and custom 
middleware. 
- They help execute any code, make changes to the request.response 
objects, end response cycle, and call next middleware in the stack 
- an example is the Passport Js whose purpose is to authenticate requests
which it does through through plugins. It is great since 
there is no built-in authentication system with Express. 

// NODEJS NOTES 
- It is an environment to run JS outside the browser 
- It is built on Chrome's V8 JS engine and has a big community around it 
- A versatiler tool for  full-stack development 

// Browser Js     vs    NOdeJS 

- DOM                 - No DOM 
- WIndow              - No Window
- Interactive web apps - Server SIde Apps 
- No filesystem       - Includes a file system 
- Fragmanentaiton     - Versions 
- ES6 Modules         - CommonJS 


// Nodu.Js has global variables and has no windows

__dirname - path to curren tdirectory 
__filename - file name 
require - function to use modules (CommonJS)
module - info about curent moduel (file)
process - info about env where the program is being executed 

*/


// Modules - encapsulated code (only share minimum)
// CommonJS - every file is module (by default)



const names = require('./4-names')
const sayHI = require('./5-utils')
const chicken = require('./6-alternative-flavor')
require('./7-mind-grenade')

sayHI('susan')
sayHI(names.john)
sayHI(names.peter)

/* 
// NODEJS Built-in Modules - so many modules in documentation 
in Node.js website 

- OS 
- Path
- FS
- Http 

*/
