import React from 'react';
import GoogleMap from 'google-map-react';
import ShallowRenderer from 'react-test-renderer/shallow';
import LocationHistoryMap from '../components/LocationHistoryMap';

describe('LocationHistoryMap component', function () {
  it('should render the map with the right settings', () => {
    const GM_ZOOM = 1;

    const renderer = new ShallowRenderer();

    renderer.render(<LocationHistoryMap zoom={GM_ZOOM}/>);

    const result = renderer.getRenderOutput();


    expect(result.props.className).toBe('map');
    expect(result.props.children.type).toBe(GoogleMap);
    expect(result.props.children.props.defaultZoom).toBe(GM_ZOOM);
  });

});


