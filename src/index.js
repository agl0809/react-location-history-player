import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import LocationHistoryMap from './LocationHistoryMap';
import {getCoordinates} from './locationHistoryController';
import {GM_ZOOM, GM_CENTER, GM_BOOTSTRAP_URL_KEYS, JSON_FILE_URL} from './helpers/constants';
import registerServiceWorker from './registerServiceWorker';

export default function start() {
  getCoordinates(JSON_FILE_URL)
  .then((coordinates) => {
    ReactDOM.render(<LocationHistoryMap
        zoom={GM_ZOOM}
        center={GM_CENTER}
        bootstrapURLKeys={GM_BOOTSTRAP_URL_KEYS}
        coordinates={coordinates}/>,
      document.getElementById('map'));
  });
}

start();
registerServiceWorker();
