import {SCALAR_E7} from './helpers/constants';

function _getCoordinates(coordinates) {
  let coordinatesParsed = [];

  coordinates.forEach((point) => {
    const lat = point.latitudeE7 * SCALAR_E7;
    const lon = point.longitudeE7 * SCALAR_E7;

    coordinatesParsed.push([lat, lon]);
  });

  return coordinatesParsed;
}

function locationHistoryParser(serviceResponse = '') {
  const coordinates = JSON.parse(serviceResponse);
  return coordinates.locations ?
    _getCoordinates(coordinates.locations) : _getCoordinates(coordinates);
}

export {locationHistoryParser};