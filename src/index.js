import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LocationHistoryMap from './LocationHistoryMap';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LocationHistoryMap/>, document.getElementById('map'));
registerServiceWorker();