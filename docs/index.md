[![Build Status](https://travis-ci.org/agl0809/react-location-history-player.svg?branch=master)](https://travis-ci.org/agl0809/react-location-history-player)

View [DEMO](https://react-location-history-player.herokuapp.com/)

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

## Code Style

### Installation 
Adding prettier package
```shell
npm install prettier
```

Run the following command in the project directory to install Airbnb eslint
```shell
$ (
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Create `.eslintrc.js` in root folder
```javascript
module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb',
    'prettier',
  ],
  'plugins': [
    'prettier',
  ],
  'rules': {
    'prettier/prettier': ['error', {
      'singleQuote': true
    }],
  'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  }
}
```


### Usage
Linting code
```shell
node_modules/.bin/eslint ./src
````
Fixing some errors
```shell
node_modules/.bin/eslint --fix ./src
````

### Code Style Guide 
[Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

### Refs
[Formating code automatically - CRA docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#formatting-code-automatically)

[displaying lint output in the editor - create-react-app docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#displaying-lint-output-in-the-editor)

[Create React App: Linting all the things](https://groundberry.github.io/development/2017/06/11/create-react-app-linting-all-the-things.html)

[Set up create-react-app with Redux, React Router, Redux Thunk, Prettier, SCSS, Airbnb eslint, Standard stylelint, and CSS modules](https://medium.com/stephenkoo/how-to-set-up-create-react-app-redux-react-router-redux-thunk-prettier-scss-airbnb-eslint-dda0bba5616a)

## Heroku Continuous Integration

### Installation
The [Heroku Command Line Interface](https://devcenter.heroku.com/articles/heroku-cli) is a tool for creating and managing Heroku apps from the command line, built with node.js and open source. 

### Create a new app 

Creating a new heroku app using [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack).

```shell
heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
```

### Update the heroku app
Running deploy process. 
```shell
git push heroku master
```

The browser will show the app hosted by Heroku.
```shell
heroku open
```

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

## Scaffolding
The project was scaffolded using [create-react-app](https://github.com/facebook/create-react-app)

## Testing react components 

### Shadow Renderer
[React Doc](https://reactjs.org/docs/shallow-renderer.html)

Shallow rendering lets you **render a component “one level deep”**. The child components are not instantiated or rendered. This does not require a DOM.


#### Installing
```shell
 npm i --save-dev react-test-renderer
```

#### Usage
```javascript
import ShallowRenderer from 'react-test-renderer/shallow';
import LocationHistoryMap from 'components/LocationHistoryMap';
import GoogleMap from 'google-map-react';
//...

const GM_ZOOM = 1;
const renderer = new ShallowRenderer();

renderer.render(<LocationHistoryMap zoom={GM_ZOOM}/>);

const result = renderer.getRenderOutput();

expect(result.props.className).toBe('map');
expect(result.props.children.type).toBe(GoogleMap);
expect(result.props.children.props.defaultZoom).toBe(GM_ZOOM);
```

### Test Renderer
[React doc](https://reactjs.org/docs/test-renderer.html) | [npm](https://www.npmjs.com/package/react-test-renderer) | [github](https://github.com/facebook/react/tree/master/packages/react-test-renderer)

Provides a React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM.

This package makes it easy to grab a snapshot of the platform view hierarchy (similar to a DOM tree) rendered by a React DOM or React Native component without using a browser or jsdom.

#### Installing
```shell
 npm i --save-dev react-test-renderer
```

#### Usage
```javascript
import TestRenderer from 'react-test-renderer';
```

You can use 
[Jest’s snapshot testing feature](https://facebook.github.io/jest/blog/2016/07/27/jest-14.html) 
to automatically save a copy of the JSON tree to a file and check in your tests that it hasn’t changed.
```javascript
const renderer = TestRenderer.create(<LocationHistoryMap/>);

renderer.toJSON();
```
You can also traverse the output to find specific nodes and make assertions about them.

```javascript
import TestRenderer from 'react-test-renderer';
import LocationHistoryMap from 'components/LocationHistoryMap';
import GoogleMap from 'google-map-react';

const renderer = TestRenderer.create(<LocationHistoryMap />);
const instance = renderer.root;

expect(instance.findByType(GoogleMap).props.defaultZoom).toBe(13);
```

### Links
#### ReactTestUtils | [React doc](https://reactjs.org/docs/test-utils.html) | 
Makes it easy to test React components in the testing framework of your choice.

[Testing React apps with Jest](https://facebook.github.io/jest/docs/en/tutorial-react.html#content)

## Third party dependencies
- [react](https://github.com/facebook/react)
- [google-map-react](https://github.com/istarkov/google-map-react) 
- [google map heatmaplayer](https://developers.google.com/maps/documentation/javascript/heatmaplayer)



