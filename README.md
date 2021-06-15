# Kentomeister
This app takes data provided by an existing API and displays it in a browser. 


## Tech Stack

This project uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [Express] - HTML enhanced for web apps!
- [React] - Frontend Framework
- [markdown-it] - Markdown parser done right. Fast and easy to extend.

## Team Members - Widget:
- Alex Zinn - Product Details
- Raju Gharti - Related Products
- Ryan Pannone - Questions & Answers
- Tomas Rodriguez - Ratings & Reviews

## Image Gallery Demo
<img src="https://media.giphy.com/media/2BwHMPM6NQRBwm4bAO/giphy.gif">

## SETUP
Run the following command in the terminal:
- npm install
- create a _.env_ file in the root directory with the following info:
  ```
  GITHUB_TOKEN= *** YOUR GITHUB API TOKEN GOES HERE ***
  PORT=3000
  API_URL=https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe
  NODE_ENV=development

  ```
- open two terminal windows
    - terminal 1: npm run dev-server
    - terminal 2: npm run dev-client

Navigate to http://localhost: **port specified in .env file** in chrome


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [React]: <https://reactjs.org/>
