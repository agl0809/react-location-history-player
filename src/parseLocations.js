import { SCALAR_E7 } from './helpers/constants';

function getLagLngCoordinates(coordinates) {
  return coordinates.map(({ latitudeE7, longitudeE7 }) => [
    latitudeE7 * SCALAR_E7,
    longitudeE7 * SCALAR_E7
  ]);
}

function getCoordinates(coordinates) {
  return coordinates.locations
    ? getLagLngCoordinates(coordinates.locations)
    : getLagLngCoordinates(coordinates);
}

export default function locationHistoryParser(serviceResponse = []) {
  return getCoordinates(serviceResponse);
}
