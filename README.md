[![Build Status](https://travis-ci.org/agl0809/react-location-history-player.svg?branch=master)](https://travis-ci.org/agl0809/react-location-history-player)

Try a [DEMO](https://react-location-history-player.herokuapp.com/)<br>
Check out the [DOCUMENTATION](https://agl0809.github.io/react-location-history-player/)

## Installation
```bash
git clone https://github.com/agl0809/react-location-history-player/
cd react-location-history-player
npm install
```

## Available scripts  
Runs the app in the development mode:
```shell
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>
The page will reload if you make edits.You will also see any lint errors in the console.


Launches the test runner in the interactive watch mode:
```shell
npm test
```

Builds the app for production to the `build` folder:
```shell
npm run build
```
It correctly bundles React in production mode and optimizes the build for the best performance.<br>
The build is minified and the file names include the hashes.

## Settings
There are two different ways to set up the data provided in **constants.js**<br>

[Firebase service](https://api-project-923029851043.firebaseio.com/locations.json)<br>
By default Firebase service example will be used.   
```javascript
export const JSON_FILE_URL = 'https://api-project-923029851043.firebaseio.com/locations.json';
``` 

[Google Takeout](https://takeout.google.com/settings/takeout)<br> 
Use a specific data file downloading the location history JSON file. Then move it to `/public` project folder .<br>
```javascript
export const JSON_FILE_URL = '/YOUR_FILE_NAME.json';
``` 


