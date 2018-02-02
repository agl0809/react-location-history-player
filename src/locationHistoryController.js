import {timeLineParser} from './timeLineParser';
import {service} from './service';
import {SCALAR_E7} from './helpers/constants';

function getCoordinates(JSONFileUrl) {
    return new Promise((resolve, reject) => {
        service(JSONFileUrl).then(fileContent => {
            resolve(timeLineParser(fileContent, SCALAR_E7));
        });
    });
}

export {getCoordinates};
