import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {getCoordinates} from './locationHistoryController';
import registerServiceWorker from './registerServiceWorker';
import {GM_ZOOM, GM_CENTER_LAT, GM_CENTER_LNG, GM_KEY, GM_LANGUAGE, GM_REGION, GM_VISUALIZATION, JSON_FILE_URL} from './helpers/constants';
import LocationHistoryMap from './LocationHistoryMap';

function init() {
  getCoordinates(JSON_FILE_URL)
  .then((coordinates) => {
    ReactDOM.render(<LocationHistoryMap
        zoom={GM_ZOOM}
        centerLat={GM_CENTER_LAT}
        centerLng={GM_CENTER_LNG}
        gmKey={GM_KEY}
        language={GM_LANGUAGE}
        region={GM_REGION}
        libraries={GM_VISUALIZATION}
        coordinates={coordinates}/>,
      document.getElementById('map'));
  });
}

init();
registerServiceWorker();
