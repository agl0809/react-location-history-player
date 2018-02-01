import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LocationHistoryMap from './LocationHistoryMap';
import {GM_ZOOM, GM_CENTER, GM_BOOTSTRAP_URL_KEYS} from './helpers/constants';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<LocationHistoryMap
    zoom={GM_ZOOM}
    center={GM_CENTER}
    bootstrapURLKeys={GM_BOOTSTRAP_URL_KEYS}/>, document.getElementById('map'));

registerServiceWorker();
