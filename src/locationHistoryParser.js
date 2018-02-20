import { SCALAR_E7 } from './helpers/constants';

function getLagLngCoordinates(coordinates) {
  return coordinates.map(elem => [
    elem.latitudeE7 * SCALAR_E7,
    elem.longitudeE7 * SCALAR_E7
  ]);
}

function getCoordinates(coordinates) {
  return coordinates.locations
    ? getLagLngCoordinates(coordinates.locations)
    : getLagLngCoordinates(coordinates);
}

export default function locationHistoryParser(serviceResponse = '[]') {
  return getCoordinates(JSON.parse(serviceResponse));
}
