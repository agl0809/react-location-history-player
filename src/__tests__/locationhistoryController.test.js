import getCoordinates from '../locationHistoryController';

describe('#getCoordinates', () => {
  const response = 'any response';

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise(resolve => {
          resolve({
            json() {
              return response;
            }
          });
        })
    );
  });

  it('should read the file content', async () => {
    const JSONFileUrl = 'anyURL';
    const expectedReturnValue = 'any value parsed';
    const parserDependency = jest.fn(() => expectedReturnValue);
    const options = {
      url: JSONFileUrl,
      parser: parserDependency
    };

    const returnValue = await getCoordinates(options);

    expect(global.fetch).toHaveBeenCalledWith(JSONFileUrl);
    expect(parserDependency).toHaveBeenCalledWith(response);
    expect(returnValue).toBe(expectedReturnValue);
  });
});
