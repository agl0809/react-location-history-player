import {SCALAR_E7} from './helpers/constants';

function _parseTakeOutParser(coordinates) {
  let coordinatesParsed = [];

  coordinates.locations.forEach((point) => {
    const lat = point.latitudeE7 * SCALAR_E7;
    const lon = point.longitudeE7 * SCALAR_E7;

    coordinatesParsed.push([lat, lon]);
  });

  return coordinatesParsed;
}

function _parseLocationsService(coordinates) {
  let coordinatesParsed = [];

  coordinates.forEach((point) => {
    const lat = point.latitudeE7 * SCALAR_E7;
    const lon = point.longitudeE7 * SCALAR_E7;

    coordinatesParsed.push([lat, lon]);
  });

  return coordinatesParsed;
}

function timeLineParser(serviceResponse = '') {
  const coordinates = JSON.parse(serviceResponse);
  return coordinates.locations ?
    _parseTakeOutParser(coordinates)
    : _parseLocationsService(coordinates);
}

export {timeLineParser};