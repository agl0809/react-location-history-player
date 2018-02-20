import getCoordinates from '../locationHistoryController';
import { SCALAR_E7 } from '../helpers/constants';

describe('locationHistoryController', () => {
  it('should read the file content', () => {
    const fileContent = 'any file content';
    const JSONFileUrl = 'anyURL';
    const expectedCoords = [['any coordinates pair']];
    const serviceDependency = jest.fn(
      () =>
        new Promise(resolve => {
          process.nextTick(() => resolve(fileContent));
        })
    );
    const parserDependency = jest.fn(() => expectedCoords);
    const options = {
      url: JSONFileUrl,
      service: serviceDependency,
      parser: parserDependency
    };
    const promise = getCoordinates(options);

    expect.assertions(2);

    return promise.then(() => {
      expect(serviceDependency).toBeCalledWith(JSONFileUrl);
      expect(parserDependency).toBeCalledWith(fileContent, SCALAR_E7);
    });
  });
});
