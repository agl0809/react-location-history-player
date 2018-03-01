import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // Theme
import injectTapEventPlugin from 'react-tap-event-plugin'; // Click handler
import './styles/index.css';
import parseLocations from './parseLocations';
import fetchLocations from './fetchLocations';
import {
  GM_ZOOM,
  GM_CENTER_LAT,
  GM_CENTER_LNG,
  GM_KEY,
  GM_LANGUAGE,
  GM_REGION,
  GM_VISUALIZATION,
  JSON_FILE_URL
} from './helpers/constants';
import LocationHistoryMap from './components/LocationHistoryMap';
import Header from './components/Header';

injectTapEventPlugin();

export default function init() {
  const rootContainer = document.getElementById('app');

  const styles = {
    header: {
      paddingLeft: 0
    }
  };

  fetchLocations({
    url: JSON_FILE_URL,
    parser: parseLocations
  }).then(coordinates => {
    ReactDOM.render(
      <MuiThemeProvider>
        <Header styles={styles.header} />
        <LocationHistoryMap
          zoom={GM_ZOOM}
          centerLat={GM_CENTER_LAT}
          centerLng={GM_CENTER_LNG}
          gmKey={GM_KEY}
          language={GM_LANGUAGE}
          region={GM_REGION}
          libraries={GM_VISUALIZATION}
          coordinates={coordinates}
        />
      </MuiThemeProvider>,
      rootContainer
    );
  });
}

init();
