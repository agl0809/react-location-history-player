import fetchLocations from '../fetchLocations';

describe('#fetchLocations', () => {
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

  it('should read and parse the data retrieved', async () => {
    const serviceUrl = 'any url';
    const expectedReturnValue = 'any response parsed';
    const parserDependency = jest.fn(() => expectedReturnValue);
    const options = {
      url: serviceUrl,
      parser: parserDependency
    };

    const returnValue = await fetchLocations(options);

    expect(global.fetch).toHaveBeenCalledWith(serviceUrl);
    expect(parserDependency).toHaveBeenCalledWith(response);
    expect(returnValue).toBe(expectedReturnValue);
  });
});
