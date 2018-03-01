import parseLocations from '../parseLocations';

describe('parseLocations', () => {
  describe('retrieving a valid response', () => {
    const SCALAR_E7 = 0.0000001;
    const latOne = 1;
    const lonOne = 1;
    const expectedObject = [[latOne * SCALAR_E7, lonOne * SCALAR_E7]];

    describe('managing an array of objects', () => {
      it('should return an array of coordinates parsed properly', () => {
        const locations = [{ latitudeE7: latOne, longitudeE7: lonOne }];

        const response = parseLocations(locations);

        expect(response).toEqual(expectedObject);
      });
    });

    describe('managing an object with locations key', () => {
      it('should return an array of coordinates parsed properly', () => {
        const locations = {
          locations: [{ latitudeE7: latOne, longitudeE7: lonOne }]
        };

        const response = parseLocations(locations, SCALAR_E7);

        expect(response).toEqual(expectedObject);
      });
    });
  });

  describe('retrieving an invalid response', () => {
    it('should return an empty array', () => {
      const response = parseLocations();

      expect(response).toEqual([]);
    });
  });
});
