import { SCALAR_E7 } from './helpers/constants';

export default function getCoordinates(options) {
  return new Promise(resolve => {
    options.service(options.url).then(fileContent => {
      resolve(options.parser(fileContent, SCALAR_E7));
    });
  });
}
