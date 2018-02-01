import React from 'react';
import ReactDOM from 'react-dom';
import LocationHistoryMap from './LocationHistoryMap';

describe('LocationHistoryMap component', function () {
    it('should render a map in container assigned', () => {
        const mapContainer = document.createElement('div');
        ReactDOM.render(<LocationHistoryMap/>, mapContainer);
        ReactDOM.unmountComponentAtNode(mapContainer);
    });
});


