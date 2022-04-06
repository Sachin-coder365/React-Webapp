This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

## Run Project

Before starting the work on this  projec, let us indroduse you with the common problems comming with the npm in 
Vs-code.
{1. you may see the error with some dependancies, kindly check all the dependancies needed for this project or you may visit to 
 (https://dev.to/nikhilkumaran/don-t-use-create-react-app-how-you-can-set-up-your-own-reactjs-boilerplate-43l0#:~:text=It%27s%20important%20to%20understand%20the%20things%20that%20need,which%20are%20used%20under%20the%20hood%20by%20react-scripts.)
 2. commanly will see the problem wuth the server sites during installing npm for the project work , 
  because the proxy server is not in capable mode with  visual studio for india / so recomend you to have internet conectivity by VPN server.
  3. Don't forget to delete the #package-lock.json, before working on.
  
  4. You may also check your package.Json file   
  
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    
    you may convert this form   
  
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    
    to
    
     "scripts": {
    "start": "react-scripts --openssl-Legacy-Provider start",
    "build": "react-scripts --openssl-Legacy-Provider  build",
     .  }

than,
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


 Follow up the above instructions for more effeciant and smooth working on Project .
