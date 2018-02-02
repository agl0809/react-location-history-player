import React from 'react';
import ReactDOM from 'react-dom';
import LocationHistoryMap from '../LocationHistoryMap';
import {GM_ZOOM, GM_CENTER, GM_BOOTSTRAP_URL_KEYS} from '../helpers/constants';

describe('LocationHistoryMap component', function () {
    it('should render a map in container assigned', () => {
        const mapContainer = document.createElement('div');
        ReactDOM.render(<LocationHistoryMap
            zoom={GM_ZOOM}
            center={GM_CENTER}
            bootstrapURLKeys={GM_BOOTSTRAP_URL_KEYS}
        />, mapContainer);
        ReactDOM.unmountComponentAtNode(mapContainer);
    });
});


