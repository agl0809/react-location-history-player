import React from 'react';
import ReactDOM from 'react-dom';
import {GM_ZOOM, GM_BOOTSTRAP_URL_KEYS, GM_CENTER_LAT, GM_CENTER_LNG} from '../helpers/constants';
import LocationHistoryMap from '../LocationHistoryMap';

describe('LocationHistoryMap component', function () {
  it('should render a map in container assigned', () => {
    const mapContainer = document.createElement('div');
    ReactDOM.render(<LocationHistoryMap
      zoom={GM_ZOOM}
      bootstrapURLKeys={GM_BOOTSTRAP_URL_KEYS}
    />, mapContainer);
    ReactDOM.unmountComponentAtNode(mapContainer);
  });
});


