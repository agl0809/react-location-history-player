- [Installation](#installation)
- [Settings](#settings)
- [Available scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Material-UI integration](#material-ui-integration)
- [Third party](#third-party)  
- [Scaffolding](#scaffolding)


## Installation
```bash
git clone https://github.com/agl0809/react-location-history-player/
cd react-location-history-player
npm install
```

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

## Available scripts  
In the project directory, you can run:

**npm start**<br>
Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>
The page will reload if you make edits.You will also see any lint errors in the console.

**npm test**<br>
Launches the test runner in the interactive watch mode.

**npm run build**<br>
Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.<br>
The build is minified and the file names include the hashes.

## Material-UI integration
### Installation
Adding latest version using CLI in the project
```
npm install --save material-ui
```
#### React-Tap-Event-Plugin
Some components use react-tap-event-plugin to listen for touch events because onClick is not fast enough.
It's not needed for versions 0.19.0 and higher.
```javascript
import injectTapEventPlugin from 'react-tap-event-plugin';
 
injectTapEventPlugin();
```

#### Roboto Font
Material-UI was designed with the [Roboto](https://fonts.google.com/?selection.family=Roboto:300,400,500) font in mind. We include it in `index.html`.
```javascript
    <script>
      var WebFontConfig = {
        google: { families: [ 'Roboto:400,300,500:latin' ] }
      };
      (function() {
        var wf = document.createElement('script');
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();
    </script>
```

### Links
**Material-ui** |
[official site](http://www.material-ui.com/) |
[github repository](http://www.material-ui.com/) |
[npm package](https://www.npmjs.com/package/material-ui) |<br>
React components that implement Google's Material Design

**Material Design** |
[official site](https://material.io) |
[guidelines](https://material.io/guidelines/) |<br>
Material Design is a unified system that combines theory, resources, and tools for crafting digital experiences.

## Third party 
[google-map-react](https://github.com/istarkov/google-map-react)

[google map heatmaplayer](https://developers.google.com/maps/documentation/javascript/heatmaplayer)

## Scaffolding
[create-react-app](https://github.com/facebook/create-react-app)







