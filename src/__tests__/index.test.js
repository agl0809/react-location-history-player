import * as locationHistoryController from '../locationHistoryController';

describe('running up the app', () => {
  it('should get the coordinates and render a map component', () => {
    const coordsResponse = [['any coordinates pair']];

    locationHistoryController.getCoordinates = jest.fn(() =>
      new Promise((resolve) => {
        process.nextTick(
          () => resolve(coordsResponse)
        );
      })
    );

  });
});