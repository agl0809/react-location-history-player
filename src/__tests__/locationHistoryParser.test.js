import locationHistoryParser from '../locationHistoryParser';

describe('locationHistoryParser', () => {
  describe('retrieving a valid response', () => {
    const SCALAR_E7 = 0.0000001;
    const latOne = 1;
    const lonOne = 1;
    const expectedObject = [[latOne * SCALAR_E7, lonOne * SCALAR_E7]];

    describe('managing an array of objects', () => {
      it('should return an array of coordinates parsed properly', () => {
        const fileContent = `[{"latitudeE7": ${latOne},"longitudeE7": ${lonOne}}]`;

        const response = locationHistoryParser(fileContent);

        expect(response).toEqual(expectedObject);
      });
    });

    describe('managing an object with locations key', () => {
      it('should return an array of coordinates parsed properly', () => {
        const fileContent =
          `{"locations": [{"latitudeE7": ${latOne},` +
          `"longitudeE7": ${lonOne}}]}`;

        const response = locationHistoryParser(fileContent, SCALAR_E7);

        expect(response).toEqual(expectedObject);
      });
    });
  });

  describe('retrieving an invalid response', () => {
    it('should return an empty array', () => {
      const expectedObject = [];

      const response = locationHistoryParser();

      expect(response).toEqual(expectedObject);
    });
  });
});
